import { useState, useCallback, useRef } from "react";

interface StrackerFormConfig {
  formSlug: string;
  onSuccess?: (redirectUrl?: string) => void;
  onError?: (error: string) => void;
  maxRetries?: number; // Maximum number of retry attempts (default: 2)
  retryDelay?: number; // Delay between retries in ms (default: 1000)
  enableAnalytics?: boolean; // Track form events (default: true)
  useServerRoute?: boolean; // Use server-side API route (default: true for security)
}

interface StrackerFormState {
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  retryCount: number;
}

interface StrackerApiResponse {
  success: boolean;
  error?: string;
  redirect_url?: string;
}

/**
 * Custom hook for submitting forms to Stracker API
 *
 * @param config - Configuration object with formSlug and optional callbacks
 * @returns Object with submit function and form state
 *
 * @example
 * const { submitToStracker, isSubmitting, error, success } = useStrackerForm({
 *   formSlug: "book-a-meeting",
 *   onSuccess: (redirectUrl) => {
 *     if (redirectUrl) {
 *       window.location.href = redirectUrl;
 *     } else {
 *       toast.success("Form submitted successfully!");
 *     }
 *   },
 *   onError: (error) => {
 *     toast.error(error);
 *   }
 * });
 */
// Rate limiting: Track submission timestamps
const submissionTimestamps: number[] = [];
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 5;

/**
 * Track analytics event
 */
function trackFormEvent(eventName: string, formSlug: string, metadata?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      form_slug: formSlug,
      ...metadata,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Stracker Analytics] ${eventName}:`, { formSlug, ...metadata });
  }
}

/**
 * Check if rate limit is exceeded
 */
function isRateLimited(): boolean {
  const now = Date.now();

  // Remove old timestamps outside the window
  while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - RATE_LIMIT_WINDOW) {
    submissionTimestamps.shift();
  }

  return submissionTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW;
}

/**
 * Record a submission timestamp
 */
function recordSubmission() {
  submissionTimestamps.push(Date.now());
}

/**
 * Delay helper for retries
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useStrackerForm(config: StrackerFormConfig) {
  const {
    formSlug,
    onSuccess,
    onError,
    maxRetries = 2,
    retryDelay = 1000,
    enableAnalytics = true,
    useServerRoute = true,
  } = config;

  const [state, setState] = useState<StrackerFormState>({
    isSubmitting: false,
    error: null,
    success: false,
    retryCount: 0,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const submitToStracker = useCallback(
    async (formData: Record<string, any>): Promise<boolean> => {
      // Determine API endpoint
      let apiUrl: string;
      let apiKey: string | undefined;

      if (useServerRoute) {
        // Use server-side API route (recommended for security)
        apiUrl = "/api/stracker";
      } else {
        // Use direct client-side submission (fallback)
        apiUrl = process.env.NEXT_PUBLIC_STRACKER_API_URL || "";
        apiKey = process.env.NEXT_PUBLIC_STRACKER_API_KEY;

        if (!apiUrl || !apiKey) {
          console.error("Stracker API configuration missing");
          const error = "Configuration error. Please contact support.";
          setState({
            isSubmitting: false,
            error,
            success: false,
            retryCount: 0,
          });
          onError?.(error);
          return false;
        }
      }

      // Check rate limiting
      if (isRateLimited()) {
        const error = "Too many submissions. Please wait a moment and try again.";
        setState({
          isSubmitting: false,
          error,
          success: false,
          retryCount: 0,
        });
        onError?.(error);

        if (enableAnalytics) {
          trackFormEvent("form_rate_limited", formSlug);
        }

        return false;
      }

      // Record this submission attempt
      recordSubmission();

      // Track form submission start
      if (enableAnalytics) {
        trackFormEvent("form_submit_start", formSlug, { fields: Object.keys(formData) });
      }

      // Set submitting state
      setState({
        isSubmitting: true,
        error: null,
        success: false,
        retryCount: 0,
      });

      // Create abort controller for this request
      abortControllerRef.current = new AbortController();

      let lastError: string = "";

      // Retry loop
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          // Prepare the request body
          const requestBody = {
            form_slug: formSlug,
            fields: formData,
          };

          // Prepare headers
          const headers: HeadersInit = {
            "Content-Type": "application/json",
          };

          // Add API key only for direct client submission
          if (!useServerRoute && apiKey) {
            headers["X-API-Key"] = apiKey;
          }

          // Make the API request
          const response = await fetch(apiUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(requestBody),
            signal: abortControllerRef.current.signal,
          });

          // Check if response is OK
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Parse the response
          const data: StrackerApiResponse = await response.json();

          if (data.success) {
            // Success case
            setState({
              isSubmitting: false,
              error: null,
              success: true,
              retryCount: attempt,
            });

            // Track success
            if (enableAnalytics) {
              trackFormEvent("form_submit_success", formSlug, {
                attempt: attempt + 1,
                retried: attempt > 0,
              });
            }

            // Call success callback
            onSuccess?.(data.redirect_url);

            // Handle redirect if provided
            if (data.redirect_url) {
              window.location.href = data.redirect_url;
            }

            return true;
          } else {
            // API returned success: false
            lastError = data.error || "Form submission failed. Please try again.";

            // Don't retry for validation errors (they won't succeed on retry)
            if (data.error?.toLowerCase().includes("validation")) {
              break;
            }

            // If we have retries left, try again
            if (attempt < maxRetries) {
              setState((prev) => ({ ...prev, retryCount: attempt + 1 }));
              await delay(retryDelay * (attempt + 1)); // Exponential backoff
              continue;
            }
          }
        } catch (error) {
          // Network or parsing error
          if ((error as Error).name === "AbortError") {
            lastError = "Request cancelled.";
            break;
          }

          lastError =
            error instanceof Error
              ? error.message
              : "Network error. Please check your connection and try again.";

          // If we have retries left, try again
          if (attempt < maxRetries) {
            setState((prev) => ({ ...prev, retryCount: attempt + 1 }));
            await delay(retryDelay * (attempt + 1)); // Exponential backoff
            continue;
          }
        }
      }

      // All attempts failed
      setState({
        isSubmitting: false,
        error: lastError,
        success: false,
        retryCount: maxRetries,
      });

      // Track failure
      if (enableAnalytics) {
        trackFormEvent("form_submit_error", formSlug, {
          error: lastError,
          attempts: maxRetries + 1,
        });
      }

      onError?.(lastError);
      return false;
    },
    [formSlug, onSuccess, onError, maxRetries, retryDelay, enableAnalytics, useServerRoute]
  );

  const resetState = useCallback(() => {
    setState({
      isSubmitting: false,
      error: null,
      success: false,
      retryCount: 0,
    });
  }, []);

  const cancelSubmission = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setState({
      isSubmitting: false,
      error: "Submission cancelled.",
      success: false,
      retryCount: 0,
    });
  }, []);

  return {
    submitToStracker,
    isSubmitting: state.isSubmitting,
    error: state.error,
    success: state.success,
    retryCount: state.retryCount,
    resetState,
    cancelSubmission,
  };
}

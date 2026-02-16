import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side API route for Stracker form submission
 * This hides the API key from the client
 */

interface StrackerRequest {
  form_slug: string;
  fields: Record<string, any>;
}

interface StrackerResponse {
  success: boolean;
  error?: string;
  redirect_url?: string;
}

// Rate limiting map: IP -> timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Get client IP address
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * Check rate limit for an IP
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove old timestamps
  const recentTimestamps = timestamps.filter((t) => t > now - RATE_LIMIT_WINDOW);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  // Record this request
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  return true; // Within rate limit
}

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("reCAPTCHA secret key missing");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

/**
 * POST handler for form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body: StrackerRequest = await request.json();

    // Validate request
    if (!body.form_slug || !body.fields) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request format.",
        },
        { status: 400 }
      );
    }

    // Get API credentials from server-side env vars
    const apiUrl = process.env.STRACKER_API_URL || process.env.NEXT_PUBLIC_STRACKER_API_URL;
    const apiKey = process.env.STRACKER_API_KEY || process.env.NEXT_PUBLIC_STRACKER_API_KEY;

    if (!apiUrl || !apiKey) {
      console.error("Stracker API configuration missing on server");
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    // Forward request to Stracker API
    const strackerResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(body),
    });

    // Parse Stracker response
    const data: StrackerResponse = await strackerResponse.json();

    // Return the response
    return NextResponse.json(data, {
      status: strackerResponse.ok ? 200 : strackerResponse.status,
    });
  } catch (error) {
    console.error("Stracker API route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler - return method not allowed
 */
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: "Method not allowed.",
    },
    { status: 405 }
  );
}

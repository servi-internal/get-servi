"use client";

import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStrackerForm } from "@/lib/hooks/useStrackerForm";
import {
  validateForm,
  bookMeetingValidation,
  type ValidationErrors,
} from "@/lib/validation/formValidation";
import {
  FileText,
  Search,
  Users,
  Heart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";

const BENEFITS = [
  {
    icon: FileText,
    title: "Free Marketing Report",
    description:
      "Get a personalized breakdown of your online strengths and weaknesses.",
  },
  {
    icon: Search,
    title: "Google Visibility",
    description: "How to show up in more Google searches.",
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    description:
      "How to turn more online visitors into walk-in customers.",
  },
  {
    icon: Heart,
    title: "Create Customer Loyalty",
    description:
      "How to make it easy for customers to order directly from you.",
  },
  {
    icon: TrendingUp,
    title: "Get More Results",
    description: "How to market affordably and get big returns on investment.",
  },
];

const BEST_TIME_OPTIONS = [
  "Anytime",
  "Morning (9am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (5pm–8pm)",
];

const HEAR_ABOUT_OPTIONS = [
  "Please select",
  "Google",
  "Referral",
  "Social media",
  "Trade show / event",
  "Other",
];

const INTERESTED_IN_OPTIONS = [
  "Online Ordering",
  "Self Service",
  "Integrated POS",
  "Restaurant Marketing",
];

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    restaurantName: "",
    restaurantCity: "",
    bestTime: "Anytime",
    hearAbout: "Please select",
    interestedIn: [] as string[],
    comments: "",
  });
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // Initialize Stracker form hook
  const { submitToStracker, isSubmitting, error: strackerError, retryCount } = useStrackerForm({
    formSlug: "book-a-meeting",
    onSuccess: (redirectUrl) => {
      if (redirectUrl) {
        // Redirect if URL is provided
        window.location.href = redirectUrl;
      } else {
        // Show success message and reset form
        setSuccessMessage("Demo request received! We'll be in touch shortly to schedule your call.");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          restaurantName: "",
          restaurantCity: "",
          bestTime: "Anytime",
          hearAbout: "Please select",
          interestedIn: [],
          comments: "",
        });
        // Clear success message after 8 seconds
        setTimeout(() => setSuccessMessage(null), 8000);
      }
    },
    onError: (error) => {
      console.error("Stracker form submission error:", error);
      // Error is already set in the hook state, we just log it here
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous messages
    setSuccessMessage(null);
    setValidationErrors({});

    // Validate form data
    const errors = validateForm(formData, bookMeetingValidation);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Prepare form data for Stracker API
    const submissionData: Record<string, any> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      restaurantName: formData.restaurantName,
      restaurantCity: formData.restaurantCity,
      bestTime: formData.bestTime,
      hearAbout: formData.hearAbout,
      comments: formData.comments,
    };

    // Handle checkbox array - Stracker expects array of values for checkboxes with same name
    if (formData.interestedIn.length > 0) {
      submissionData.interestedIn = formData.interestedIn;
    }

    // Submit to Stracker
    await submitToStracker(submissionData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement & { name: string; value: string | boolean };
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleInterestedInChange = (option: string) => {
    setFormData((prev) => {
      const current = prev.interestedIn;
      const next = current.includes(option)
        ? current.filter((v) => v !== option)
        : [...current, option];
      return { ...prev, interestedIn: next };
    });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]" />

      <main className="flex-1">
        <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
              {/* Left: Benefits */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333333] mb-4">
                  See where you could be missing out on customers
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  On this 20 minute call, we&apos;ll cover:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {BENEFITS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4 sm:p-5 transition-shadow hover:shadow-sm"
                      >
                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6600]/10 text-[#FF6600]">
                          <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-[#333333] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Form card */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-lg">
                  <h2 className="text-lg sm:text-xl font-bold text-[#333333] mb-5 sm:mb-6">
                    Book Your Free Demo Today
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="text-[#333333] font-medium text-xs sm:text-sm">
                          First name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="James"
                          className={`h-10 text-xs sm:text-sm ${
                            validationErrors.firstName
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                          }`}
                          aria-invalid={!!validationErrors.firstName}
                          aria-describedby={validationErrors.firstName ? "firstName-error" : undefined}
                        />
                        {validationErrors.firstName && (
                          <p id="firstName-error" className="text-xs text-red-600 mt-1">
                            {validationErrors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="text-[#333333] font-medium text-xs sm:text-sm">
                          Last name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className={`h-10 text-xs sm:text-sm ${
                            validationErrors.lastName
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                          }`}
                          aria-invalid={!!validationErrors.lastName}
                          aria-describedby={validationErrors.lastName ? "lastName-error" : undefined}
                        />
                        {validationErrors.lastName && (
                          <p id="lastName-error" className="text-xs text-red-600 mt-1">
                            {validationErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="james@acme.com"
                        className={`h-10 text-xs sm:text-sm ${
                          validationErrors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        }`}
                        aria-invalid={!!validationErrors.email}
                        aria-describedby={validationErrors.email ? "email-error" : undefined}
                      />
                      {validationErrors.email && (
                        <p id="email-error" className="text-xs text-red-600 mt-1">
                          {validationErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="mobile" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Mobile number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+123456789"
                        className={`h-10 text-xs sm:text-sm ${
                          validationErrors.mobile
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        }`}
                        aria-invalid={!!validationErrors.mobile}
                        aria-describedby={validationErrors.mobile ? "mobile-error" : undefined}
                      />
                      {validationErrors.mobile && (
                        <p id="mobile-error" className="text-xs text-red-600 mt-1">
                          {validationErrors.mobile}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="restaurantName" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Restaurant name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="restaurantName"
                        name="restaurantName"
                        type="text"
                        required
                        value={formData.restaurantName}
                        onChange={handleChange}
                        placeholder="Acme Foods"
                        className={`h-10 text-xs sm:text-sm ${
                          validationErrors.restaurantName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        }`}
                        aria-invalid={!!validationErrors.restaurantName}
                        aria-describedby={validationErrors.restaurantName ? "restaurantName-error" : undefined}
                      />
                      {validationErrors.restaurantName && (
                        <p id="restaurantName-error" className="text-xs text-red-600 mt-1">
                          {validationErrors.restaurantName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="restaurantCity" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Restaurant city/metro area <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="restaurantCity"
                        name="restaurantCity"
                        type="text"
                        required
                        value={formData.restaurantCity}
                        onChange={handleChange}
                        placeholder="Springfield"
                        className={`h-10 text-xs sm:text-sm ${
                          validationErrors.restaurantCity
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        }`}
                        aria-invalid={!!validationErrors.restaurantCity}
                        aria-describedby={validationErrors.restaurantCity ? "restaurantCity-error" : undefined}
                      />
                      {validationErrors.restaurantCity && (
                        <p id="restaurantCity-error" className="text-xs text-red-600 mt-1">
                          {validationErrors.restaurantCity}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="bestTime" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Best time to reach you
                      </Label>
                      <Select
                        value={formData.bestTime}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, bestTime: value }))}
                      >
                        <SelectTrigger className="h-10 w-full text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]">
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          {BEST_TIME_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="hearAbout" className="text-[#333333] font-medium text-xs sm:text-sm">
                        How did you hear about Ser.vi?
                      </Label>
                      <Select
                        value={formData.hearAbout}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, hearAbout: value }))}
                      >
                        <SelectTrigger className="h-10 w-full text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]">
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                        <SelectContent>
                          {HEAR_ABOUT_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[#333333] font-medium text-xs sm:text-sm">
                        Interested in
                      </Label>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {INTERESTED_IN_OPTIONS.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-gray-700"
                          >
                            <input
                              type="checkbox"
                              name="interestedIn"
                              value={option}
                              checked={formData.interestedIn.includes(option)}
                              onChange={() => handleInterestedInChange(option)}
                              className="h-4 w-4 rounded border-gray-300 text-[#FF6600] focus:ring-[#FF6600]"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="comments" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Comments & questions
                      </Label>
                      <Textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        rows={4}
                        className="text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600] resize-y min-h-[80px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 sm:h-12 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm shadow-lg shadow-[#FF6600]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="flex flex-col items-center justify-center gap-1">
                          <span className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </span>
                          {retryCount > 0 && (
                            <span className="text-[10px] opacity-75">Retry attempt {retryCount}...</span>
                          )}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Book a Free Demo
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>

                    {/* Success Message */}
                    {successMessage && (
                      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-green-900 text-sm">Success!</p>
                          <p className="text-green-700 text-sm">{successMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {strackerError && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-red-900 text-sm">Submission Failed</p>
                          <p className="text-red-700 text-sm">{strackerError}</p>
                          <p className="text-red-600 text-xs mt-1">
                            Need help? Email us at{" "}
                            <a href="mailto:hello@ser.vi" className="underline hover:text-red-800">
                              hello@ser.vi
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </form>

                  <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our{" "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="text-[#FF6600] hover:underline cursor-pointer"
                    >
                      Privacy Policy
                    </button>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close privacy policy"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4">Privacy Policy</h2>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p><strong>Last Updated:</strong> December 24, 2025</p>
              <p>Ser.vi Worldwide LLC (&ldquo;Ser.vi,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our restaurant management platform and services.</p>
              <h3 className="font-bold text-[#333333]">Information We Collect</h3>
              <p>We collect account information (name, email, phone number, business details), payment information, restaurant data, order information, and automatically collected data such as device information, usage data, and cookies.</p>
              <h3 className="font-bold text-[#333333]">How We Use Your Information</h3>
              <p>We use information to provide and improve our services, process transactions, respond to support requests, send administrative updates, analyze usage patterns, prevent fraud, and send marketing communications with your consent.</p>
              <h3 className="font-bold text-[#333333]">Data Security</h3>
              <p>We implement encryption, regular security assessments, access controls, and employee training to protect your information.</p>
              <h3 className="font-bold text-[#333333]">Your Rights</h3>
              <p>You have the right to access, correct, delete, and port your data, as well as opt out of marketing communications.</p>
              <h3 className="font-bold text-[#333333]">Contact Us</h3>
              <p>Ser.vi Worldwide LLC<br />Email: <a href="mailto:privacy@ser.vi" className="text-[#FF6600] hover:underline">privacy@ser.vi</a><br />Address: Zephyrhills, FL, United States</p>
              <p className="pt-2">
                <a href="/privacy" className="text-[#FF6600] hover:underline font-medium text-sm">
                  Read Full Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

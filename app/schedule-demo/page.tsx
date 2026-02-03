"use client";

import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  Search,
  ShoppingCart,
  Calendar,
  Scissors,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

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
    icon: ShoppingCart,
    title: "Customer Acquisition",
    description:
      "How to turn more online visitors into walk-in customers.",
  },
  {
    icon: Calendar,
    title: "Drive More Business",
    description:
      "How to boost reservations, events, catering & more.",
  },
  {
    icon: Scissors,
    title: "Reduce Marketing Costs",
    description: "How to cut costs while improving results.",
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
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
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
        smsConsent: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
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
                    Book Your Free Demo – It only takes 1 minute
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
                          className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        />
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
                          className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        />
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
                        className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                      />
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
                        className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                      />
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
                        className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                      />
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
                        className="h-10 text-xs sm:text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="bestTime" className="text-[#333333] font-medium text-xs sm:text-sm">
                        Best time to reach you
                      </Label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-[#333333] focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 outline-none transition-colors"
                      >
                        {BEST_TIME_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="hearAbout" className="text-[#333333] font-medium text-xs sm:text-sm">
                        How did you hear about Ser.vi?
                      </Label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-[#333333] focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 outline-none transition-colors"
                      >
                        {HEAR_ABOUT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
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

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="smsConsent"
                        name="smsConsent"
                        checked={formData.smsConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF6600] focus:ring-[#FF6600]"
                      />
                      <Label htmlFor="smsConsent" className="text-xs sm:text-sm text-gray-600 leading-snug cursor-pointer">
                        I agree to receive communications by text message regarding a potential or confirmed subscription from Ser.vi.{" "}
                        <Link href="/privacy" className="text-[#FF6600] hover:underline font-medium">
                          More Info
                        </Link>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 sm:h-12 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm shadow-lg shadow-[#FF6600]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Book a Free Demo
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-900 text-sm">Demo request received!</p>
                          <p className="text-green-700 text-sm">We&apos;ll be in touch shortly to schedule your call.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Something went wrong</p>
                          <p className="text-red-700 text-sm">Please try again or email us at hello@ser.vi</p>
                        </div>
                      </div>
                    )}
                  </form>

                  <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our{" "}
                    <Link href="/privacy" className="text-[#FF6600] hover:underline">Privacy Policy</Link> and{" "}
                    <Link href="/terms" className="text-[#FF6600] hover:underline">Terms & Conditions</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

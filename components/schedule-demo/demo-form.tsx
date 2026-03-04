"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "./form-field";
import { FormStatusMessage } from "./form-status-message";
import type { ValidationErrors } from "@/lib/validation/formValidation";

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

export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  restaurantName: string;
  restaurantCity: string;
  bestTime: string;
  hearAbout: string;
  interestedIn: string[];
  comments: string;
}

interface DemoFormProps {
  formData: DemoFormData;
  validationErrors: ValidationErrors;
  isSubmitting: boolean;
  retryCount: number;
  successMessage: string | null;
  strackerError: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSelectChange: (field: keyof DemoFormData, value: string) => void;
  onInterestedInChange: (option: string) => void;
  onShowPrivacy: () => void;
}

export function DemoForm({
  formData,
  validationErrors,
  isSubmitting,
  retryCount,
  successMessage,
  strackerError,
  onSubmit,
  onChange,
  onSelectChange,
  onInterestedInChange,
  onShowPrivacy,
}: DemoFormProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-[#333333] mb-5 sm:mb-6">
        Book Your Free Demo Today
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          <FormField
            id="firstName"
            name="firstName"
            label="First name"
            required
            value={formData.firstName}
            onChange={onChange}
            placeholder="James"
            error={validationErrors.firstName}
          />
          <FormField
            id="lastName"
            name="lastName"
            label="Last name"
            required
            value={formData.lastName}
            onChange={onChange}
            placeholder="Smith"
            error={validationErrors.lastName}
          />
        </div>

        <FormField
          id="email"
          name="email"
          label="Email"
          required
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="james@acme.com"
          error={validationErrors.email}
        />

        <FormField
          id="mobile"
          name="mobile"
          label="Mobile number"
          required
          type="tel"
          value={formData.mobile}
          onChange={onChange}
          placeholder="+123456789"
          error={validationErrors.mobile}
        />

        <FormField
          id="restaurantName"
          name="restaurantName"
          label="Restaurant name"
          required
          value={formData.restaurantName}
          onChange={onChange}
          placeholder="Acme Foods"
          error={validationErrors.restaurantName}
        />

        <FormField
          id="restaurantCity"
          name="restaurantCity"
          label="Restaurant city/metro area"
          required
          value={formData.restaurantCity}
          onChange={onChange}
          placeholder="Springfield"
          error={validationErrors.restaurantCity}
        />

        <div className="space-y-1.5">
          <Label htmlFor="bestTime" className="text-[#333333] font-medium text-xs sm:text-sm">
            Best time to reach you
          </Label>
          <Select
            value={formData.bestTime}
            onValueChange={(value) => onSelectChange("bestTime", value)}
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
            onValueChange={(value) => onSelectChange("hearAbout", value)}
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
                  onChange={() => onInterestedInChange(option)}
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
            onChange={onChange}
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

        <FormStatusMessage success={successMessage} error={strackerError} />
      </form>

      <p className="mt-4 text-xs text-gray-500 leading-relaxed">
        We respect your data. By submitting this form, you agree that we will contact you in
        relation to our products and services, in accordance with our{" "}
        <button
          type="button"
          onClick={onShowPrivacy}
          className="text-[#FF6600] hover:underline cursor-pointer"
        >
          Privacy Policy
        </button>
        .
      </p>
    </div>
  );
}

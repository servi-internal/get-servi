"use client";

import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DemoBenefits } from "@/components/schedule-demo/demo-benefits";
import { DemoForm, type DemoFormData } from "@/components/schedule-demo/demo-form";
import { PrivacyModal } from "@/components/schedule-demo/privacy-modal";
import { useStrackerForm } from "@/lib/hooks/useStrackerForm";
import {
  validateForm,
  bookMeetingValidation,
  type ValidationErrors,
} from "@/lib/validation/formValidation";

const INITIAL_FORM_DATA: DemoFormData = {
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
};

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState<DemoFormData>(INITIAL_FORM_DATA);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const { submitToStracker, isSubmitting, error: strackerError, retryCount } = useStrackerForm({
    formSlug: "book-a-meeting",
    onSuccess: (redirectUrl) => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        setSuccessMessage("Demo request received! We'll be in touch shortly to schedule your call.");
        setFormData(INITIAL_FORM_DATA);
        setTimeout(() => setSuccessMessage(null), 8000);
      }
    },
    onError: (error) => {
      console.error("Stracker form submission error:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setValidationErrors({});

    const errors = validateForm(formData, bookMeetingValidation);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const submissionData: Record<string, unknown> = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone_number: formData.mobile,
      company_name: formData.restaurantName,
      address: formData.restaurantCity,
      comments: formData.comments,
      best_time: formData.bestTime,
      hear_about: formData.hearAbout,
      ...(formData.interestedIn.length > 0 && { interested_in: formData.interestedIn.join(", ") }),
    };

    await submitToStracker(submissionData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSelectChange = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInterestedInChange = (option: string) => {
    setFormData((prev) => {
      const next = prev.interestedIn.includes(option)
        ? prev.interestedIn.filter((v) => v !== option)
        : [...prev.interestedIn, option];
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
              <DemoBenefits />

              <div className="lg:sticky lg:top-24">
                <DemoForm
                  formData={formData}
                  validationErrors={validationErrors}
                  isSubmitting={isSubmitting}
                  retryCount={retryCount}
                  successMessage={successMessage}
                  strackerError={strackerError}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                  onSelectChange={handleSelectChange}
                  onInterestedInChange={handleInterestedInChange}
                  onShowPrivacy={() => setShowPrivacy(true)}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}

      <Footer />
    </div>
  );
}

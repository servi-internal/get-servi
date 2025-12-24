"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with your actual API endpoint
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", restaurant: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-us" className="relative w-full overflow-hidden bg-gradient-to-br from-[#fff5f0] via-white to-[#fff5f0] py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #ff7043 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7043]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff7043]/5 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mb-3 sm:mb-4">
            Let's Talk About Your <span className="text-[#ff7043]">Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto mb-6">
            Get in touch with our team to see how Ser.vi can transform your restaurant business.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
            <a href="mailto:hello@ser.vi" className="flex items-center gap-2 text-[#64748b] hover:text-[#ff7043] transition-colors">
              <span className="font-semibold">hello@ser.vi</span>
            </a>
            <span className="text-[#cbd5e1]">•</span>
            <a href="https://api.whatsapp.com/send?phone=16156633663" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#64748b] hover:text-[#ff7043] transition-colors">
              <span className="font-semibold">+1 (615) 663-3663</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#ff7043] to-[#ff8a65] p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-sm sm:text-base text-white/90">We typically respond within 24 hours</p>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#263238] font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-11 border border-[#cbd5e1] focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043] rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#263238] font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@restaurant.com"
                      className="h-11 border border-[#cbd5e1] focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#263238] font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-11 border border-[#cbd5e1] focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043] rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="restaurant" className="text-[#263238] font-medium">
                      Restaurant Name
                    </Label>
                    <Input
                      id="restaurant"
                      name="restaurant"
                      type="text"
                      value={formData.restaurant}
                      onChange={handleChange}
                      placeholder="Your Restaurant"
                      className="h-11 border border-[#cbd5e1] focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043] rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#263238] font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your restaurant and how we can help..."
                    rows={5}
                    className="border border-[#cbd5e1] focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043] resize-none rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#ff7043] hover:bg-[#e64a19] text-white font-semibold text-base rounded-lg shadow-lg transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-900 text-sm">Message sent successfully!</p>
                      <p className="text-emerald-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 text-sm">Something went wrong</p>
                      <p className="text-red-700 text-sm">Please try again or email us at hello@ser.vi</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm sm:text-base text-[#64748b] mb-3 sm:mb-4">Prefer to schedule a call?</p>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1FdI1lQhrxPqvmw6TinzfpcAShPOyjBFUzOMVH6euzWdzpx_bxTURwZElipfxthReLVfeylFVr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-[#e2e8f0] rounded-lg font-semibold text-sm sm:text-base text-[#263238] hover:border-[#ff7043] hover:text-[#ff7043] transition-all shadow-sm hover:shadow-md"
            >
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle, Mail, Phone } from "lucide-react";

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
    <section id="contact-us" className="relative w-full bg-gradient-to-b from-white via-[#FFF3EE]/30 to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Info */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333333] mb-3 sm:mb-4 leading-tight">
                Ready to Transform Your <span className="text-[#FF6600]">Restaurant?</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Get in touch with our team to see how Ser.vi can help you boost revenue, reduce costs, and delight your customers.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
              <a 
                href="mailto:hello@ser.vi"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-gray-200 hover:border-[#FF6600] hover:shadow-lg transition-all group"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FF6600]/10 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Email us</p>
                  <p className="text-sm sm:text-base font-bold text-[#333333] truncate">hello@ser.vi</p>
                </div>
              </a>

              <a 
                href="https://api.whatsapp.com/send?phone=16156633663"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-gray-200 hover:border-[#FF6600] hover:shadow-lg transition-all group"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FF6600]/10 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Call or WhatsApp</p>
                  <p className="text-sm sm:text-base font-bold text-[#333333]">+1 (615) 663-3663</p>
                </div>
              </a>
            </div>

            {/* Quick CTA */}
            <div className="mt-2 sm:mt-4 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#FF6600] to-[#FF8533] text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Prefer to schedule a call?</h3>
              <p className="text-xs sm:text-sm text-white/90 mb-3 sm:mb-4">Book a time that works best for you</p>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1FdI1lQhrxPqvmw6TinzfpcAShPOyjBFUzOMVH6euzWdzpx_bxTURwZElipfxthReLVfeylFVr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-white text-[#FF6600] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-all shadow-lg"
              >
                Book a Meeting
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4 sm:mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-[#333333] font-medium text-xs sm:text-sm">
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
                    className="h-10 sm:h-11 text-sm sm:text-base border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-[#333333] font-medium text-xs sm:text-sm">
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
                    className="h-10 sm:h-11 text-sm sm:text-base border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="phone" className="text-[#333333] font-medium text-xs sm:text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="h-10 sm:h-11 text-sm sm:text-base border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="restaurant" className="text-[#333333] font-medium text-xs sm:text-sm">
                    Restaurant Name
                  </Label>
                  <Input
                    id="restaurant"
                    name="restaurant"
                    type="text"
                    value={formData.restaurant}
                    onChange={handleChange}
                    placeholder="Your Restaurant"
                    className="h-10 sm:h-11 text-sm sm:text-base border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="message" className="text-[#333333] font-medium text-xs sm:text-sm">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your restaurant and how we can help..."
                  rows={4}
                  className="text-sm sm:text-base border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 sm:h-12 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
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
      </div>
    </section>
  );
}

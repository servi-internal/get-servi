"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, Calendar, MessageCircle } from "lucide-react";

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
    <section id="contact-us" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3EE]/40 via-white to-gray-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#333333] mb-4 sm:mb-6">
            Ready to <span className="text-[#FF6600]">Transform</span> Your Restaurant?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to see how Ser.vi can help you boost profits, reduce costs, and attract more customers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Options - Left Side */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#333333] mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@ser.vi"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6600] text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm font-bold text-[#333333] group-hover:text-[#FF6600] transition-colors">hello@ser.vi</p>
                  </div>
                </a>

                <a 
                  href="https://api.whatsapp.com/send?phone=16156633663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6600] text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Call or WhatsApp</p>
                    <p className="text-sm font-bold text-[#333333] group-hover:text-[#FF6600] transition-colors">+1 (615) 663-3663</p>
                  </div>
                </a>
              </div>
            </div>

            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1FdI1lQhrxPqvmw6TinzfpcAShPOyjBFUzOMVH6euzWdzpx_bxTURwZElipfxthReLVfeylFVr"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-[#FF6600] to-[#FF8533] rounded-2xl p-6 text-white hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Book a Meeting</h3>
                  <p className="text-sm text-white/90">Schedule a time that works for you</p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6600]/10 text-[#FF6600]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#333333]">Send us a message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#333333] font-medium text-sm">
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
                      className="h-11 text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#333333] font-medium text-sm">
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
                      className="h-11 text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#333333] font-medium text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-11 text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="restaurant" className="text-[#333333] font-medium text-sm">
                      Restaurant Name
                    </Label>
                    <Input
                      id="restaurant"
                      name="restaurant"
                      type="text"
                      value={formData.restaurant}
                      onChange={handleChange}
                      placeholder="Your Restaurant"
                      className="h-11 text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#333333] font-medium text-sm">
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
                    className="text-sm border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-base shadow-lg shadow-[#FF6600]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900 text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

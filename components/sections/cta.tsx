"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact-us"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF3EE]/40 via-white to-[#FAFAFA] dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      <div
        className="absolute inset-0 opacity-25 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(#FF6600 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent dark:from-[#FF6600]/8 dark:to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#FF6600]/5 to-transparent dark:from-[#FF6600]/8 dark:to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          See <span className="text-[#FF6600]">Ser.vi</span> in action
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Get a personalized walkthrough and a free marketing report. No commitment required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/schedule-demo"
            className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-[#FF6600]/30 hover:shadow-xl hover:shadow-[#FF6600]/35 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Calendar className="h-5 w-5 sm:h-5 sm:w-5" />
            Schedule a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="mailto:hello@ser.vi"
              className="inline-flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF6600] transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0" />
              hello@ser.vi
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=16156633663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF6600] transition-colors"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              +1 (615) 663-3663
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          We respect your data. By requesting a demo you agree to our{" "}
          <Link href="/privacy" className="text-[#FF6600] hover:underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

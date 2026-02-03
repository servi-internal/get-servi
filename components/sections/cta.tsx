"use client";

import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact-us"
      className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 102, 0, 0.06), transparent 60%),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 102, 0, 0.04), transparent 50%)
          `,
        }}
      />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FF6600]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF6600]">
            <Sparkles className="h-3.5 w-3.5" />
            Free 20-minute call
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[#333333] sm:text-3xl md:text-4xl">
            See <span className="text-[#FF6600]">Ser.vi</span> in action
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Get a personalized walkthrough and a free marketing report. No commitment required.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-center lg:gap-10">
          <Link
            href="/schedule-demo"
            className="group flex w-full max-w-md items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#FF6600]/30 hover:shadow-lg hover:shadow-[#FF6600]/5 sm:p-6 lg:max-w-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6600] text-white transition-transform group-hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <span className="block font-bold text-[#333333]">Request a Demo</span>
              <span className="mt-0.5 block text-xs text-gray-500">
                Fill a short form → we&apos;ll call you
              </span>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#FF6600] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
          </Link>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href="mailto:hello@ser.vi"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left transition-all hover:border-gray-300 hover:shadow-md sm:px-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#FF6600]">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500">Email</span>
                <span className="block text-sm font-semibold text-[#333333]">hello@ser.vi</span>
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=16156633663"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left transition-all hover:border-gray-300 hover:shadow-md sm:px-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#FF6600]">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500">Call / WhatsApp</span>
                <span className="block text-sm font-semibold text-[#333333]">+1 (615) 663-3663</span>
              </div>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          We respect your data. By requesting a demo you agree to our{" "}
          <Link href="/privacy" className="text-[#FF6600] hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}

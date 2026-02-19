import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function POSCallToAction() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#FF6600]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#FF6600]/5 rounded-full blur-[80px]" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
          Ready to switch to a{" "}
          <span className="text-[#FF6600]">better POS?</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
          No monthly fees. No contracts. No hidden costs. Just a powerful POS that works for your restaurant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] text-white font-bold rounded-xl hover:bg-[#E65C00] transition-colors shadow-lg shadow-[#FF6600]/20"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
          >
            View Pricing
          </Link>
        </div>

      </div>
    </section>
  );
}

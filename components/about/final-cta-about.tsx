import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "No monthly subscription",
  "1 week setup guarantee",
  "Cancel anytime",
];

export function FinalCTAAbout() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f9fafb] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1625] to-[#2d2640] p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6600]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              Ready to modernize your{" "}
              <span className="text-[#FF6600]">restaurant?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto">
              Let&apos;s chat about how Ser.vi can help you save time, reduce
              waste, and increase profits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/schedule-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#E65C00] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-[#FF6600]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl min-h-[44px]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Request a Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all hover:-translate-y-0.5 min-h-[44px]"
              >
                Contact Support
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {HIGHLIGHTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

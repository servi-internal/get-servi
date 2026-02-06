import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function MarketingCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
      <div className="absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Ready to grow your{" "}
            <span className="text-[#FF6600]">restaurant brand</span>?
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-600">
            Get a free 20-minute demo. See how Ser.vi helps you attract new
            customers and keep them coming back.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule-demo"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] px-6 py-3 sm:px-8 sm:py-4 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6600]/25 transition-all duration-200 hover:bg-[#E65C00] hover:shadow-xl hover:shadow-[#FF6600]/30 hover:-translate-y-0.5 min-h-[44px]"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              Schedule a Demo
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

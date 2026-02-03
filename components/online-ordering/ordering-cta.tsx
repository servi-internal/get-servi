import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function OrderingCTA() {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 via-[#FFF3EE]/50 to-white" />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6600]/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6600]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#333333] sm:text-3xl md:text-4xl">
            Ready to own your{" "}
            <span className="text-[#FF6600]">online ordering</span>?
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Get a free 20-minute demo. See how Ser.vi helps you keep 100% of your revenue and grow your brand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule-demo"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] px-6 py-3.5 sm:px-8 sm:py-4 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6600]/25 transition-all duration-200 hover:bg-[#E65C00] hover:shadow-xl hover:shadow-[#FF6600]/30 hover:-translate-y-0.5"
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

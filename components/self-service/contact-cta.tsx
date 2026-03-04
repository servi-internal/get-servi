import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 min-w-0">
          <div className="md:w-1/2 text-center md:text-left min-w-0 w-full">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 sm:mb-4 leading-tight break-words">
              Ready to <span className="text-[#FF6600]">Eliminate Wait Times?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              Discover how restaurants have transformed guest experiences. Schedule a demo with our team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:hello@ser.vi"
                className="inline-flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white hover:text-[#FF6600] transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                hello@ser.vi
              </a>
            </div>
          </div>
          <div className="md:w-auto">
            <Link
              href="/schedule-demo"
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#FF6600]/20 hover:-translate-y-0.5"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

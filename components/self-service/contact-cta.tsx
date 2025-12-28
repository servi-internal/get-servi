import { Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Ready to Eliminate Wait Times?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-md">
              Discover how restaurants have transformed guest experiences—schedule your meeting with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                  Sales & Support
                </span>
                <a
                  className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-[#FF6600] transition-colors flex items-center gap-2"
                  href="tel:+16156633663"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> +1 (615) 663-3663
                </a>
              </div>
              <div className="hidden sm:block w-px bg-gray-200 dark:bg-gray-700 h-12"></div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                  Support
                </span>
                <a
                  className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-[#FF6600] transition-colors flex items-center gap-2"
                  href="mailto:hello@servi.com"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> hello@servi.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full max-w-md bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <form className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                Book a Meeting
              </h3>
              <div>
                <label className="sr-only" htmlFor="email">
                  Work Email
                </label>
                <input
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-all text-xs sm:text-sm text-gray-900 dark:text-white"
                  id="email"
                  placeholder="Enter your work email"
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Restaurant Name
                </label>
                <input
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-all text-xs sm:text-sm text-gray-900 dark:text-white"
                  id="name"
                  placeholder="Restaurant Name"
                  type="text"
                />
              </div>
              <button
                className="h-11 sm:h-12 bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold rounded-lg sm:rounded-xl transition-colors shadow-lg shadow-orange-500/20 mt-1 sm:mt-2 text-sm sm:text-base"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


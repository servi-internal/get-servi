import { Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to eliminate
              <br />
              wait times?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              Join over 500 restaurants revolutionizing their service today. Get
              started for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                  Sales
                </span>
                <a
                  className="text-lg font-bold text-gray-900 dark:text-white hover:text-[#FF6600] transition-colors flex items-center gap-2"
                  href="tel:+18005550123"
                >
                  <Phone className="w-5 h-5 text-gray-400" /> +1 (800) 555-0123
                </a>
              </div>
              <div className="hidden sm:block w-px bg-gray-200 dark:bg-gray-700 h-12"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">
                  Support
                </span>
                <a
                  className="text-lg font-bold text-gray-900 dark:text-white hover:text-[#FF6600] transition-colors flex items-center gap-2"
                  href="mailto:help@servi.com"
                >
                  <Mail className="w-5 h-5 text-gray-400" /> help@servi.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <form className="flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Get a Free Demo
              </h3>
              <div>
                <label className="sr-only" htmlFor="email">
                  Work Email
                </label>
                <input
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-all text-sm text-gray-900 dark:text-white"
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
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-[#FF6600] focus:border-transparent outline-none transition-all text-sm text-gray-900 dark:text-white"
                  id="name"
                  placeholder="Restaurant Name"
                  type="text"
                />
              </div>
              <button
                className="h-12 bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-500/20 mt-2"
                type="submit"
              >
                Book Demo
              </button>
              <p className="text-xs text-center text-gray-400 mt-2">
                No credit card required. Free trial included.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


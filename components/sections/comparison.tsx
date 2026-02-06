import { X, Check, ArrowRight, Frown, Smile } from "lucide-react";

export function Comparison() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16 overflow-x-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold tracking-tight text-[#333333] mb-2 sm:mb-3 sm:text-2xl md:text-3xl">
            Delivery Apps Hijack <span className="text-[#FF6600]">Your Business</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Stop losing money to third-party platforms. Take control of your online ordering.
          </p>
        </div>

        <div className="group/card grid gap-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg md:grid-cols-2 transition-all duration-300 hover:shadow-xl hover:border-[#FF6600]/10 min-w-0">
          {/* Left: Don't Do This */}
          <div className="group relative flex flex-col justify-center bg-red-50/60 p-6 sm:p-8 md:p-10 lg:p-14 border-r-0 md:border-r border-gray-100 transition-colors duration-300 hover:bg-red-50/80 min-w-0">
            <div className="mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-red-100 text-red-500 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Frown className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Don&apos;t Do This
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform duration-200 group-hover:scale-105">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Don&apos;t let delivery apps put their links on your Google listing
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform duration-200 group-hover:scale-105">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Don&apos;t let delivery apps charge you for your own Google traffic
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform duration-200 group-hover:scale-105">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Don&apos;t let delivery apps keep your customer data from you
                </span>
              </li>
            </ul>
            {/* Floating arrow between columns - desktop only */}
            <div
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-full bg-[#FF6600] p-2.5 sm:p-3 shadow-lg shadow-[#FF6600]/20 md:flex ring-4 ring-white transition-transform duration-200 group-hover/card:scale-110 group-hover/card:shadow-xl group-hover/card:shadow-[#FF6600]/25"
              aria-hidden
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>

          {/* Right: Do This */}
          <div className="group flex flex-col justify-center bg-green-50/60 p-6 sm:p-8 md:p-10 lg:p-14 transition-all duration-300 hover:bg-green-50/80 min-w-0">
            <div className="mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Smile className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Do This Instead
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-200 group-hover:scale-105">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  Do have your Google listing promote your direct ordering
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-200 group-hover:scale-105">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  Do keep 100% of your profits from your own Google traffic
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 transition-colors duration-200 hover:text-gray-900">
                <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-200 group-hover:scale-105">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  Do create loyal customers with customer data you own
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

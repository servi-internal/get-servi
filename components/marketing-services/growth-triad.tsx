import { MousePointerClick, Globe, ThumbsUp } from "lucide-react";

export function GrowthTriad() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-[#f9fafb] border-y border-gray-200 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            The Growth Triad
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Our marketing program uses proven channels to drive new customers
            directly to your restaurant and online ordering. We use the same cost
            effective, high ROI methods that big chains use for your small business.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6600]/30 to-transparent -translate-y-1/2 z-0"></div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#FF6600]/50 transition-all hover:shadow-lg group text-center flex flex-col items-center">
              <div className="size-14 sm:size-16 bg-gray-50 rounded-full flex items-center justify-center shadow-sm mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MousePointerClick className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                Google Ads
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Capture high-intent customers exactly when they are searching for
                food near you. We automate bidding for maximum ROI.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#FF6600]/50 transition-all hover:shadow-lg group text-center flex flex-col items-center relative">
              <div className="absolute -top-3 sm:-top-4 lg:-top-10 left-1/2 -translate-x-1/2 bg-[#FF6600]/10 text-[#FF6600] px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Engine Core
              </div>
              <div className="size-16 sm:size-20 bg-[#FF6600] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                SEO Website
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Your digital storefront. Optimized for speed and conversion,
                turning visitors into paying customers without commission fees.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#FF6600]/50 transition-all hover:shadow-lg group text-center flex flex-col items-center">
              <div className="size-14 sm:size-16 bg-gray-50 rounded-full flex items-center justify-center shadow-sm mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                Social Media
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Engage and build a community with consistent, mouth-watering
                content on Instagram, Facebook and Tiktok and others, that keeps
                you top-of-mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


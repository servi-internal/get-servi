import { Check, CheckCircle } from "lucide-react";

export function MarketingAddons() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#263238] mb-4 sm:mb-6">
            Online Ordering & Marketing Plans
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#64748b] max-w-2xl mb-6 sm:mb-8">
            Accelerate your growth. These optional plans automate your customer retention
            so you can focus on the food.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Promote Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#ff7043] shadow-xl relative">
            <div className="absolute top-0 right-0 bg-[#ff7043] text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
              Most Popular
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#263238]">
              Promote
            </h3>
            <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-[#263238]">
                $249
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
              Getting direct ordering started
            </p>
            <hr className="my-5 sm:my-6 border-[#ff7043]/20" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Direct online ordering
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                SEO website
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Google Ads, IVR phone
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Delivery option
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Optional social add-on
              </li>
            </ul>
          </div>

          {/* Grow & Retain Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
            <h3 className="text-base sm:text-lg font-bold text-[#263238]">Grow &amp; Retain</h3>
            <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-[#263238]">
                $449
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
              Growing your customer base
            </p>
            <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Everything in Promote
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Engagement program
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Email marketing
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Branded mobile app
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Retargeting ads, phone
              </li>
            </ul>
          </div>

          {/* Inspire & Connect Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
            <h3 className="text-base sm:text-lg font-bold text-[#263238]">Inspire &amp; Connect</h3>
            <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-[#263238]">
                $749
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
              Fully customized, higher-touch
            </p>
            <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Everything in Grow &amp; Retain
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Social content (Pro)
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Review responses
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Custom email campaigns
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Custom SEO website
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                Optional Premium/Max social add-ons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


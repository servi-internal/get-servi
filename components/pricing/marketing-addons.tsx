export function MarketingAddons() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-10 lg:mb-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#263238] mb-3 sm:mb-4">
            Online Ordering & Marketing <span className="text-[#FF6600]">Plans</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#64748b] max-w-2xl mb-4 sm:mb-6">
            Accelerate your growth. These optional plans automate your customer retention
            so you can focus on the food.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Save & Promote Plan */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
            <h3 className="text-base sm:text-lg font-bold text-[#263238]">
              Save &amp; Promote
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
            <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Online Ordering
              </li>
              <li className="flex gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#64748b] -mt-1 pl-5 sm:pl-6">
                - Customer Pays 5% convenience fee*
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Phone Ordering Service
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                SEO website
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Google Ads
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Delivery option
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Optional social add-on
              </li>
            </ul>
          </div>

          {/* Grow & Retain Plan */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-[#ff7043] shadow-xl relative">
            <div className="absolute top-0 right-0 bg-[#ff7043] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg rounded-tr-xl sm:rounded-tr-2xl uppercase">
              Most Popular
            </div>
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
            <p className="mt-1 text-xs sm:text-sm font-bold text-[#263238]">
              Everything in Promote &amp; Save <span className="text-base sm:text-lg">+</span>
            </p>
            <hr className="my-5 sm:my-6 border-[#ff7043]/20" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Engagement program
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Email marketing
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Branded mobile app
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Retargeting ads
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Professional Photoshoot
              </li>
            </ul>
          </div>

          {/* Inspire & Connect Plan */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
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
            <p className="mt-1 text-xs sm:text-sm font-bold text-[#263238]">
              Everything in Grow &amp; Retain <span className="text-base sm:text-lg">+</span>
            </p>
            <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Social content (Pro)
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Review responses
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Custom email campaigns
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Custom SEO website
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                Optional Premium/Max social add-ons
              </li>
            </ul>
          </div>
        </div>

        {/* Convenience Fee Note + 1 Week Setup */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-14">
          <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] p-5 sm:p-6 lg:p-8">
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              *Convenience Fee goes to you and covers your credit card and ser.vi platform fees.
            </p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="size-10 sm:size-12 rounded-xl bg-[#ff7043]/10 flex items-center justify-center flex-shrink-0">
                <i className="bi bi-clock text-xl sm:text-2xl text-[#ff7043]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#263238]">
                1 week setup guarantee
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              From the time we receive all required information from you we will have your program live in 1 week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


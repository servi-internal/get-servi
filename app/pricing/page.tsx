import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { SavingsCalculator } from "@/components/pricing/savings-calculator";
import { MarketingAddons } from "@/components/pricing/marketing-addons";
import { SocialMediaTable } from "@/components/pricing/social-media-table";
import { ComparisonFAQ } from "@/components/pricing/comparison-faq";

export const metadata = {
  title: "Pricing - Zero Monthly Fees | Ser.vi Restaurant Platform",
  description: "Transparent pricing with zero monthly subscription fees. Pay only 4-5% per transaction. No setup fees, no contracts. Compare and save thousands vs traditional POS systems.",
  openGraph: {
    title: "Ser.vi Pricing - Zero Monthly Fees Restaurant Platform",
    description: "No monthly subscription. Pay only per transaction. Save thousands compared to traditional restaurant POS systems.",
    url: "https://get.ser.vi/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-[#f8fafc]">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex min-w-0 flex-1 flex-col w-full">
        <PricingHero />

        {/* Platform Pricing Cards */}
        <section className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden" id="platform-fees">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#263238] mb-2 sm:mb-3">
                Ser.vi Fees
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#64748b]">
                You pay <span className="font-bold text-[#263238]">$0</span> in software fees. <span className="font-bold text-[#263238]">Runs on the devices you already own</span>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* POS Only */}
              <div className="group relative flex flex-col p-5 sm:p-6 lg:p-8 bg-[#f8fafc] rounded-xl sm:rounded-2xl border border-[#e2e8f0] hover:border-[#ff7043]/30 hover:shadow-xl transition-all duration-300">
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <div className="size-9 sm:size-10 lg:size-12 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <i className="bi bi-shop text-lg sm:text-xl lg:text-2xl text-[#263238]"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#263238]">POS</h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    In-store POS & payments only
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-3 sm:mb-4">
                  What You Pay Monthly
                </p>
                <div className="mb-5 sm:mb-6 lg:mb-8">
                  <div className="bg-white rounded-lg sm:rounded-xl border border-[#e2e8f0] p-2.5 sm:p-3 lg:p-4 mb-2 sm:mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] sm:text-xs font-bold text-[#64748b] uppercase">
                        Customer Pays per Order
                      </span>
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-[#263238]">
                      4.0%
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] rounded-lg sm:rounded-xl border border-[#e2e8f0] p-2.5 sm:p-3 lg:p-4">
                    <div className="text-[10px] sm:text-xs font-bold text-[#64748b] uppercase mb-1.5 sm:mb-2">
                      Breakdown (inside that fee)
                    </div>
                    <div className="space-y-1 text-[10px] sm:text-xs text-[#263238]">
                      <div>1.5% Ser.vi fee</div>
                      <div>+ 2.5% <span className="underline decoration-dotted">Zift</span> (card)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* POS Bundle - Featured */}
              <div className="relative flex flex-col p-5 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl border-2 border-[#ff7043] shadow-2xl scale-100 md:scale-105 z-10">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#ff7043] text-white px-2.5 sm:px-3 lg:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md uppercase tracking-wide">
                  Most Popular
                </div>
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <div className="size-9 sm:size-10 lg:size-12 rounded-lg bg-[#fff3e0] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                    <i className="bi bi-stack text-lg sm:text-xl lg:text-2xl text-[#ff7043]"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#263238]">
                    POS Bundle
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    POS + Online Ordering + Self-Service together
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-3 sm:mb-4">
                  What You Pay Monthly
                </p>
                <div className="mb-5 sm:mb-6 lg:mb-8">
                  <div className="bg-[#ff7043]/5 rounded-lg sm:rounded-xl border border-[#ff7043]/20 p-2.5 sm:p-3 lg:p-4 mb-2 sm:mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] sm:text-xs font-bold text-[#e64a19] uppercase">
                        Customer Pays per Order
                      </span>
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-[#263238]">
                      4.0%
                    </div>
                  </div>
                  <div className="bg-[#fff3e0] rounded-lg sm:rounded-xl border border-[#ff7043]/20 p-2.5 sm:p-3 lg:p-4">
                    <div className="text-[10px] sm:text-xs font-bold text-[#e64a19] uppercase mb-1.5 sm:mb-2">
                      Breakdown (inside that fee)
                    </div>
                    <div className="space-y-1 text-[10px] sm:text-xs text-[#263238]">
                      <div>1.5% Ser.vi fee</div>
                      <div>+ 2.5% <span className="underline decoration-dotted">Zift</span> (card)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online & Self-Service */}
              <div className="group relative flex flex-col p-5 sm:p-6 lg:p-8 bg-[#f8fafc] rounded-xl sm:rounded-2xl border border-[#e2e8f0] hover:border-[#ff7043]/30 hover:shadow-xl transition-all duration-300">
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <div className="size-9 sm:size-10 lg:size-12 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <i className="bi bi-phone text-lg sm:text-xl lg:text-2xl text-[#263238]"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#263238]">Online &amp; Self-Service</h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    Online ordering + Self-Service, no POS
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-3 sm:mb-4">
                  What You Pay Monthly
                </p>
                <div className="mb-5 sm:mb-6 lg:mb-8">
                  <div className="bg-white rounded-lg sm:rounded-xl border border-[#e2e8f0] p-2.5 sm:p-3 lg:p-4 mb-2 sm:mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] sm:text-xs font-bold text-[#64748b] uppercase">
                        Customer Pays per Order
                      </span>
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-[#263238]">
                      5.0%
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] rounded-lg sm:rounded-xl border border-[#e2e8f0] p-2.5 sm:p-3 lg:p-4">
                    <div className="text-[10px] sm:text-xs font-bold text-[#64748b] uppercase mb-1.5 sm:mb-2">
                      Breakdown (inside that fee)
                    </div>
                    <div className="space-y-1 text-[10px] sm:text-xs text-[#263238]">
                      <div>2.5% Ser.vi fee</div>
                      <div>+ 2.5% <span className="underline decoration-dotted">Zift</span> (card)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware & Device Info */}
            <div className="mt-8 sm:mt-10 lg:mt-14 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] p-4 sm:p-6 lg:p-8 text-center shadow-sm">
                <p className="text-xs sm:text-sm lg:text-base text-[#64748b] leading-relaxed">
                  Use your iPads, Android tablets, phones, or PCs. No forced hardware purchases. We offer a complete line of robust wired POS hardware to suit your needs and budget. A small convenience fee is added at checkout and paid by your customer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Calculator */}
        <SavingsCalculator />

        {/* Marketing Add-ons */}
        <MarketingAddons />

        {/* Social Media Table */}
        <SocialMediaTable />

        {/* Comparison & FAQ */}
        <ComparisonFAQ />
      </main>
      <Footer />
    </div>
  );
}

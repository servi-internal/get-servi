import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
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
        {/* Online Marketing Plans */}
        <MarketingAddons />

        {/* POS Pricing */}
        <section className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden" id="pos-pricing">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#263238] mb-2 sm:mb-3">
                Integrated POS <span className="text-[#ff7043]">Pricing</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#64748b]">
                Use your existing devices or contact us for our hardware options.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* POS Only */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
                <h3 className="text-base sm:text-lg font-bold text-[#263238]">POS</h3>
                <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#263238]">$0</span>
                  <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
                  In-store POS &amp; payments only
                </p>
                <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Customer pays 5% convenience fee
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Unlimited devices
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    All order types included
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Kitchen display system
                  </li>
                </ul>
              </div>

              {/* POS Bundle */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-[#ff7043] shadow-xl relative">
                <div className="absolute top-0 right-0 bg-[#ff7043] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg rounded-tr-xl sm:rounded-tr-2xl uppercase">
                  Most Popular
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#263238]">POS Bundle</h3>
                <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#263238]">$0</span>
                  <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
                  POS + Online Ordering + Self-Service
                </p>
                <hr className="my-5 sm:my-6 border-[#ff7043]/20" />
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Customer pays 5% convenience fee
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Everything in POS
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Online ordering website
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Self-service QR ordering
                  </li>
                </ul>
              </div>

              {/* Online & Self-Service */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#e2e8f0] hover:shadow-xl transition-all">
                <h3 className="text-base sm:text-lg font-bold text-[#263238]">Online &amp; Self-Service</h3>
                <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#263238]">$0</span>
                  <span className="text-xs sm:text-sm font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b]">
                  Online ordering + Self-Service, no POS
                </p>
                <hr className="my-5 sm:my-6 border-[#e2e8f0]" />
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Customer pays 5% convenience fee
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Online ordering website
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Self-service QR ordering
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-check-circle-fill text-[#ff7043] flex-shrink-0" />
                    Delivery integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Convenience Fee Note */}
            <div className="mt-6 sm:mt-8 lg:mt-10 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] p-4 sm:p-5 text-center">
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  *Convenience Fee goes to you and covers your credit card and ser.vi platform fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Plans */}
        <SocialMediaTable />

        {/* Savings Calculator */}
        <SavingsCalculator />

        {/* Comparison & FAQ */}
        <ComparisonFAQ />
      </main>
      <Footer />
    </div>
  );
}

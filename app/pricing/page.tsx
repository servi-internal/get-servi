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
            <div className="flex justify-center max-w-6xl mx-auto">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-[#ff7043]/30 border-dashed shadow-lg max-w-md w-full">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238]">1.5%</span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#64748b]">Of order totals</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748b] mb-5 sm:mb-6">
                  Plus payment processing fees
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-circle-fill text-[#ff7043] text-[8px] mt-1.5 flex-shrink-0" />
                    No setup fee
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-circle-fill text-[#ff7043] text-[8px] mt-1.5 flex-shrink-0" />
                    Hardware financing available
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-circle-fill text-[#ff7043] text-[8px] mt-1.5 flex-shrink-0" />
                    Volume Discounts Available
                  </li>
                  <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                    <i className="bi bi-circle-fill text-[#ff7043] text-[8px] mt-1.5 flex-shrink-0" />
                    Cash discount program available
                  </li>
                </ul>
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

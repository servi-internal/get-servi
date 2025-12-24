import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { SavingsCalculator } from "@/components/pricing/savings-calculator";
import { MarketingAddons } from "@/components/pricing/marketing-addons";
import { SocialMediaTable } from "@/components/pricing/social-media-table";
import { ComparisonFAQ } from "@/components/pricing/comparison-faq";
import { Check, Info, Verified, CreditCard, Layers, Smartphone } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8fafc]">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div> {/* Spacer for fixed header */}
      <main>
        <PricingHero />

        {/* Platform Pricing Cards */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" id="platform-fees">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#263238] mb-3 sm:mb-4">
                Core Platform Access
              </h2>
              <p className="text-base sm:text-lg text-[#64748b]">
                Our business model is simple: we provide the software for free and
                charge a small convenience fee to your customers. You keep 100% of
                your menu price.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* POS Only */}
              <div className="group relative flex flex-col p-6 sm:p-8 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] hover:border-[#ff7043]/30 hover:shadow-xl transition-all duration-300">
                <div className="mb-5 sm:mb-6">
                  <div className="size-10 sm:size-12 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#263238]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#263238]">POS Only</h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    Essential tools for in-person service and table management.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-base sm:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-6 sm:mb-8">
                  Software Fees
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {[
                    "Unlimited Staff Accounts",
                    "Menu Management",
                    "Floor Plan Builder",
                    "Basic Reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#e2e8f0]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-[#64748b] uppercase">
                      Customer Pays
                    </span>
                    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-[#64748b]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#263238]">
                    Small Service Fee{" "}
                    <span className="font-normal text-[#64748b]">
                      per transaction
                    </span>
                  </div>
                </div>
              </div>

              {/* All-in-One Bundle - Featured */}
              <div className="relative flex flex-col p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#ff7043] shadow-2xl scale-100 md:scale-105 z-10">
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-[#ff7043] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md uppercase tracking-wide">
                  Most Popular
                </div>
                <div className="mb-5 sm:mb-6">
                  <div className="size-10 sm:size-12 rounded-lg bg-[#fff3e0] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7043]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#263238]">
                    All-in-One Bundle
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    Complete operating system with POS and Online Ordering.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-base sm:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-6 sm:mb-8">
                  Software Fees
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#263238]">
                    <Verified className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043] flex-shrink-0" />
                    <strong>Everything in POS &amp; Online</strong>
                  </li>
                  {[
                    "Unified Inventory Tracking",
                    "Cross-channel Reporting",
                    "KDS (Kitchen Display System)",
                    "Waitlist Management",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-3 sm:p-4 bg-[#ff7043]/5 rounded-xl border border-[#ff7043]/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-[#e64a19] uppercase">
                      Customer Pays
                    </span>
                    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff7043]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#263238]">
                    Small Fee{" "}
                    <span className="font-normal text-[#64748b]">per order</span>
                  </div>
                </div>
              </div>

              {/* Online & QR */}
              <div className="group relative flex flex-col p-6 sm:p-8 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] hover:border-[#ff7043]/30 hover:shadow-xl transition-all duration-300">
                <div className="mb-5 sm:mb-6">
                  <div className="size-10 sm:size-12 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#263238]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#263238]">Online &amp; QR</h3>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-2">
                    Capture orders from anywhere: web, mobile, or table-side.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#263238]">$0</span>
                  <span className="text-base sm:text-lg font-medium text-[#64748b]">/mo</span>
                </div>
                <p className="text-xs font-bold text-[#ff7043] uppercase tracking-wide mb-6 sm:mb-8">
                  Software Fees
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {[
                    "QR Code Ordering",
                    "Online Storefront",
                    "Direct Deposit",
                    "Digital Receipts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#263238]">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#e2e8f0]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-[#64748b] uppercase">
                      Customer Pays
                    </span>
                    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-[#64748b]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#263238]">
                    $0.99{" "}
                    <span className="font-normal text-[#64748b]">
                      per online order
                    </span>
                  </div>
                </div>
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

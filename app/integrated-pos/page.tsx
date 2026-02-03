import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { POSHero } from "@/components/integrated-pos/pos-hero";
import { AllOrderTypes } from "@/components/integrated-pos/all-order-types";
import { POSFeaturesGrid } from "@/components/integrated-pos/pos-features-grid";
import { ConnectedHub } from "@/components/integrated-pos/connected-hub";
import { TableSidePayments } from "@/components/integrated-pos/table-side-payments";
import { GiftCardSection } from "@/components/integrated-pos/gift-card-section";

export const metadata = {
  title: "Restaurant POS System - Works on Any Device | Ser.vi",
  description: "Flexible POS system that works on iPads, Android tablets, phones, and PCs. Offline mode, kitchen display, and integrated payments. No monthly fees.",
  openGraph: {
    title: "Flexible Restaurant POS System | Ser.vi",
    description: "Use your existing devices as a powerful POS system. Works offline with integrated kitchen display and payments.",
    url: "https://get.ser.vi/integrated-pos",
  },
};

export default function IntegratedPOSPage() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px] shrink-0" aria-hidden />
      <main className="flex min-w-0 flex-1 flex-col w-full overflow-x-hidden">
        <POSHero />
        
        {/* POS Features Grid */}
        <POSFeaturesGrid />

        {/* All Order Types */}
        <AllOrderTypes />

        {/* Fast table side payments */}
        <TableSidePayments />

        {/* Gift Card section */}
        <GiftCardSection />

        {/* Connected Hub */}
        <ConnectedHub />

        {/* Pricing Comparison */}
        <section className="py-10 sm:py-14 lg:py-20 bg-gray-900 dark:bg-black relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center min-w-0">
            <h2 className="text-[#FF6600] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 sm:mb-2">
              Unbeatable Value
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
              NO MONTHLY COST TO YOU
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Stop bleeding cash on subscriptions. You pay{" "}
              <span className="text-white font-bold">$0</span>. Your guests cover a
              simple 4% service fee.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col items-center">
                <p className="text-gray-400 font-medium mb-2 sm:mb-3 uppercase tracking-widest text-[10px] sm:text-xs">
                  Traditional POS
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-gray-300 mb-1">
                  $100 - $300
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500">per month, per terminal</p>
                <div className="mt-3 sm:mt-4 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[80%]" />
                </div>
              </div>
              <div className="bg-[#FF6600] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl shadow-[#FF6600]/20 md:scale-[1.02] flex flex-col items-center border border-[#E65C00]">
                <p className="text-white/80 font-bold mb-2 sm:mb-3 uppercase tracking-widest text-[10px] sm:text-xs">
                  Ser.vi POS
                </p>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">$0</div>
                <p className="text-[10px] sm:text-xs text-white/80">per month, unlimited devices</p>
                <div className="mt-3 sm:mt-4 w-full h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[5%]" />
                </div>
                <div className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 bg-white/20 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white">
                  <i className="bi bi-graph-up-arrow text-xs" /> Save ~$3,000 / year
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}


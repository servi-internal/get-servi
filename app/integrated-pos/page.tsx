import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { POSHero } from "@/components/integrated-pos/pos-hero";
import { AllOrderTypes } from "@/components/integrated-pos/all-order-types";
import { POSFeaturesGrid } from "@/components/integrated-pos/pos-features-grid";
import { HandleScenario } from "@/components/integrated-pos/handle-scenario";
import { ConnectedHub } from "@/components/integrated-pos/connected-hub";

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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div> {/* Spacer for fixed header */}
      <main className="flex flex-col w-full">
        <POSHero />
        
        {/* POS Features Grid */}
        <POSFeaturesGrid />

        {/* All Order Types */}
        <AllOrderTypes />

        {/* Connected Hub */}
        <ConnectedHub />

        {/* Handle Every Scenario */}
        <HandleScenario />

        {/* Pricing Comparison */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-[#FF6600] font-bold text-sm sm:text-base lg:text-lg tracking-wider uppercase mb-2">
              Unbeatable Value
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              NO MONTHLY COST TO YOU
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
              Stop bleeding cash on subscriptions. You pay{" "}
              <span className="text-white font-bold">$0</span>. Your guests cover a
              simple 4% service fee.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-center">
                <p className="text-gray-400 font-medium mb-3 sm:mb-4 uppercase tracking-widest text-xs sm:text-sm">
                  Traditional POS
                </p>
                <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-2">
                  $100 - $300
                </div>
                <p className="text-xs sm:text-sm text-gray-500">per month, per terminal</p>
                <div className="mt-4 sm:mt-6 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[80%]"></div>
                </div>
              </div>
              <div className="bg-[#FF6600] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#FF6600]/20 transform md:scale-105 flex flex-col items-center border border-[#E65C00]">
                <p className="text-white/80 font-bold mb-3 sm:mb-4 uppercase tracking-widest text-xs sm:text-sm">
                  Ser.vi POS
                </p>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">$0</div>
                <p className="text-xs sm:text-sm text-white/80">per month, unlimited devices</p>
                <div className="mt-4 sm:mt-6 w-full h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[5%]"></div>
                </div>
                <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-white/20 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white">
                  <i className="bi bi-graph-up-arrow text-xs sm:text-sm"></i> Save ~$3,000 / year
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


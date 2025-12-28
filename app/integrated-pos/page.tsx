import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { POSHero } from "@/components/integrated-pos/pos-hero";
import { AllOrderTypes } from "@/components/integrated-pos/all-order-types";
import { POSFeaturesGrid } from "@/components/integrated-pos/pos-features-grid";
import { HandleScenario } from "@/components/integrated-pos/handle-scenario";
import { ConnectedHub } from "@/components/integrated-pos/connected-hub";
import { 
  Tablet, TabletSmartphone, Smartphone, Monitor, 
  Check
} from "lucide-react";

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
        
        {/* Device Support */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Use Your Own Devices
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                No forced hardware. No extra purchases. Just flexibility.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {[
                { icon: Tablet, title: "iPad", desc: "All models supported" },
                { icon: TabletSmartphone, title: "Android Tablet", desc: "Any manufacturer" },
                { icon: Smartphone, title: "Smartphone", desc: "iOS & Android" },
                { icon: Monitor, title: "PC / Laptop", desc: "Via web browser" },
              ].map((device, i) => (
                <div key={i} className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-black transition-colors hover:bg-[#FF6600]/5">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-sm text-[#FF6600] group-hover:scale-110 transition-transform dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <device.icon className="w-7 h-7 sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{device.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{device.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


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

        {/* Hardware Options */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Hardware Options
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">Choose the path that fits your budget</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col rounded-2xl sm:rounded-3xl border-2 border-[#FF6600] bg-[#FF6600]/5 p-6 sm:p-8 transition-transform hover:-translate-y-1">
                <div className="mb-5 sm:mb-6 flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Bring Your Own
                  </h3>
                  <span className="rounded-full bg-[#FF6600]/20 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-[#FF6600] whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
                <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 flex-1">
                  {[
                    "Use existing iPads or Android tablets",
                    "Run on any web browser",
                    "Zero hardware investment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-900 dark:text-gray-300">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-lg sm:rounded-xl bg-[#FF6600] py-3 text-sm sm:text-base font-bold text-white transition-colors hover:bg-[#E65C00] shadow-md shadow-[#FF6600]/20">
                  Get Started for Free
                </button>
              </div>
              <div className="flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 dark:bg-black dark:border-gray-700 transition-transform hover:-translate-y-1">
                <div className="mb-5 sm:mb-6 flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Buy Our Hardware
                  </h3>
                  <span className="rounded-full bg-gray-100 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-gray-500 dark:bg-gray-800 whitespace-nowrap">
                    OPTIONAL
                  </span>
                </div>
                <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 flex-1">
                  {[
                    "Professional-grade terminals",
                    "Integrated receipt printers",
                    "Pre-configured & ready to go",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-900 dark:text-gray-300">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-lg sm:rounded-xl border-2 border-gray-200 py-3 text-sm sm:text-base font-bold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
                  View Shop
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Hub */}
        <ConnectedHub />
      </main>
      <Footer />
    </div>
  );
}


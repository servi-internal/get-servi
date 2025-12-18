import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { POSHero } from "@/components/integrated-pos/pos-hero";
import { AllOrderTypes } from "@/components/integrated-pos/all-order-types";
import { HandleScenario } from "@/components/integrated-pos/handle-scenario";
import { ConnectedHub } from "@/components/integrated-pos/connected-hub";
import { 
  Tablet, TabletSmartphone, Smartphone, Monitor, 
  LayoutGrid, DollarSign, Rocket, Cpu, CreditCard, 
  Check, Image as ImageIcon
} from "lucide-react";

export default function IntegratedPOSPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="h-[72px]"></div> {/* Spacer for fixed header */}
      <main className="flex flex-col w-full">
        <POSHero />
        
        {/* All Order Types */}
        <AllOrderTypes />
        
        {/* Device Support */}
        <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Use Your Own Devices
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                No forced hardware. No extra purchases. Just flexibility.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: Tablet, title: "iPad", desc: "All models supported" },
                { icon: TabletSmartphone, title: "Android Tablet", desc: "Any manufacturer" },
                { icon: Smartphone, title: "Smartphone", desc: "iOS & Android" },
                { icon: Monitor, title: "PC / Laptop", desc: "Via web browser" },
              ].map((device, i) => (
                <div key={i} className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-black transition-colors hover:bg-[#FF6600]/5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm text-[#FF6600] group-hover:scale-110 transition-transform dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <device.icon className="w-10 h-10" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 dark:text-white">{device.title}</h3>
                    <p className="text-sm text-gray-600">{device.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All-in-One Platform */}
        <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center md:text-left">
              <span className="text-[#FF6600] font-bold tracking-wider uppercase text-sm">
                All-in-One Solution
              </span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Everything you need,
                <br className="hidden md:block" />
                  built into one platform.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
              <div className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 p-8">
                <div className="inline-flex items-center justify-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-[#FF6600] mb-6">
                  <LayoutGrid className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Unified Order Management
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md">
                  Seamlessly handle online, offline, and third-party orders from a
                  single, intuitive command center.
                </p>
              </div>
              
              <div className="group relative md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] text-white shadow-lg p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white mb-6 border border-white/30">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-extrabold mb-2 tracking-tight">
                    Zero
                    <br />
                    Monthly
                    <br />
                    Cost
                  </h3>
                  <div className="h-1 w-20 bg-white/50 rounded-full my-6"></div>
                  <p className="text-white/90 text-lg font-medium leading-relaxed">
                    Stop paying subscription fees. Keep 100% of your profits while
                    guests cover a small convenience fee.
                  </p>
                </div>
                <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">
                      Monthly Savings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    ~$3,000<span className="text-sm font-normal text-white/70">/yr</span>
                  </div>
                </div>
              </div>

              <div className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 mb-6">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Train in Minutes
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Intuitive UI means staff are pros by their first shift. No manual
                  needed.
                </p>
              </div>

              <div className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Hardware Flex
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Mix and match iPads, Androids, and PCs seamlessly in one ecosystem.
                </p>
              </div>

              <div className="group relative md:col-span-3 overflow-hidden rounded-3xl bg-gray-900 dark:bg-black text-white shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-xl text-[#FF6600] mb-6 ring-1 ring-white/20">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Pay at Table</h3>
                  <p className="text-gray-400 text-lg max-w-xl">
                    Split checks, add tips, and close tabs right from the table.
                    Increase turn times by 15%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handle Every Scenario */}
        <HandleScenario />

        {/* Pricing Comparison */}
        <section className="py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-[#FF6600] font-bold text-lg tracking-wider uppercase mb-2">
              Unbeatable Value
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              NO MONTHLY COST TO YOU
            </h3>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Stop bleeding cash on subscriptions. You pay{" "}
              <span className="text-white font-bold">$0</span>. Your guests cover a
              simple 4% service fee.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center">
                <p className="text-gray-400 font-medium mb-4 uppercase tracking-widest text-sm">
                  Traditional POS
                </p>
                <div className="text-4xl font-bold text-gray-300 mb-2">
                  $100 - $300
                </div>
                <p className="text-sm text-gray-500">per month, per terminal</p>
                <div className="mt-6 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[80%]"></div>
                </div>
              </div>
              <div className="bg-[#FF6600] rounded-2xl p-8 shadow-2xl shadow-[#FF6600]/20 transform md:scale-105 flex flex-col items-center border border-[#E65C00]">
                <p className="text-white/80 font-bold mb-4 uppercase tracking-widest text-sm">
                  Ser.vi POS
                </p>
                <div className="text-5xl font-black text-white mb-2">$0</div>
                <p className="text-sm text-white/80">per month, unlimited devices</p>
                <div className="mt-6 w-full h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[5%]"></div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white">
                  <i className="bi bi-graph-up-arrow text-sm"></i> Save ~$3,000 / year
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Options */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hardware Options
              </h2>
              <p className="mt-4 text-gray-600">Choose the path that fits your budget</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col rounded-3xl border-2 border-[#FF6600] bg-[#FF6600]/5 p-8 transition-transform hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Bring Your Own
                  </h3>
                  <span className="rounded-full bg-[#FF6600]/20 px-3 py-1 text-xs font-bold text-[#FF6600]">
                    MOST POPULAR
                  </span>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  {[
                    "Use existing iPads or Android tablets",
                    "Run on any web browser",
                    "Zero hardware investment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
                      <Check className="w-5 h-5 text-[#FF6600]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-xl bg-[#FF6600] py-3 font-bold text-white transition-colors hover:bg-[#E65C00] shadow-md shadow-[#FF6600]/20">
                  Get Started for Free
                </button>
              </div>
              <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 dark:bg-black dark:border-gray-700 transition-transform hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Buy Our Hardware
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500 dark:bg-gray-800">
                    OPTIONAL
                  </span>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  {[
                    "Professional-grade terminals",
                    "Integrated receipt printers",
                    "Pre-configured & ready to go",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
                      <Check className="w-5 h-5 text-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-xl border-2 border-gray-200 py-3 font-bold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
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


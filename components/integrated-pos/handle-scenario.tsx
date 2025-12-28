import { Store, UtensilsCrossed, Wine, Smartphone } from "lucide-react";

export function HandleScenario() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3 sm:mb-4">
            Handle Every{" "}
            <span className="text-[#FF6600] relative inline-block">
              Scenario
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 dark:text-orange-900"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
              </svg>
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Seamlessly switch between service modes without changing devices or
            logging out. One interface for your entire operation.
          </p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 items-center">
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 600"
          >
            <path
              className="opacity-20"
              d="M 300 150 C 380 150, 440 300, 500 300"
              fill="none"
              stroke="#FF6600"
              strokeDasharray="6 6"
              strokeWidth="2"
            ></path>
            <path
              className="opacity-20"
              d="M 300 450 C 380 450, 440 300, 500 300"
              fill="none"
              stroke="#FF6600"
              strokeDasharray="6 6"
              strokeWidth="2"
            ></path>
            <path
              className="opacity-20"
              d="M 700 150 C 620 150, 560 300, 500 300"
              fill="none"
              stroke="#FF6600"
              strokeDasharray="6 6"
              strokeWidth="2"
            ></path>
            <path
              className="opacity-20"
              d="M 700 450 C 620 450, 560 300, 500 300"
              fill="none"
              stroke="#FF6600"
              strokeDasharray="6 6"
              strokeWidth="2"
            ></path>
          </svg>
          <div className="space-y-10 sm:space-y-12 lg:space-y-24 relative z-10 order-2 lg:order-1">
            <div className="group flex flex-row lg:flex-row-reverse items-center gap-4 sm:gap-6 text-left lg:text-right">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none flex items-center justify-center text-[#FF6600] border border-gray-100 dark:border-gray-700 group-hover:border-[#FF6600]/50 group-hover:scale-110 transition-all duration-300 z-10 relative">
                  <Store className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-0 bg-[#FF6600]/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#FF6600] transition-colors">
                  Counter Service
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Optimized for speed. Minimal taps to get orders in and
                  payments processed during the rush.
                </p>
              </div>
            </div>
            <div className="group flex flex-row lg:flex-row-reverse items-center gap-4 sm:gap-6 text-left lg:text-right">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none flex items-center justify-center text-[#FF6600] border border-gray-100 dark:border-gray-700 group-hover:border-[#FF6600]/50 group-hover:scale-110 transition-all duration-300 z-10 relative">
                  <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-0 bg-[#FF6600]/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#FF6600] transition-colors">
                  Tableside Dining
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Full floor plan management. Split seats, course firing, and
                  tableside payments with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative z-10 order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative w-[240px] h-[420px] sm:w-[280px] sm:h-[500px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-2.5 sm:p-3 shadow-2xl shadow-[#FF6600]/20 border-[3px] sm:border-4 border-gray-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col relative">
                <div className="h-24 bg-[#FF6600] p-4 pt-10 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-center">
                    <i className="bi bi-list text-xl"></i>
                    <span className="font-bold">Table 4</span>
                    <i className="bi bi-three-dots-vertical text-xl"></i>
                  </div>
                  <div className="flex gap-2 text-xs font-medium mt-1">
                    <span className="bg-white/20 px-2 py-0.5 rounded">
                      Dine In
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded">
                      Guest 2
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-3 space-y-2 overflow-hidden">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800 dark:text-white">
                          Wagyu Burger
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Med-Rare, No Onion
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      $18
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800 dark:text-white">
                          Truffle Fries
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Extra Aioli
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      $12
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center opacity-70">
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800 dark:text-white">
                          Coke Zero
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      $3
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center opacity-50">
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800 dark:text-white">
                          Espresso
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      $4
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-500">Total</span>
                    <span className="font-bold text-gray-800 dark:text-white">
                      $37.00
                    </span>
                  </div>
                  <button className="w-full py-3 bg-[#FF6600] text-white font-bold rounded-xl shadow-lg shadow-[#FF6600]/30 text-sm">
                    Charge
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2.5rem] pointer-events-none z-30"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF6600]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
          <div className="space-y-10 sm:space-y-12 lg:space-y-24 relative z-10 order-3">
            <div className="group flex items-center gap-4 sm:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none flex items-center justify-center text-[#FF6600] border border-gray-100 dark:border-gray-700 group-hover:border-[#FF6600]/50 group-hover:scale-110 transition-all duration-300 z-10 relative">
                  <Wine className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-0 bg-[#FF6600]/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#FF6600] transition-colors">
                  Bar Tabs
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Pre-authorize cards with a swipe. Merge tabs, transfer to
                  tables, and handle happy hour pricing.
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 sm:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none flex items-center justify-center text-[#FF6600] border border-gray-100 dark:border-gray-700 group-hover:border-[#FF6600]/50 group-hover:scale-110 transition-all duration-300 z-10 relative">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="absolute inset-0 bg-[#FF6600]/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#FF6600] transition-colors">
                  Online &amp; Takeout
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Orders from your website or phone inject directly into the
                  queue. No manual re-entry errors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


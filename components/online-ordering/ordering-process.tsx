import { Check } from "lucide-react";

export function OrderingProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-zinc-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
            Seamless Ordering Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-500">
            From hunger to happiness in 4 simple steps
          </p>
        </div>
        <div className="relative">
          {/* Dashed line that only spans from first to last card */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] w-[75%] h-0.5 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative z-10">
            {/* Step 1 - Browse Menu */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 mb-2"></div>
                  <div className="p-3 space-y-3 overflow-hidden h-full">
                    {/* Menu items that scroll on hover (desktop) or loop (mobile) */}
                    <div className="space-y-2 transition-transform duration-1000 ease-linear group-hover:lg:-translate-y-20 lg:group-hover:-translate-y-20 animate-menu-scroll-mobile lg:animate-none">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-600 rounded flex-shrink-0"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                          <div className="h-1.5 w-1/2 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 size-8 sm:size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Browse Menu
              </h3>
            </div>

            {/* Step 2 - Customize */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 mb-2"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                    
                    {/* Add-ons section */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[8px] font-bold text-zinc-400">Add-ons</div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-1-mobile lg:animate-none transition-colors duration-300">
                        <div className="h-1.5 w-16 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-1-mobile lg:animate-none transition-all duration-300"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-2-mobile lg:animate-none transition-colors duration-500">
                        <div className="h-1.5 w-20 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-2-mobile lg:animate-none transition-all duration-500"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-3-mobile lg:animate-none transition-colors duration-700">
                        <div className="h-1.5 w-14 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-3-mobile lg:animate-none transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 size-8 sm:size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Customize
              </h3>
            </div>

            {/* Step 3 - Checkout */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-2/3 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                    
                    {/* Order summary */}
                    <div className="space-y-2 py-2">
                      <div className="flex justify-between items-center">
                        <div className="h-2 w-20 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        <div className="h-2 w-10 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-2 w-16 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        <div className="h-2 w-8 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                      </div>
                      <div className="border-t border-zinc-300 dark:border-zinc-600 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <div className="h-2.5 w-12 bg-zinc-400 dark:bg-zinc-500 rounded"></div>
                          <div className="h-2.5 w-12 bg-zinc-400 dark:bg-zinc-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto p-4 bg-white dark:bg-black/20">
                    <button className="h-12 w-full bg-[#FF6600] rounded-lg flex items-center justify-center text-white text-xs font-bold group-hover:lg:animate-payment-processing lg:group-hover:animate-payment-processing transition-all">
                      <span className="group-hover:lg:hidden lg:group-hover:hidden animate-payment-text-mobile lg:animate-none">Pay $24.00</span>
                      <span className="hidden group-hover:lg:block lg:group-hover:block animate-payment-spinner-mobile lg:animate-none">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 size-8 sm:size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Checkout
              </h3>
            </div>

            {/* Step 4 - Confirmation */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col items-center justify-center overflow-hidden">
                  {/* Success checkmark with animation */}
                  <div className="relative">
                    <div className="size-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3 group-hover:lg:scale-110 lg:group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none">
                        <circle 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className="opacity-25"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12.5l2.5 2.5L16 9"
                          strokeDasharray="20"
                          strokeDashoffset="20"
                          className="transition-all duration-700 ease-out group-hover:lg:stroke-dashoffset-0 lg:group-hover:stroke-dashoffset-0 animate-checkmark-mobile lg:animate-none"
                          style={{
                            strokeDashoffset: '20',
                          }}
                        />
                      </svg>
                    </div>
                    {/* Confetti effect */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF6600] rounded-full opacity-0 group-hover:lg:animate-confetti-1 lg:group-hover:animate-confetti-1 animate-confetti-1-mobile lg:animate-confetti-1-mobile-off"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:lg:animate-confetti-2 lg:group-hover:animate-confetti-2 animate-confetti-2-mobile lg:animate-confetti-2-mobile-off"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:lg:animate-confetti-3 lg:group-hover:animate-confetti-3 animate-confetti-3-mobile lg:animate-confetti-3-mobile-off"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:lg:animate-confetti-4 lg:group-hover:animate-confetti-4 animate-confetti-4-mobile lg:animate-confetti-4-mobile-off"></div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    Order Confirmed!
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    #ORD-2847
                  </div>
                  
                  {/* Order details */}
                  <div className="mt-6 w-full px-4 space-y-2">
                    <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-600 rounded mx-auto"></div>
                    <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-600 rounded mx-auto"></div>
                  </div>
                </div>
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 size-8 sm:size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Confirmation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


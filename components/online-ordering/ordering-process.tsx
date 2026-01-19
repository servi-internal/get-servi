import { Check } from "lucide-react";

export function OrderingProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-zinc-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
            Get Rid of Seamless Ordering Experience
          </h2>
        </div>
        <div className="relative">
          {/* Dashed line that only spans from first to last card */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] w-[75%] h-0.5 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative z-10">
            {/* Step 1 - Browse Menu */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg group-hover:lg:shadow-2xl lg:group-hover:shadow-2xl group-hover:lg:shadow-[#FF6600]/10 lg:group-hover:shadow-[#FF6600]/10 flex flex-col overflow-hidden transition-all duration-500">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 mb-2 group-hover:lg:from-orange-300 group-hover:lg:to-orange-400 lg:group-hover:from-orange-300 lg:group-hover:to-orange-400 transition-all duration-500"></div>
                  <div className="p-3 space-y-3 overflow-hidden h-full">
                    {/* Menu items that scroll on hover (desktop) or loop (mobile) */}
                    <div className="space-y-2 transition-transform duration-1000 ease-out group-hover:lg:-translate-y-20 lg:group-hover:-translate-y-20 animate-menu-scroll-mobile lg:animate-none">
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
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg group-hover:lg:shadow-2xl lg:group-hover:shadow-2xl group-hover:lg:shadow-[#FF6600]/10 lg:group-hover:shadow-[#FF6600]/10 flex flex-col overflow-hidden transition-all duration-500">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 mb-2 group-hover:lg:from-orange-300 group-hover:lg:to-orange-400 lg:group-hover:from-orange-300 lg:group-hover:to-orange-400 transition-all duration-500"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                    
                    {/* Add-ons section */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[8px] font-bold text-zinc-400">Add-ons</div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-1-mobile lg:animate-none transition-all duration-300 group-hover:lg:scale-[1.02] lg:group-hover:scale-[1.02]">
                        <div className="h-1.5 w-16 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-1-mobile lg:animate-none transition-all duration-300 relative">
                          <Check className="absolute inset-0 w-full h-full text-white opacity-0 group-hover:lg:opacity-100 lg:group-hover:opacity-100 animate-checkmark-icon-1-mobile lg:animate-none scale-75" strokeWidth={3} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-2-mobile lg:animate-none transition-all duration-500 group-hover:lg:scale-[1.02] lg:group-hover:scale-[1.02]">
                        <div className="h-1.5 w-20 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-2-mobile lg:animate-none transition-all duration-500 relative">
                          <Check className="absolute inset-0 w-full h-full text-white opacity-0 group-hover:lg:opacity-100 lg:group-hover:opacity-100 animate-checkmark-icon-2-mobile lg:animate-none" strokeWidth={3} style={{ transform: 'scale(0.75)' }} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-zinc-700 rounded group-hover:lg:bg-[#FF6600]/10 lg:group-hover:bg-[#FF6600]/10 animate-addon-check-3-mobile lg:animate-none transition-all duration-700 group-hover:lg:scale-[1.02] lg:group-hover:scale-[1.02]">
                        <div className="h-1.5 w-14 bg-zinc-300 dark:bg-zinc-500 rounded"></div>
                        <div className="size-3 rounded-sm border-2 border-zinc-300 dark:border-zinc-500 group-hover:lg:bg-[#FF6600] group-hover:lg:border-[#FF6600] lg:group-hover:bg-[#FF6600] lg:group-hover:border-[#FF6600] animate-checkbox-3-mobile lg:animate-none transition-all duration-700 relative">
                          <Check className="absolute inset-0 w-full h-full text-white opacity-0 group-hover:lg:opacity-100 lg:group-hover:opacity-100 animate-checkmark-icon-3-mobile lg:animate-none" strokeWidth={3} style={{ transform: 'scale(0.75)' }} />
                        </div>
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
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg group-hover:lg:shadow-2xl lg:group-hover:shadow-2xl group-hover:lg:shadow-[#FF6600]/10 lg:group-hover:shadow-[#FF6600]/10 flex flex-col overflow-hidden transition-all duration-500">
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-2/3 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                    
                    {/* Order summary */}
                    <div className="space-y-2 py-2">
                      <div className="flex justify-between items-center group-hover:lg:bg-[#FF6600]/5 lg:group-hover:bg-[#FF6600]/5 animate-checkout-item-1-mobile lg:animate-none rounded px-1 py-0.5 transition-all duration-300">
                        <div className="h-2 w-20 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        <div className="h-2 w-10 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                      </div>
                      <div className="flex justify-between items-center group-hover:lg:bg-[#FF6600]/5 lg:group-hover:bg-[#FF6600]/5 animate-checkout-item-2-mobile lg:animate-none rounded px-1 py-0.5 transition-all duration-500">
                        <div className="h-2 w-16 bg-zinc-200 dark:bg-zinc-500 rounded"></div>
                        <div className="h-2 w-8 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                      </div>
                      <div className="border-t border-zinc-300 dark:border-zinc-600 pt-2 mt-2 group-hover:lg:border-[#FF6600]/30 lg:group-hover:border-[#FF6600]/30 transition-colors duration-500">
                        <div className="flex justify-between items-center group-hover:lg:scale-105 lg:group-hover:scale-105 animate-checkout-total-mobile lg:animate-none transition-transform duration-500">
                          <div className="h-2.5 w-12 bg-zinc-400 dark:bg-zinc-500 rounded"></div>
                          <div className="h-2.5 w-12 bg-zinc-400 dark:bg-zinc-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment card mockup */}
                    <div className="mt-4 p-2.5 border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg group-hover:lg:border-[#FF6600] lg:group-hover:border-[#FF6600] group-hover:lg:bg-[#FF6600]/5 lg:group-hover:bg-[#FF6600]/5 animate-payment-card-mobile lg:animate-none transition-all duration-500">
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                        <div className="h-1.5 w-3/4 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto p-4 bg-white dark:bg-black/20">
                    <button className="h-12 w-full bg-[#FF6600] rounded-lg flex items-center justify-center text-white text-xs font-bold group-hover:lg:animate-payment-processing lg:group-hover:animate-payment-processing transition-all group-hover:lg:bg-[#e64a19] lg:group-hover:bg-[#e64a19] group-hover:lg:shadow-lg lg:group-hover:shadow-lg group-hover:lg:shadow-[#FF6600]/50 lg:group-hover:shadow-[#FF6600]/50 animate-payment-button-mobile lg:animate-none">
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
                <div className="w-40 sm:w-44 md:w-48 h-64 sm:h-72 md:h-80 bg-zinc-100 dark:bg-zinc-800 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-zinc-200 dark:border-zinc-700 shadow-lg group-hover:lg:shadow-2xl lg:group-hover:shadow-2xl group-hover:lg:shadow-emerald-500/20 lg:group-hover:shadow-emerald-500/20 flex flex-col items-center justify-center overflow-hidden transition-all duration-500">
                  {/* Success checkmark with animation */}
                  <div className="relative">
                    <div className="size-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3 group-hover:lg:scale-110 lg:group-hover:scale-110 group-hover:lg:bg-emerald-200 lg:group-hover:bg-emerald-200 dark:group-hover:lg:bg-emerald-900/50 dark:lg:group-hover:bg-emerald-900/50 transition-all duration-500 animate-checkmark-bg-mobile lg:animate-none">
                      <div className="relative w-12 h-12">
                        <Check className="w-12 h-12 text-emerald-500 animate-checkmark-appear-mobile lg:opacity-0 lg:scale-0 group-hover:lg:opacity-100 group-hover:lg:scale-100 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:transition-all lg:duration-500 lg:ease-out" strokeWidth={3} />
                      </div>
                    </div>
                    {/* Confetti effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#FF6600] rounded-full opacity-0 group-hover:lg:animate-confetti-1 lg:group-hover:animate-confetti-1 animate-confetti-1-mobile lg:animate-confetti-1-mobile-off shadow-lg"></div>
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full opacity-0 group-hover:lg:animate-confetti-2 lg:group-hover:animate-confetti-2 animate-confetti-2-mobile lg:animate-confetti-2-mobile-off shadow-lg"></div>
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 group-hover:lg:animate-confetti-3 lg:group-hover:animate-confetti-3 animate-confetti-3-mobile lg:animate-confetti-3-mobile-off shadow-lg"></div>
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 rounded-full opacity-0 group-hover:lg:animate-confetti-4 lg:group-hover:animate-confetti-4 animate-confetti-4-mobile lg:animate-confetti-4-mobile-off shadow-lg"></div>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:lg:animate-confetti-1 lg:group-hover:animate-confetti-1 animate-confetti-1-mobile lg:animate-confetti-1-mobile-off shadow-lg" style={{ animationDelay: '0.1s' }}></div>
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:lg:animate-confetti-2 lg:group-hover:animate-confetti-2 animate-confetti-2-mobile lg:animate-confetti-2-mobile-off shadow-lg" style={{ animationDelay: '0.15s' }}></div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1 group-hover:lg:scale-105 lg:group-hover:scale-105 transition-transform duration-300">
                    Order Confirmed!
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:lg:text-emerald-600 lg:group-hover:text-emerald-600 dark:group-hover:lg:text-emerald-400 dark:lg:group-hover:text-emerald-400 transition-colors duration-300">
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


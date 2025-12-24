import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA] dark:bg-zinc-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-xl border border-[#FF6600]/20 overflow-hidden">
          <div className="bg-[#FF6600]/10 p-2.5 sm:p-3 text-center border-b border-[#FF6600]/10">
            <span className="text-[#E65C00] dark:text-[#FF6600] font-bold tracking-widest text-[10px] sm:text-xs uppercase">
              Transparent Pricing Model
            </span>
          </div>
          <div className="p-5 sm:p-6 md:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Restaurants Pay
            </h2>
            <div className="text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] leading-none font-black text-[#FF6600] my-2 sm:my-3 tracking-tighter">
              $0
            </div>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 sm:mb-8">
              We charge a small convenience fee to the customer.
            </p>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 items-stretch">
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 sm:p-4 text-left">
                <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-zinc-900 dark:text-white">
                  Standard Plan
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    Customer pays 5% fee
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    Includes all features
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    Weekly payouts
                  </li>
                </ul>
              </div>
              <div className="border-2 border-[#FF6600] rounded-lg p-3 sm:p-4 text-left relative bg-[#FF6600]/5">
                <div className="absolute -top-2 sm:-top-2.5 right-2 sm:right-3 bg-[#FF6600] text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-zinc-900 dark:text-white">
                  POS Bundle
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    <span className="font-bold">Customer pays only 4%</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    POS Integration included
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600] flex-shrink-0" />
                    Daily payouts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


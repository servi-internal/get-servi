import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-16 bg-[#FAFAFA] dark:bg-zinc-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-[#FF6600]/20 overflow-hidden">
          <div className="bg-[#FF6600]/10 p-3 text-center border-b border-[#FF6600]/10">
            <span className="text-[#E65C00] dark:text-[#FF6600] font-bold tracking-widest text-xs uppercase">
              Transparent Pricing Model
            </span>
          </div>
          <div className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Restaurants Pay
            </h2>
            <div className="text-[5rem] leading-none font-black text-[#FF6600] my-3 tracking-tighter">
              $0
            </div>
            <p className="text-lg text-zinc-500 mb-8">
              We charge a small convenience fee to the customer.
            </p>
            <div className="grid md:grid-cols-2 gap-4 items-stretch">
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 text-left">
                <h3 className="font-bold text-base mb-3 text-zinc-900 dark:text-white">
                  Standard Plan
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                    Customer pays 5% fee
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                    Includes all features
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                    Weekly payouts
                  </li>
                </ul>
              </div>
              <div className="border-2 border-[#FF6600] rounded-lg p-4 text-left relative bg-[#FF6600]/5">
                <div className="absolute -top-2.5 right-3 bg-[#FF6600] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-bold text-base mb-3 text-zinc-900 dark:text-white">
                  POS Bundle
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                    <span className="font-bold">Customer pays only 4%</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                    POS Integration included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-[#FF6600]" />
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


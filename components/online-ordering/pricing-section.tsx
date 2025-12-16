import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-[#FF6600]/20 overflow-hidden">
          <div className="bg-[#FF6600]/10 p-4 text-center border-b border-[#FF6600]/10">
            <span className="text-[#E65C00] dark:text-[#FF6600] font-bold tracking-widest text-sm uppercase">
              Transparent Pricing Model
            </span>
          </div>
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              Restaurants Pay
            </h2>
            <div className="text-[8rem] leading-none font-black text-[#FF6600] my-4 tracking-tighter">
              $0
            </div>
            <p className="text-xl text-zinc-500 mb-10">
              We charge a small convenience fee to the customer.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 text-left">
                <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-white">
                  Standard Plan
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    Customer pays 5% fee
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    Includes all features
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    Weekly payouts
                  </li>
                </ul>
              </div>
              <div className="border-2 border-[#FF6600] rounded-xl p-6 text-left relative bg-[#FF6600]/5">
                <div className="absolute -top-3 right-4 bg-[#FF6600] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-white">
                  POS Bundle
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    <span className="font-bold">Customer pays only 4%</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    POS Integration included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-[#FF6600]" />
                    Daily payouts
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-bold py-4 px-10 rounded-xl text-lg transition-colors w-full sm:w-auto">
                Calculate Your Savings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Check } from "lucide-react";

export function OrderingProcess() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Seamless Ordering Experience
          </h2>
          <p className="text-zinc-500">
            From hunger to happiness in 4 simple steps
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="w-48 h-80 bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden transition-transform group-hover:-translate-y-2">
                  <div className="w-full h-32 bg-zinc-300 dark:bg-zinc-600 mb-2"></div>
                  <div className="p-2 space-y-2">
                    <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                    <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Browse Menu
              </h3>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="w-48 h-80 bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden transition-transform group-hover:-translate-y-2 delay-75">
                  <div className="p-4 mt-8 space-y-3">
                    <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-[#FF6600]/20 rounded"></div>
                      <div className="h-8 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Customize
              </h3>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="w-48 h-80 bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col overflow-hidden transition-transform group-hover:-translate-y-2 delay-100">
                  <div className="mt-auto p-4 bg-white dark:bg-black/20">
                    <div className="h-10 w-full bg-[#FF6600] rounded flex items-center justify-center text-white text-xs font-bold">
                      Pay $24.00
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Checkout
              </h3>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="w-48 h-80 bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] border-4 border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col items-center justify-center overflow-hidden transition-transform group-hover:-translate-y-2 delay-150">
                  <div className="size-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold text-zinc-500">
                    Confirmed
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 size-10 rounded-full bg-[#FF6600] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Confirmation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


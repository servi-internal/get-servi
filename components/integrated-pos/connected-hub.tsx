import { Smartphone, QrCode, CreditCard, ShoppingBag, Package, Gift } from "lucide-react";

export function ConnectedHub() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            The <span className="text-[#FF6600]">Connected</span> Hub
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Ser.vi sits at the center of your operation
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative flex justify-center items-center h-[360px] sm:h-[400px] lg:h-[440px]">
            <div className="relative z-20 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white dark:bg-gray-800 shadow-xl flex flex-col items-center justify-center border-2 sm:border-4 border-[#FF6600] p-3 sm:p-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#FF6600] text-white mb-1 sm:mb-2 flex-shrink-0">
                <i className="bi bi-credit-card-2-front text-lg sm:text-xl" />
              </div>
              <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                Ser.vi POS
              </span>
            </div>
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 800 500"
            >
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="400" y1="250" y2="80"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="650" y1="250" y2="150"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="650" y1="250" y2="350"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="150" y1="250" y2="350"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="150" y1="250" y2="150"></line>
              <line stroke="#FF6600" strokeDasharray="5,5" strokeWidth="2" x1="400" x2="400" y1="250" y2="420"></line>
            </svg>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-48 sm:w-52">
              <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600 flex-shrink-0">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Mobile Payments</span>
            </div>
            <div className="absolute top-20 right-[18%] z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-48 sm:w-52">
              <div className="bg-gray-100 p-1.5 rounded-lg text-gray-600 flex-shrink-0">
                <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Self-Service QR</span>
            </div>
            <div className="absolute bottom-20 right-[18%] z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-48 sm:w-52">
              <div className="bg-green-100 p-1.5 rounded-lg text-green-600 flex-shrink-0">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Payment Processing</span>
            </div>
            <div className="absolute bottom-20 left-[18%] z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-40 sm:w-44">
              <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600 flex-shrink-0">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Online Ordering</span>
            </div>
            <div className="absolute top-20 left-[18%] z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-40 sm:w-44">
              <div className="bg-red-100 p-1.5 rounded-lg text-red-600 flex-shrink-0">
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Inventory Sync</span>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 w-40 sm:w-44">
              <div className="bg-green-100 p-1.5 rounded-lg text-green-600 flex-shrink-0">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">Gift Cards</span>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white dark:bg-gray-800 shadow-xl flex flex-col items-center justify-center border-2 sm:border-4 border-[#FF6600] p-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#FF6600] text-white mb-1 flex-shrink-0">
                <i className="bi bi-credit-card-2-front text-lg sm:text-xl" />
              </div>
              <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Ser.vi POS</span>
            </div>
            <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600 flex-shrink-0">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Mobile Payments</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-gray-100 p-1.5 rounded-lg text-gray-600 flex-shrink-0">
                  <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Self-Service QR</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-lg text-green-600 flex-shrink-0">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Payment Processing</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600 flex-shrink-0">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Online Ordering</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-red-100 p-1.5 rounded-lg text-red-600 flex-shrink-0">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Inventory Sync</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-lg text-green-600 flex-shrink-0">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Gift Cards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


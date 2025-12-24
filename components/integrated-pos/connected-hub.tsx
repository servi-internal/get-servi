import { ChefHat, QrCode, CreditCard, ShoppingBag, Package } from "lucide-react";

export function ConnectedHub() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            The Connected Hub
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Ser.vi sits at the center of your operation
          </p>
        </div>

        {/* Desktop Layout - Circular with SVG lines */}
        <div className="hidden md:block">
          <div className="relative flex justify-center items-center h-[500px]">
            <div className="relative z-20 w-48 h-48 rounded-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col items-center justify-center border-4 border-[#FF6600] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6600] text-white mb-2">
                <i className="bi bi-credit-card-2-front text-2xl"></i>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
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
            </svg>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3 w-48">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600 flex-shrink-0">
                <ChefHat className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">Kitchen Display</span>
            </div>
            <div className="absolute top-24 right-[20%] z-20 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3 w-48">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-600 flex-shrink-0">
                <QrCode className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">Self-Service QR</span>
            </div>
            <div className="absolute bottom-24 right-[20%] z-20 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3 w-52">
              <div className="bg-green-100 p-2 rounded-lg text-green-600 flex-shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">Payment Processing</span>
            </div>
            <div className="absolute bottom-24 left-[20%] z-20 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3 w-48">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">Online Ordering</span>
            </div>
            <div className="absolute top-24 left-[20%] z-20 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3 w-48">
              <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">Inventory Sync</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Grid */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            {/* Center POS */}
            <div className="w-40 h-40 rounded-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col items-center justify-center border-4 border-[#FF6600] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6600] text-white mb-2">
                <i className="bi bi-credit-card-2-front text-2xl"></i>
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">Ser.vi POS</span>
            </div>

            {/* Integration Cards */}
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 flex-shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-900 dark:text-white">Kitchen Display</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg text-gray-600 flex-shrink-0">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-900 dark:text-white">Self-Service QR</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600 flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-900 dark:text-white">Payment Processing</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-900 dark:text-white">Online Ordering</span>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-900 dark:text-white">Inventory Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


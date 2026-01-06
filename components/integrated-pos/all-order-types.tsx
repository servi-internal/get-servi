import { 
  LayoutGrid, 
  Users, 
  ArrowLeftRight, 
  Gift, 
  Ban, 
  CreditCard, 
  Eye, 
  Printer,
  Zap
} from "lucide-react";

export function AllOrderTypes() {
  return (
    <section id="all-order-types" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-3 sm:mb-4">
            All Order Types In One Place
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            One fast, clean interface your team can learn in minutes. Handle counter service, tableside dining, bar tabs, and phone orders seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Service Types */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Counter", icon: LayoutGrid },
              { label: "Tableside", icon: Users },
              { label: "Bar Tabs", icon: "bi-cup-straw" },
              { label: "Phone Orders", icon: "bi-telephone" },
            ].map((type, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/50 transition-colors"
              >
                {typeof type.icon === "string" ? (
                  <i className={`${type.icon} text-xl sm:text-2xl text-[#FF6600]`}></i>
                ) : (
                  <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                )}
                <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Open Tabs
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Start, manage, and close multiple tabs simultaneously with ease
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Switch Stations
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Move between devices and stations without logging out
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Comp Items
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Apply discounts and comps with manager approval
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Ban className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Void Items
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Remove incorrect orders before they reach the kitchen
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Take Payments
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Accept cash, cards, and digital wallets instantly
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  View Orders
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Real-time order tracking from placement to completion
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Print Receipts
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Print kitchen tickets and customer receipts automatically
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#FF6600]/30 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                  Lightning Fast
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  A few taps — even during your busiest rush hour
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1 group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] text-white border border-[#E65C00] hover:shadow-xl hover:shadow-[#FF6600]/20 transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <i className="bi bi-lightning-charge text-xl sm:text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 sm:mb-2">
                  Train Staff in Minutes
                </h3>
                <p className="text-xs sm:text-sm text-white/90">
                  Intuitive design means your team is ready by their first shift
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import {
  BarChart3,
  Store,
  Smartphone,
  ShoppingCart,
  Globe,
  Search,
  TrendingUp,
  MapPin,
} from "lucide-react";

export function ScaleFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Everything You Need to <span className="text-[#FF6600]">Sell Online</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            A Complete and Professional Online Ordering System
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(240px,auto)] sm:auto-rows-[minmax(280px,auto)]">
          {/* Analytics Dashboard - Large Card */}
          <div className="md:col-span-2 rounded-2xl sm:rounded-[2rem] bg-zinc-900 text-white p-6 sm:p-8 relative overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-10 sm:size-12 rounded-lg sm:rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Send us your existing menus</h3>
                <p className="text-sm sm:text-base text-zinc-400 max-w-md">
                  We provide full data entry from your PDF or delivery app links.
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-zinc-800 to-transparent z-0 opacity-50"></div>
            <div className="absolute -right-10 -bottom-10 w-3/4 h-3/4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-tl-3xl shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 border-4 border-zinc-800"></div>
          </div>

          {/* Direct Online Ordering */}
          <div className="rounded-2xl sm:rounded-[2rem] bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShoppingCart className="w-24 h-24 sm:w-32 sm:h-32 text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-10 sm:size-12 rounded-lg sm:rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 sm:mb-6 text-emerald-600 dark:text-emerald-400">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Receive orders with our app and tablet
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                  Automatically print orders handsfree, view order histories, and run reports.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-500">0%</span>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  Commission
                </span>
              </div>
            </div>
          </div>

          {/* SEO Website */}
          <div className="rounded-2xl sm:rounded-[2rem] bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-[#FF6600]/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-10 sm:size-12 rounded-lg sm:rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4 sm:mb-6 text-[#FF6600]">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Print orders with your existing printers
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                  Works with all network printer makes and models
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex gap-2">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Location Support */}
          <div className="rounded-2xl sm:rounded-[2rem] bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-10 sm:size-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4 sm:mb-6 text-blue-600 dark:text-blue-400">
                  <Store className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Your own credit card processing.
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                  Use your existing credit card processing, or ours, and you get paid out daily.
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="size-9 sm:size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L1
                </div>
                <div className="size-9 sm:size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L2
                </div>
                <div className="size-9 sm:size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L3
                </div>
              </div>
            </div>
          </div>

          {/* Custom Mobile Apps */}
          <div className="rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 sm:p-8 relative overflow-hidden group hover:shadow-purple-500/30 hover:shadow-xl transition-all duration-300">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-10 sm:size-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Multi Location support.</h3>
                <p className="text-purple-100 text-xs sm:text-sm">
                  Manage a single menu and settings across multiple location ordering links
                </p>
              </div>
              <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                <div className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-xs font-bold flex items-center gap-1.5">
                  <i className="bi bi-apple"></i> iOS
                </div>
                <div className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-xs font-bold flex items-center gap-1.5">
                  <i className="bi bi-android2"></i> Android
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 size-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}


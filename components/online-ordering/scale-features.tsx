import {
  Brush,
  Star,
  Truck,
  UtensilsCrossed,
  Users,
  Gift,
  ArrowRight,
} from "lucide-react";

export function ScaleFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
            Everything You Need to <span className="text-[#FF6600]">Scale</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powerful tools designed to help your restaurant grow, manage
            operations, and retain customers—all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Showcase Your Brand - Large Card */}
          <div className="md:col-span-2 rounded-[2rem] bg-zinc-900 text-white p-8 relative overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brush className="w-6 h-6 text-[#FF6600]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Showcase Your Brand</h3>
                <p className="text-zinc-400 max-w-md">
                  Customize every pixel. Your colors, your fonts, your identity.
                  No cookie-cutter templates.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center text-[#FF6600] font-semibold text-sm group-hover:gap-2 transition-all">
                Start Designing{" "}
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-zinc-800 to-transparent z-0 opacity-50"></div>
            <div className="absolute -right-10 -bottom-10 w-3/4 h-3/4 bg-gradient-to-br from-orange-200 to-orange-400 rounded-tl-3xl shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 border-4 border-zinc-800"></div>
          </div>

          {/* Review Management */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className="w-32 h-32 text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Review Management
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Direct happy customers to Google, handle issues privately.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-emerald-500 fill-emerald-500"
                  />
                ))}
                <span className="text-xs font-bold text-zinc-900 dark:text-white ml-2">
                  5.0
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Made Simple */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-[#FF6600]/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-6 text-[#FF6600]">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Delivery Made Simple
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Manage in-house drivers or connect with DoorDash Drive.
                </p>
              </div>
              <div className="mt-6 w-full h-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 dark:bg-zinc-800"></div>
                <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-[#FF6600]"></div>
                <div className="absolute top-1/2 left-1/3 size-3 bg-[#FF6600] rounded-full -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-[#FF6600]/30"></div>
                <div className="absolute top-1/2 right-0 size-3 bg-zinc-200 dark:bg-zinc-700 rounded-full -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Unlimited Menu Options */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Unlimited Menu Options
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Add modifiers, variations, and upsells without limits.
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="size-2 rounded-full bg-blue-500"></div>
                  <div className="h-2 w-16 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                </div>
                <div className="flex items-center gap-2 opacity-30 group-hover:opacity-80 transition-opacity delay-75">
                  <div className="size-2 rounded-full bg-blue-500"></div>
                  <div className="h-2 w-12 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                </div>
                <div className="flex items-center gap-2 opacity-20 group-hover:opacity-60 transition-opacity delay-150">
                  <div className="size-2 rounded-full bg-blue-500"></div>
                  <div className="h-2 w-20 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Database */}
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 relative overflow-hidden group hover:shadow-blue-500/30 hover:shadow-xl transition-all duration-300">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Database</h3>
                <p className="text-blue-100 text-sm">
                  Build detailed profiles for every order.
                </p>
              </div>
              <div className="mt-6 flex -space-x-3">
                <div className="size-8 rounded-full bg-white/20 border-2 border-blue-600 flex items-center justify-center text-[10px] font-bold">
                  JD
                </div>
                <div className="size-8 rounded-full bg-white/20 border-2 border-blue-600 flex items-center justify-center text-[10px] font-bold">
                  AS
                </div>
                <div className="size-8 rounded-full bg-white/20 border-2 border-blue-600 flex items-center justify-center text-[10px] font-bold">
                  MR
                </div>
                <div className="size-8 rounded-full bg-white/20 border-2 border-blue-600 flex items-center justify-center text-[10px] font-bold">
                  +
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 size-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
          </div>

          {/* Loyalty & Gift Cards - Full Width */}
          <div className="md:col-span-3 lg:col-span-3 rounded-[2rem] bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 text-white p-8 md:p-10 relative overflow-hidden group border border-zinc-800 hover:border-[#FF6600]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-[#FF6600] flex items-center justify-center text-white shadow-lg shadow-[#FF6600]/30">
                    <Gift className="w-6 h-6" />
                  </div>
                  <span className="text-[#FF6600] font-bold uppercase tracking-wider text-xs bg-[#FF6600]/10 px-3 py-1 rounded-full border border-[#FF6600]/20">
                    Retention Engine
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Loyalty &amp; Gift Cards
                </h3>
                <p className="text-zinc-400">
                  Keep them coming back with an integrated rewards program.
                  Customers earn points for every dollar spent and can redeem
                  them for discounts or free items.
                </p>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-64 h-40 rounded-xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] shadow-2xl relative overflow-hidden transform group-hover:-translate-y-2 group-hover:rotate-2 transition-transform duration-300 border border-white/10">
                  <div className="absolute top-4 left-4 font-bold text-white/80 text-sm">
                    GIFT CARD
                  </div>
                  <div className="absolute bottom-4 left-4 font-bold text-white text-lg tracking-widest">
                    •••• 4829
                  </div>
                  <div className="absolute bottom-4 right-4 font-black text-white text-xl italic">
                    $50
                  </div>
                  <div className="absolute -right-8 -top-8 size-32 bg-white/20 rounded-full blur-xl"></div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white text-zinc-900 px-4 py-2 rounded-full shadow-lg font-bold text-sm transform -rotate-6 group-hover:rotate-0 transition-transform">
                  +150 Points!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


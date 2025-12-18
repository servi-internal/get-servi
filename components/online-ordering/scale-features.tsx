import {
  BarChart3,
  Mail,
  Store,
  Percent,
  Smartphone,
  Gift,
  ArrowRight,
  Send,
  MessageSquare,
  Bell,
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
          {/* Analytics Dashboard - Large Card */}
          <div className="md:col-span-2 rounded-[2rem] bg-zinc-900 text-white p-8 relative overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-[#FF6600]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real-Time Analytics Dashboard</h3>
                <p className="text-zinc-400 max-w-md">
                  Track sales, popular items, peak hours, and customer behavior with actionable insights to optimize your menu and operations.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center text-[#FF6600] font-semibold text-sm group-hover:gap-2 transition-all">
                View Dashboard{" "}
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-zinc-800 to-transparent z-0 opacity-50"></div>
            <div className="absolute -right-10 -bottom-10 w-3/4 h-3/4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-tl-3xl shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 border-4 border-zinc-800"></div>
          </div>

          {/* Zero Commission */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Percent className="w-32 h-32 text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <Percent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Zero Commission Fees
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Keep 100% of your revenue. No hidden fees or commissions on orders.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-3xl font-black text-emerald-500">0%</span>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  Commission
                </span>
              </div>
            </div>
          </div>

          {/* Marketing Automation */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-[#FF6600]/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-6 text-[#FF6600]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Marketing Automation
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Automated email and SMS campaigns to bring customers back.
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                <div className="h-8 w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <Send className="w-4 h-4" />
                </div>
                <div className="h-8 w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="h-8 w-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <Bell className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Location Support */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Multi-Location Support
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Manage multiple restaurant locations from one central dashboard.
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L1
                </div>
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L2
                </div>
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                  L3
                </div>
              </div>
            </div>
          </div>

          {/* Custom Mobile Apps */}
          <div className="rounded-[2rem] bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 relative overflow-hidden group hover:shadow-purple-500/30 hover:shadow-xl transition-all duration-300">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div>
                <div className="size-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Mobile Apps</h3>
                <p className="text-purple-100 text-sm">
                  Branded iOS and Android apps for your restaurant.
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-xs font-bold flex items-center gap-1.5">
                  <i className="bi bi-apple"></i> iOS
                </div>
                <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-xs font-bold flex items-center gap-1.5">
                  <i className="bi bi-android2"></i> Android
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
                  Loyalty &amp; Shareable Gift Cards
                </h3>
                <p className="text-zinc-400">
                  Drive repeat business with loyalty points and digital gift cards that customers can earn, redeem, and share.
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


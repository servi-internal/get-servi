import Link from "next/link";
import { CheckCircle, Calendar, ShoppingBag, Menu as MenuIcon, CreditCard, Star } from "lucide-react";

export function OrderingHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 dark:bg-zinc-950"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FFF8F5 40%, #FFF3EE 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
            <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Own Your <span className="text-[#FF6600]">Online Ordering</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
              Don't rely on delivery apps alone for online orders, they're costly and they keep your customer data for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link href="/schedule-demo" className="h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-sm shadow-lg shadow-[#FF6600]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[44px]">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Request a Demo
              </Link>
            </div>
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                <span>Free setup & training</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                <span>No monthly fees</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0 min-h-0">
            <div className="relative w-[175px] sm:w-[240px] md:w-[265px] lg:w-[300px] aspect-[1/2] max-h-[380px] sm:max-h-[480px] lg:max-h-[520px] bg-zinc-900 rounded-2xl sm:rounded-[2rem] border-4 sm:border-[6px] lg:border-[8px] border-zinc-900 overflow-hidden shadow-2xl z-10 rotate-[-5deg] lg:rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 w-full h-full bg-white overflow-hidden flex flex-col">
                <div className="h-14 bg-[#FF6600] flex items-center justify-between px-4">
                  <MenuIcon className="w-6 h-6 text-white" />
                  <span className="font-bold text-white">BurgerJoint</span>
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div className="p-4 flex flex-col gap-4 overflow-hidden">
                  <div className="w-full aspect-video bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-zinc-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-zinc-200 rounded"></div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-24 w-24 rounded-lg bg-zinc-100 shrink-0"></div>
                    <div className="h-24 w-24 rounded-lg bg-zinc-100 shrink-0"></div>
                    <div className="h-24 w-24 rounded-lg bg-zinc-100 shrink-0"></div>
                  </div>
                  <div className="mt-auto bg-[#FF6600] text-white p-3 rounded-lg text-center font-bold">
                    Checkout • $24.50
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 sm:top-12 md:top-14 left-2 sm:left-4 md:left-6 lg:left-6 bg-white dark:bg-zinc-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 z-20 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="size-8 sm:size-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 shrink-0">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-zinc-500">New Order</div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white truncate">+$42.50</div>
              </div>
            </div>
            <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 -right-1 sm:right-2 lg:right-4 bg-white dark:bg-zinc-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 z-20">
              <div className="size-8 sm:size-9 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-zinc-500">New Review</div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">5.0 Stars!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


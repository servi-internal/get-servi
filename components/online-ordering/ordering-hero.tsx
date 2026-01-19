import { CheckCircle, Calendar, ShoppingBag, Menu as MenuIcon, CreditCard, Star } from "lucide-react";

export function OrderingHero() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#FAFAFA] dark:bg-zinc-950">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(#FF6600 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
              Own Your <span className="text-[#FF6600]">Online Ordering</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
              Don't rely on delivery apps alone for online orders, they're costly and they keep your customer data for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1FdI1lQhrxPqvmw6TinzfpcAShPOyjBFUzOMVH6euzWdzpx_bxTURwZElipfxthReLVfeylFVr" target="_blank" rel="noopener noreferrer" className="h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6600]/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book a Meeting
              </a>
            </div>
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#FF6600] flex-shrink-0" />
                <span>Free setup & training</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#FF6600] flex-shrink-0" />
                <span>No monthly fees</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[240px] sm:w-[280px] md:w-[300px] h-[480px] sm:h-[560px] md:h-[600px] bg-zinc-900 rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-zinc-900 overflow-hidden shadow-2xl z-10 rotate-[-5deg] lg:rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
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
            <div className="absolute top-12 sm:top-16 md:top-20 left-4 sm:left-6 md:left-8 lg:left-8 bg-white dark:bg-zinc-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 z-20 animate-bounce">
              <div className="size-8 sm:size-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-500">New Order</div>
                <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                  +$42.50
                </div>
              </div>
            </div>
            <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 -right-2 sm:-right-4 lg:right-8 bg-white dark:bg-zinc-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 z-20">
              <div className="size-8 sm:size-10 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-500">New Review</div>
                <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                  5.0 Stars!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


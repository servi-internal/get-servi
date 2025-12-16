import { CheckCircle, PlayCircle, ShoppingBag, Menu as MenuIcon, CreditCard, Star } from "lucide-react";

export function OrderingHero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#E65C00] dark:text-[#FF6600] w-fit mx-auto lg:mx-0">
              <span className="text-xs font-bold uppercase tracking-wider">
                New Feature
              </span>
              <span className="w-1 h-1 rounded-full bg-[#FF6600]"></span>
              <span className="text-xs font-medium">Auto-Loyalty Rewards</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
              Direct Online Ordering That{" "}
              <span className="text-[#FF6600]">Builds Your Brand</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
              Stop paying 30% commissions to third parties. Take control of your
              customer data with a fully branded experience that turns first-time
              guests into regulars.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button className="h-12 px-8 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-base shadow-lg shadow-[#FF6600]/30 transition-all transform hover:-translate-y-0.5">
                Start Free Trial
              </button>
              <button className="h-12 px-8 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-[#FF6600] text-zinc-900 dark:text-white font-bold text-base flex items-center gap-2 transition-all">
                <PlayCircle className="w-5 h-5 text-[#FF6600]" />
                Watch Demo
              </button>
            </div>
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-[18px] h-[18px] text-[#FF6600]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-[18px] h-[18px] text-[#FF6600]" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-zinc-900 rounded-[2.5rem] border-[8px] border-zinc-900 overflow-hidden shadow-2xl z-10 rotate-[-5deg] lg:rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
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
            <div className="absolute top-20 left-8 lg:left-8 bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-xl flex items-center gap-3 z-20 animate-bounce">
              <div className="size-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">New Order</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-white">
                  +$42.50
                </div>
              </div>
            </div>
            <div className="absolute bottom-32 -right-4 lg:-right-8 bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-xl flex items-center gap-3 z-20">
              <div className="size-10 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">New Review</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-white">
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


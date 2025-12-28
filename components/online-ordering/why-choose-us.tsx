import {
  Palette,
  UtensilsCrossed,
  Database,
  Truck,
  Gift,
  Cable,
  Smartphone,
  MousePointer,
  Calendar,
  Sliders,
  ShieldCheck,
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100 dark:border-zinc-800">
        <div className="max-w-lg mx-auto">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">
            For Your Business
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8 sm:mb-10">
            Why Restaurants Choose Our Online Ordering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Showcase Your Brand
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Fully customized ordering site with your colors, photos, and style.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Unlimited Menu Options
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Add unlimited items, modifiers, and upsells. We handle setup.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Built-In Customer Database
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Auto-capture customer data to grow your marketing list effortlessly.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Delivery Made Simple
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Integrate DoorDash or Uber for delivery—no driver management.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  SEO-Optimized Website
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Improve your restaurant's visibility in Google Search with a branded site built for SEO.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Cable className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Use Yours or Ours
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  We can market your existing direct online ordering or provide ours — your call.
                </p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] dark:bg-zinc-950 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-lg mx-auto relative z-10">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">
            For Your Customers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8 sm:mb-10">
            Why Customers Choose Our Online Ordering
          </h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="size-12 sm:size-14 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                  Order Without Installing Apps
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  Direct ordering from any browser—no app downloads or logins required.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="size-12 sm:size-14 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <MousePointer className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                  Simple & Easy Interface
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  Clean, intuitive ordering experience with zero ads or distractions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="size-12 sm:size-14 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                  Schedule Orders & Deep Customization
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  Order ahead for pickup or delivery. Customize every item exactly how you want it.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="size-12 sm:size-14 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                  Your Data Stays Safe
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  Customer data stays securely with the restaurant — never sold to third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


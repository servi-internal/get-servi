import {
  Palette,
  UtensilsCrossed,
  Database,
  Truck,
  Gift,
  Cable,
  Smartphone,
  MousePointer,
  RotateCcw,
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-white dark:bg-zinc-900 p-8 lg:p-20 flex flex-col justify-center border-r border-zinc-100 dark:border-zinc-800">
        <div className="max-w-lg mx-auto">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-sm mb-2 block">
            For Your Business
          </span>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            Why Restaurants Choose Our Online Ordering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  Customer Engagement Tools
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Boost repeat orders with loyalty rewards and digital gift cards.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Cable className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  POS Integration
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Seamlessly sync menus and orders with your existing POS system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] dark:bg-zinc-950 p-8 lg:p-20 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-lg mx-auto relative z-10">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-sm mb-2 block">
            For Your Customers
          </span>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            Why Customers Choose Our Online Ordering
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Order Without Installing Apps
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Direct ordering from any browser—no app downloads or logins required.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <MousePointer className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Simple & Easy Interface
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Clean, intuitive ordering experience with zero ads or distractions.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <RotateCcw className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  One-Click Reordering
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Save favorite orders and reorder in seconds for faster checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


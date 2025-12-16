import {
  Wallet,
  Zap,
  Database,
  Palette,
  Cable,
  Headset,
  Smartphone,
  Clock,
  Heart,
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
            Why Restaurants Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Commission Free
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Keep 100% of your profits. No hidden 30% fees.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Instant Payouts
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Get paid daily directly to your bank account.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Data Ownership
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Own your customer list for retargeting.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Custom Branding
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Your logo, your colors, your domain.
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
                  Syncs menus and orders with your POS.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="size-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                <Headset className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Real humans available anytime you need help.
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
            Why Customers Love It
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  No App Download Needed
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Frictionless ordering directly from their browser. Higher
                  conversion rates than app-forced flows.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Real-time Order Tracking
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Customers can see exactly when their food is being prepared
                  and when it&apos;s out for delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="size-14 rounded-xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center text-[#FF6600] shrink-0">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  One-Click Reordering
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Repeat customers can re-order their favorites in seconds,
                  boosting your retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


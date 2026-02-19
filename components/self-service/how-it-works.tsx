"use client";

import { QrCode, Smartphone, CreditCard, Printer, BarChart3 } from "lucide-react";

const STEPS = [
  {
    icon: QrCode,
    title: "Scan",
    description: "No app download required. Menu loads instantly on their phone.",
  },
  {
    icon: Smartphone,
    title: "Order",
    description: "Guests enjoy an easy use, low stress ordering experience.",
  },
  {
    icon: CreditCard,
    title: "Pay",
    description: "Cards are securely stored for easy reordering.",
  },
  {
    icon: Printer,
    title: "Serve",
    description: "Orders print directly to your kitchen printer so you can serve faster.",
  },
  {
    icon: BarChart3,
    title: "Control",
    description: "Manage menus, sell outs items, and daily specials from your tablet.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-18 lg:py-24 bg-[#0f1419] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,102,0,0.03)_50%,transparent_100%)]" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 lg:mb-14">
          <span className="text-[#ff7043] font-semibold tracking-widest uppercase text-xs">
            How it works
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            From seated to <span className="text-[#ff7043]">served in record time</span>
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl">
            Most customers place their order with <span className="text-[#ff7043] font-semibold">ser.vi</span> in under 4 minutes. Even first time users.
          </p>
        </header>

        {/* Horizontal strip: one row, connected steps */}
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible scrollbar-none">
          <div className="flex min-w-full lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-0 lg:border lg:border-gray-700/60 lg:rounded-xl lg:overflow-hidden lg:bg-gray-900/40 lg:divide-x lg:divide-gray-700/60">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group flex shrink-0 w-[260px] sm:w-[280px] lg:w-auto lg:shrink lg:flex flex-col items-center text-center p-6 lg:py-8 rounded-xl transition-all duration-300 ease-out hover:bg-gray-800/50 lg:hover:bg-gray-800/60 cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff7043] flex items-center justify-center mb-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff7043]/25">
                    <Icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-bold text-[#ff7043] tracking-widest uppercase transition-colors duration-300 group-hover:text-[#ff8a65]">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7043]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-snug transition-colors duration-300 group-hover:text-gray-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why are we different */}
        <div className="mt-12 sm:mt-16 max-w-3xl">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">
            Why are we different from any other QR ordering solution?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Your staff has access to inventory controls right in our app. Whenever there is a sell out or a daily special change that makes the menu incorrect, your staff can update the menu as needed with a single click. This allows the system to be trusted to not take orders for items that are not available. That trust allows your staff to not have to attend to the tablet for each order, so they can truly spend more time providing better service to more guests.
          </p>
        </div>
      </div>
    </section>
  );
}

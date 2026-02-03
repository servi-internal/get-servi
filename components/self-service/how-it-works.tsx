"use client";

import { QrCode, Smartphone, CreditCard, Printer, BarChart3 } from "lucide-react";

const STEPS = [
  {
    icon: QrCode,
    title: "QR Menu",
    description: "No app download required. Customers use their native camera.",
  },
  {
    icon: Smartphone,
    title: "Ordering",
    description: "Guests browse a visual menu, customize orders, and add to cart.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Pay instantly with Apple Pay, Google Pay, or card.",
  },
  {
    icon: Printer,
    title: "Printing",
    description: "Orders print directly to your kitchen printer—no staff touch screen.",
  },
  {
    icon: BarChart3,
    title: "Control",
    description: "Manage menus, sell-outs, and daily specials from your tablet.",
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
            From Scan to <span className="text-[#ff7043]">Kitchen in Seconds</span>
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl">
            Five simple steps. No training, no apps, no friction.
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
      </div>
    </section>
  );
}

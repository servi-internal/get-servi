"use client";

import {
  FileText,
  TabletSmartphone,
  Printer,
  CreditCard,
  Store,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const FEATURES = [
  {
    icon: FileText,
    title: "Send us your existing menus",
    description:
      "We provide full data entry from your PDF or delivery app links.",
  },
  {
    icon: TabletSmartphone,
    title: "Receive orders with our app and tablet",
    description:
      "Automatically print orders handsfree, view order histories, and run reports.",
  },
  {
    icon: Printer,
    title: "Print orders with your existing printers",
    description: "Works with all network printer makes and models",
  },
  {
    icon: CreditCard,
    title: "Your own credit card processing.",
    description:
      "Use your existing credit card processing, or ours, and you get paid out daily.",
  },
  {
    icon: Store,
    title: "Multi Location support.",
    description:
      "Manage a single menu and settings across multiple location ordering links",
  },
];

export function ScaleFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = 360;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-x-hidden bg-[#FAFAFA]"
      aria-labelledby="scale-features-heading"
    >
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#FF6600 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FF6600]/5 to-transparent rounded-full blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: Our Programs style */}
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[#FF6600] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              Online Ordering System
            </span>
            <h2
              id="scale-features-heading"
              className="text-2xl font-bold text-[#333333] tracking-tight sm:text-3xl md:text-4xl"
            >
              A Complete and Professional{" "}
              <span className="text-[#FF6600]">Online Ordering System</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Everything you need to sell online—menus, orders, printers, payments, and multi-location support.
            </p>
          </div>
          {/* Desktop nav buttons */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="size-12 rounded-full border border-gray-300 bg-white text-[#333333] shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-[#FF6600]/30 hover:text-[#FF6600] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="size-12 rounded-full bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/25 flex items-center justify-center hover:bg-[#E65C00] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track - extra py/padding so card shadows aren't clipped */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 py-5">
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto overflow-y-hidden pb-10 pt-3 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isHighlight = index === 1; // Second card as hero accent

              return (
                <article
                  key={index}
                  className={`group relative w-[300px] sm:w-[320px] lg:w-[340px] min-h-[320px] sm:min-h-[340px] flex-shrink-0 snap-start rounded-2xl p-6 sm:p-8 flex flex-col border shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${
                    isHighlight
                      ? "bg-gradient-to-br from-[#FF6600] to-[#E65C00] border-white/20"
                      : "bg-[#1a1625] border-white/10"
                  }`}
                >
                  {/* Decorative icon in corner for highlight card */}
                  {isHighlight && (
                    <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                      <TabletSmartphone className="w-24 h-24 text-white" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col flex-1 min-w-0">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 ${
                        isHighlight
                          ? "bg-white/20 border border-white/30 text-white"
                          : "bg-white/10 border border-white/15 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug text-white">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed flex-1 ${
                        isHighlight ? "text-white/95" : "text-gray-300"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
            {/* Spacer so last card doesn't stick to edge */}
            <div className="w-4 flex-shrink-0 lg:w-8" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

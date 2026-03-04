"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1800;

const formatters = {
  percent: (n: number) => `${Math.round(n)}%`,
  currency: (n: number) => `$${Math.round(n).toLocaleString()}`,
  multiplier: (n: number) => `${n.toFixed(1)}x`,
} as const;

function useCountUp(
  end: number,
  inView: boolean,
  formatKey: keyof typeof formatters
) {
  const format = formatters[formatKey];
  const [display, setDisplay] = useState(format(0));
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(format(0));
      return;
    }
    startRef.current = null;
    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 2;
      const current = eased * end;
      setDisplay(format(current));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, inView, formatKey]);

  return display;
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stat1 = useCountUp(62, inView, "percent");
  const stat2 = useCountUp(2000, inView, "currency");
  const stat3 = useCountUp(2.5, inView, "multiplier");

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#333333] py-10 sm:py-14 lg:py-16 text-white relative overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-6 sm:gap-8 text-center md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
          <div className="flex flex-col gap-1.5 p-3 pt-0 md:pt-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-[#FF6600]">
              {stat1}
            </span>
            <p className="text-xs sm:text-sm font-medium text-gray-300">
              of consumers discover new
              <br />
              restaurants on Google
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-3 pt-6 md:pt-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-[#FF6600]">
              {stat2}
            </span>
            <p className="text-xs sm:text-sm font-medium text-gray-300">
              average savings
              <br />
              per month
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-3 pt-6 md:pt-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-[#FF6600]">
              {stat3}
            </span>
            <p className="text-xs sm:text-sm font-medium text-gray-300">
              faster table turnover
              <br />
              & service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


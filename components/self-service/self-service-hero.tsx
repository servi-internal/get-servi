import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, CheckCircle } from "lucide-react";

export function SelfServiceHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
      {/* Background: base + warm band (sections/hero) + dot pattern (ordering-hero) + accent gradient */}
      <div className="absolute inset-0 z-0 bg-[#FAFAFA] dark:bg-zinc-950" aria-hidden />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-white via-[#FFF3EE]/50 to-[#FAFAFA] dark:from-transparent dark:via-[#FF6600]/5 dark:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 opacity-25 dark:opacity-15"
        style={{
          backgroundImage: "radial-gradient(#FF6600 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 z-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/8 to-transparent dark:from-[#FF6600]/12 dark:to-transparent"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 z-0 w-full h-1/3 bg-gradient-to-t from-transparent to-[#FFF3EE]/40 dark:to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center min-w-0">
          {/* Copy */}
          <div className="flex flex-col gap-5 sm:gap-6 min-w-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white break-words">
              Nothing is better than <span className="text-[#FF6600]">great personal service.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              QR ordering lets guests scan, order, and pay from their phone—so you serve more with less.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center h-12 px-6 bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-[#FF6600]/30 hover:shadow-xl hover:shadow-[#FF6600]/35 hover:-translate-y-0.5"
              >
                See How It Works <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#video-demo"
                className="group inline-flex items-center justify-center h-12 px-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-bold rounded-xl transition-all hover:border-[#FF6600] hover:text-[#FF6600] dark:hover:border-[#FF6600]"
              >
                <PlayCircle className="mr-2 w-4 h-4 text-[#FF6600]" /> View Demo
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                <span>No app download for guests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                <span>No monthly fees</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] min-w-0 w-full">
            <div className="relative w-full max-w-[85vw] sm:max-w-xl aspect-[4/3] lg:max-w-2xl">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/self-ordering-hero.png"
                alt="Self-service ordering: customer scanning QR to order"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

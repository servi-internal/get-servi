import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function SelfServiceHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FAFAFA 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center min-w-0">
          {/* Copy */}
          <div className="flex flex-col gap-5 sm:gap-6 min-w-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white break-words">
              Nothing is better than <span className="text-[#FF6600]">great personal service.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Nothing is worse than when your customers can&apos;t get it.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              The problem isn&apos;t your staff, it&apos;s the technology you&apos;re using. Unlock useful connectivity between your guest and your business with QR Ordering for self-service.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/schedule-demo"
                className="inline-flex items-center justify-center h-12 px-6 bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-[#FF6600]/30 hover:shadow-xl hover:shadow-[#FF6600]/35 hover:-translate-y-0.5"
              >
                Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] min-w-0 w-full">
            <div className="relative w-full max-w-[85vw] sm:max-w-xl aspect-[4/3] lg:max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771403841/self-service-hero_auey5r.png"
                alt="Self-service ordering at a restaurant"
                fill
                className="object-cover"
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

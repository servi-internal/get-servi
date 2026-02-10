import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

export function OrderingHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 dark:bg-zinc-950"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FFF8F5 40%, #FFF3EE 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
            <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Own Your <span className="text-[#FF6600]">Online Ordering</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
              Don&apos;t rely on delivery apps alone for online orders, they&apos;re costly and they keep your customer data for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link href="/schedule-demo" className="h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-sm shadow-lg shadow-[#FF6600]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[44px]">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-300/40 ring-1 ring-black/5">
              <div className="relative aspect-square">
                <Image
                  src="https://assets2.ser.vi/brand/saltestco/feature_image/online.png"
                  alt="Direct online ordering platform"
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


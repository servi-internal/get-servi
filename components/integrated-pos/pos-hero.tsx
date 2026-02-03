import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function POSHero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-[#FFF3EE] dark:bg-zinc-950">
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FFF8F5 35%, #FFF3EE 100%)",
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6600]/8 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF6600]/5 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>
      
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left min-w-0">
            <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5">
              The fastest, simplest POS you&apos;ll ever use — and <span className="text-[#FF6600]">it doesn&apos;t cost you a dime.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              You keep running your restaurant exactly the way you want. We just make everything quicker, cleaner, and more profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#all-order-types"
                className="group inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-bold shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[44px]"
              >
                See How It Works
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end min-w-0">
            <div className="relative w-full max-w-[85vw] sm:max-w-xl lg:max-w-full aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none">
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#FF6600]/10 rounded-xl rotate-12 blur-sm" />
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900/10 dark:bg-gray-800/20 p-0.5 shadow-xl shadow-gray-900/20 z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 via-transparent to-transparent z-[1]" />
                <Image
                  alt="Collection of devices showing POS interface floating in 3D space"
                  className="rounded-[calc(0.75rem-2px)] sm:rounded-[calc(1rem-2px)] w-full h-full object-cover relative"
                  src="https://assets2.ser.vi/brand/saltestco/feature_image/heroPOS.webp"
                  width={800}
                  height={600}
                  priority
                  sizes="(max-width: 1024px) 85vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

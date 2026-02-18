import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function POSHero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FAFAFA 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6600]/5 to-transparent pointer-events-none" aria-hidden />

      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Content Column */}
          <div className="flex flex-col text-center lg:text-left min-w-0">
            <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5">
              The fastest, simplest POS you&apos;ll ever use — and <span className="text-[#FF6600]">it doesn&apos;t cost you a dime.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              You keep running your restaurant exactly the way you want. We just make everything quicker, cleaner, and more profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/schedule-demo"
                className="group inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-bold shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[44px]"
              >
                Request A Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className="relative flex justify-center lg:justify-end min-w-0">
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-300/40 ring-1 ring-black/5">
              <div className="relative aspect-[4/3]">
                <Image
                  alt="Collection of devices showing POS interface"
                  className="object-cover"
                  src="https://file.cdn.sunmi.com/newebsite/products/t3-family/lg/p3-3-1.jpg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

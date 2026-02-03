import { TrendingUp } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF3EE]/30 to-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 items-center">
          <div className="flex flex-col gap-3 sm:gap-4 text-left">
            <h1 className="text-[#333333] text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Boost Profits. <span className="text-[#FF6600]">Get More Customers.</span> Serve them faster.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
              Are you a restaurant owner paying massive delivery app commissions, hidden credit card fees, and high staff costs?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="/pricing" className="flex h-11 sm:h-11 cursor-pointer items-center justify-center rounded-lg bg-[#FF6600] px-5 sm:px-6 text-sm font-bold text-white transition-all hover:bg-[#FF6600]/90 shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5">
                See Pricing
              </a>
              <a href="/schedule-demo" className="flex h-11 sm:h-11 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-5 sm:px-6 text-sm font-bold text-[#333333] transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-[#FF6600]">
                Request a Demo
              </a>
            </div>
          </div>
          <div className="relative w-full mt-4 sm:mt-0">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl shadow-gray-200 ring-1 ring-gray-900/5">
              <Image
                alt="Restaurant POS Tablet"
                className="h-full w-full object-cover"
                src="https://assets2.ser.vi/brand/saltestco/feature_image/hero-pos.jpeg"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


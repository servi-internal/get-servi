import { TrendingUp } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF3EE]/30 to-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 text-left">
            <h1 className="text-[#333333] text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Boost Profits. Get More Customers.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Are you a restaurant owner paying high credit card fees, extra staff costs, and massive delivery app commissions?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href="/pricing" className="flex h-12 sm:h-12 cursor-pointer items-center justify-center rounded-lg bg-[#FF6600] px-6 sm:px-8 text-sm sm:text-base font-bold text-white transition-all hover:bg-[#FF6600]/90 shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5">
                See Pricing
              </a>
              <a href="#features" className="flex h-12 sm:h-12 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-6 sm:px-8 text-sm sm:text-base font-bold text-[#333333] transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-[#FF6600] scroll-smooth">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative w-full mt-4 sm:mt-0">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xl sm:shadow-2xl shadow-gray-200 ring-1 ring-gray-900/5">
              <Image
                alt="Restaurant POS Tablet"
                className="h-full w-full object-cover"
                src="https://assets2.ser.vi/brand/saltestco/feature_image/hero-pos.jpeg"
                width={800}
                height={600}
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 hidden sm:flex items-center gap-3 rounded-xl bg-white p-3 sm:p-4 shadow-xl border border-gray-100 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FF6600]/10 text-[#FF6600]">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Revenue Increase
                </p>
                <p className="text-base sm:text-lg font-bold text-[#333333]">+30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


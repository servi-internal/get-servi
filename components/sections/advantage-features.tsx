import { ShoppingCart, Monitor, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

export function AdvantageFeatures() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-3 sm:mb-4">
            The <span className="text-[#FF6600]">Ser.vi</span> Advantage
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A complete restaurant platform designed to save money, increase sales, and expand your reach — all in one simple system
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-48 sm:h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/online.png"
                alt="Online ordering on mobile device"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#333333]">
                Online Ordering
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Accept orders directly from your website and mobile app. Zero commission fees, keep 100% of your revenue.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-48 sm:h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/counter.png"
                alt="Counter service point of sale"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#333333]">
                Counter Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast checkout for quick-service restaurants. Process orders efficiently with intuitive POS interface.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-48 sm:h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/table.png"
                alt="Table service with guests dining"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#333333]">
                Table Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Manage dine-in orders seamlessly. Let guests order and pay from their phones for faster table turnover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

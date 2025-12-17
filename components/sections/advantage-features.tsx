import { UtensilsCrossed, Monitor, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export function AdvantageFeatures() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#FF6600]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#FF6600]">
            Features
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            The Ser.vi Advantage
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/kds-h.jpeg"
                alt="Chef preparing food in a modern kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#333333]">
                Kitchen Display System
              </h3>
              <p className="mb-6 flex-1 text-sm text-gray-600 leading-relaxed">
                Route orders instantly to the kitchen. Eliminate paper tickets
                and reduce errors by 90%.
              </p>
              <a className="inline-flex items-center text-sm font-bold text-[#FF6600] hover:text-[#FF6600]/80 group">
                Learn More{" "}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/table-side.png"
                alt="Customers ordering food using a digital kiosk"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#333333]">
                Tableside Ordering
              </h3>
              <p className="mb-6 flex-1 text-sm text-gray-600 leading-relaxed">
                Let guests order and pay from their phones. Free up your staff
                to focus on hospitality.
              </p>
              <a className="inline-flex items-center text-sm font-bold text-[#FF6600] hover:text-[#FF6600]/80 group">
                Learn More{" "}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-transparent hover:border-[#FF6600]/10">
            <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/loyalty.png"
                alt="Happy customers enjoying a meal at a restaurant table"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#333333]">
                Loyalty Built-in
              </h3>
              <p className="mb-6 flex-1 text-sm text-gray-600 leading-relaxed">
                Turn first-time guests into regulars with an integrated rewards
                program that works automatically.
              </p>
              <a className="inline-flex items-center text-sm font-bold text-[#FF6600] hover:text-[#FF6600]/80 group">
                Learn More{" "}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ShoppingCart, Monitor, Phone, TrendingUp } from "lucide-react";
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
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Direct Online Ordering - Horizontal Card */}
          <div className="md:col-span-2 flex flex-col md:flex-row overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-gray-200 hover:border-[#FF6600]/20">
            <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/online.png"
                alt="Online ordering on mobile device"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6600] text-white">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#333333]">
                Direct Online Ordering
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Take orders directly online and leverage Google search traffic to grow your business. Add delivery on demand without delivery app commissions—you take the order, they deliver it, customer pays the delivery fee. Branded website and mobile app make reordering easy.
              </p>
            </div>
          </div>

          {/* Self Service Ordering - Square Card */}
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-gray-200 hover:border-[#FF6600]/20">
            <div className="h-56 sm:h-64 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/counter.png"
                alt="Counter service point of sale"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#333333] text-white">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-lg sm:text-xl font-bold text-[#333333]">
                Self Service Ordering
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                QR Code order and pay for table and counter service. Easy to use for all guests, captures orders quickly without issues. Prints to your existing network or Bluetooth printers.
              </p>
            </div>
          </div>

          {/* Integrated POS - Square Card */}
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-gray-200 hover:border-[#FF6600]/20">
            <div className="h-56 sm:h-64 w-full bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/counter.png"
                alt="Integrated POS system"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#333333] text-white">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-lg sm:text-xl font-bold text-[#333333]">
                Integrated POS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Works on any tablet or PC hardware. Connected to your online and self-service catalog and ordering. Supports phone orders, table tabs, and walk-up counter service.
              </p>
            </div>
          </div>

          {/* Marketing - Horizontal Card */}
          <div className="md:col-span-2 flex flex-col md:flex-row-reverse overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-gray-200 hover:border-[#FF6600]/20">
            <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 relative overflow-hidden">
              <Image
                src="https://assets2.ser.vi/brand/saltestco/feature_image/hero-pos.jpeg"
                alt="Marketing automation"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6600] text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#333333]">
                Marketing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Engage phone callers with SMS links to your online ordering. Advertise on Google Maps for real-time impulse sales. SEO-optimized website and retargeting campaigns drive traffic and repeat business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

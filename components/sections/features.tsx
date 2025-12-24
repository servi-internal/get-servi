import { CreditCard, ShoppingCart, QrCode, Megaphone } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FFF3EE] opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-gray-50 opacity-50 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">
            Why Restaurants <span className="text-[#FF6600]">Choose</span> Ser.vi
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Save money, increase sales, and grow your customer base with our all-in-one restaurant platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold text-[#333333]">
              Zero Commission Online Ordering
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Keep 100% of your revenue. No 30% fees to DoorDash or UberEats.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold text-[#333333]">
              Lower Credit Card Fees
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Our tablet POS passes convenience fees to customers, not you.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <QrCode className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold text-[#333333]">
              Mobile Self-Service Ordering
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              QR code ordering at tables means faster service and higher tips.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Megaphone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold text-[#333333]">
              Automated Marketing Tools
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Email and SMS campaigns that bring customers back automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


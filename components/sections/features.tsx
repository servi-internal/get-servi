import { CreditCard, ShoppingCart, QrCode, Megaphone } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full bg-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FFF3EE] opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-gray-50 opacity-50 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#333333]">
            Why Restaurants <span className="text-[#FF6600]">Choose</span> Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="mb-2 text-sm sm:text-base font-bold text-[#333333]">
              Zero Commission Online Ordering
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
              Keep 100% of your profits with direct online ordering and capture customer data for your marketing.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="mb-2 text-sm sm:text-base font-bold text-[#333333]">
              Eliminate credit card fees and surprises
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
              We guarantee a flat rate for all transactions, so no hidden charges. The convenience fee truly covers you.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <QrCode className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="mb-2 text-sm sm:text-base font-bold text-[#333333]">
              Stop Losing Walk-In Customers
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
              QR Code ordering and pay at the table & counters reduces long lines and wait times while keeping staff cost low.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="mb-2 text-sm sm:text-base font-bold text-[#333333]">
              Reach New Customers Affordably
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
              Our real world, proven marketing program, promotes your whole business, with actual results at any budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


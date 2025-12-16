import { CreditCard, ShoppingCart, QrCode, Megaphone } from "lucide-react";

export function Features() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FFF3EE] opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-gray-50 opacity-50 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Why Restaurants Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Maximize your revenue and streamline operations with our
            cutting-edge tools designed for modern hospitality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#333333]">
              Zero Commission
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Stop paying 30% to delivery apps. Keep your hard-earned revenue
              in your pocket.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#333333]">
              Increased Orders
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Smart upsells increase average order value by up to 20%
              automatically.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <QrCode className="w-8 h-8" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#333333]">
              Contactless Pay
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Fast, secure QR code payments right at the table for faster table
              turnover.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Megaphone className="w-8 h-8" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-[#333333]">
              Marketing Auto
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Automated email and SMS campaigns to bring customers back again
              and again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


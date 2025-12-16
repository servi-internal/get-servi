import { FrownIcon, SmileIcon, X, Check, ArrowRight } from "lucide-react";

export function Comparison() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-gray-100 shadow-xl md:grid-cols-2">
          <div className="relative flex flex-col justify-center bg-gray-50 p-10 md:p-14 border-r border-gray-100">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500">
              <FrownIcon className="w-7 h-7" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Delivery Apps Hijack Traffic
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-red-500 bg-red-50 rounded-full p-1">
                  <X className="w-4 h-4" />
                </span>
                <span className="text-gray-600 font-medium">
                  High commissions (up to 30%)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-red-500 bg-red-50 rounded-full p-1">
                  <X className="w-4 h-4" />
                </span>
                <span className="text-gray-600 font-medium">
                  No access to customer data
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-red-500 bg-red-50 rounded-full p-1">
                  <X className="w-4 h-4" />
                </span>
                <span className="text-gray-600 font-medium">Brand dilution</span>
              </li>
            </ul>
            <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-full bg-[#FF6600] p-3 shadow-lg shadow-[#FF6600]/20 md:flex ring-4 ring-white">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#FFF3EE] p-10 md:p-14">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#FF6600] shadow-sm">
              <SmileIcon className="w-7 h-7" />
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Direct Ordering Unlocks Value
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-white bg-[#FF6600] rounded-full p-1">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-800 font-medium">
                  Keep 100% of your profits
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-white bg-[#FF6600] rounded-full p-1">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-800 font-medium">
                  Own your customer relationships
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-white bg-[#FF6600] rounded-full p-1">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-800 font-medium">
                  Build brand loyalty instantly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


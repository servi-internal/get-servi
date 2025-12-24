import { X, Check, Rocket } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <div className="bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-400 mb-6 sm:mb-8 border-b border-gray-300 pb-3 sm:pb-4">
              Without Ser.vi
            </h3>
            <ul className="space-y-5 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4 text-gray-500">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-sm sm:text-base text-gray-700">
                    30% Commission Fees
                  </strong>
                  <span className="text-xs sm:text-sm">
                    Paying huge margins to delivery apps per order.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-gray-500">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-sm sm:text-base text-gray-700">
                    Zero Customer Data
                  </strong>
                  <span className="text-xs sm:text-sm">
                    You don&apos;t know who your customers are.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-gray-500">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-sm sm:text-base text-gray-700">
                    Inconsistent Revenue
                  </strong>
                  <span className="text-xs sm:text-sm">
                    Relying on foot traffic and hope marketing.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#FF6600]/5 p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10">
              <Rocket className="w-24 h-24 sm:w-36 sm:h-36 text-[#FF6600]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b border-[#FF6600]/20 pb-3 sm:pb-4">
              With Ser.vi Marketing
            </h3>
            <ul className="space-y-5 sm:space-y-6 relative z-10">
              <li className="flex items-start gap-3 sm:gap-4 text-gray-900">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] mt-1 flex-shrink-0 font-bold" />
                <div>
                  <strong className="block text-sm sm:text-base">Commission-Free Orders</strong>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Keep 100% of your profits on direct orders.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-gray-900">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] mt-1 flex-shrink-0 font-bold" />
                <div>
                  <strong className="block text-sm sm:text-base">Own Your Database</strong>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Build a list of thousands of local diners.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-gray-900">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] mt-1 flex-shrink-0 font-bold" />
                <div>
                  <strong className="block text-sm sm:text-base">Predictable Growth</strong>
                  <span className="text-xs sm:text-sm text-gray-600">
                    An automated engine that brings customers back.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


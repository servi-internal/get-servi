import { X, Check, ArrowRight } from "lucide-react";

export function Comparison() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Delivery Apps Hijack <span className="text-[#FF6600]">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stop losing money to third-party platforms. Take control of your online ordering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Delivery Apps Side */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#333333]">
                Delivery Apps Hijack Your Business
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-sm sm:text-base text-gray-600">
                  Pay up to 30% commission on every order
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-sm sm:text-base text-gray-600">
                  Never own your customer data
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-sm sm:text-base text-gray-600">
                  Customers don&apos;t remember your brand
                </span>
              </li>
            </ul>
          </div>

          {/* Direct Ordering Side */}
          <div className="bg-gradient-to-br from-[#FF6600] to-[#FF8533] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Direct Ordering Grows Your Business
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-white/95">
                    Keep 100% of your profits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-white/95">
                    Build your own customer database
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-white/95">
                    Create loyal repeat customers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Make the switch</span>
            <ArrowRight className="w-4 h-4 text-[#FF6600]" />
          </div>
        </div>
      </div>
    </section>
  );
}


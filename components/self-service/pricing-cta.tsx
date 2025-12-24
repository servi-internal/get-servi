import { Check } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#FF6600] to-[#E65C00] p-6 sm:p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-black opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black mb-4 sm:mb-6 tracking-tight">
            Customers Pay Nothing Extra
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 font-medium">
            Except a small convenience fee to power the platform.
          </p>
          <div className="inline-block bg-white text-gray-900 px-8 sm:px-10 py-6 sm:py-8 rounded-2xl sm:rounded-3xl shadow-xl mb-8 sm:mb-10">
            <span className="block text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
              Convenience Fee
            </span>
            <div className="text-5xl sm:text-6xl font-black tracking-tighter text-[#FF6600]">
              5%
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-400 mt-2 bg-gray-100 rounded-full py-1 px-2.5 sm:px-3 inline-block">
              Only 4% with POS Bundle
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 md:gap-12 mt-4 sm:mt-6 text-left md:text-center">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 font-bold" />
              </div>
              <span className="font-bold text-xs sm:text-sm">No Monthly Fees</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 font-bold" />
              </div>
              <span className="font-bold text-xs sm:text-sm">Free QR Code Setup</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 font-bold" />
              </div>
              <span className="font-bold text-xs sm:text-sm">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


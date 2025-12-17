import { Check } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#FF6600] to-[#E65C00] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">
            Customers Pay Nothing Extra
          </h2>
          <p className="text-xl opacity-90 mb-8 font-medium">
            Except a small convenience fee to power the platform.
          </p>
          <div className="inline-block bg-white text-gray-900 px-10 py-8 rounded-3xl shadow-xl mb-10">
            <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
              Convenience Fee
            </span>
            <div className="text-6xl font-black tracking-tighter text-[#FF6600]">
              5%
            </div>
            <div className="text-sm font-bold text-gray-400 mt-2 bg-gray-100 rounded-full py-1 px-3 inline-block">
              Only 4% with POS Bundle
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-6 text-left md:text-center">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-4 h-4 font-bold" />
              </div>
              <span className="font-bold text-sm">No Monthly Fees</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-4 h-4 font-bold" />
              </div>
              <span className="font-bold text-sm">Free Hardware Setup</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="bg-white text-[#FF6600] p-0.5 rounded-full">
                <Check className="w-4 h-4 font-bold" />
              </div>
              <span className="font-bold text-sm">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


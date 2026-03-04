import { ArrowDown, Calculator } from "lucide-react";

export function PricingHero() {
  return (
    <section className="relative pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#ff7043]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#ff7043]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#263238] tracking-tight mb-3 sm:mb-4 lg:mb-6 leading-[1.1]">
          Transparent <span className="text-[#ff7043]">Pricing.</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-[#64748b] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Ser.vi is the free restaurant operating system that runs on devices
          you already own. No Monthly Subscription and Cancel Anytime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-14">
          <a
            className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-[#ff7043] text-white text-sm sm:text-base font-bold rounded-xl shadow-lg shadow-[#ff7043]/30 hover:bg-[#e64a19] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            href="#platform-fees"
          >
            See Platform Fees
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white text-[#263238] border border-[#e2e8f0] text-sm sm:text-base font-bold rounded-xl hover:bg-[#f8fafc] hover:border-[#ff7043]/50 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            href="#calculator"
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7043]" />
            Calculate Savings
          </a>
        </div>
      </div>
    </section>
  );
}


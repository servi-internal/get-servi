import { ArrowDown, Calculator, CheckCircle } from "lucide-react";

export function PricingHero() {
  return (
    <section className="relative pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#ff7043]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#ff7043]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#ff7043]/10 text-[#ff7043] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 lg:mb-6">
          <span className="size-1.5 sm:size-2 rounded-full bg-[#ff7043] animate-pulse"></span>
          Transparent Pricing Model
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#263238] tracking-tight mb-3 sm:mb-4 lg:mb-6 leading-[1.1]">
          Pay <span className="text-[#ff7043] underline decoration-2 sm:decoration-4 decoration-[#ff7043]/20 underline-offset-4">$0</span> in Fixed Fees.
          <br />
          Keep Your Profits.
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-[#64748b] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Stop renting your own success. Ser.vi is the free restaurant operating
          system that runs on devices you already own.
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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 opacity-80">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-[#e2e8f0]/50">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#263238]">
              No Monthly Subscription
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-[#e2e8f0]/50">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#263238]">No Setup Fees</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-[#e2e8f0]/50">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#263238]">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}


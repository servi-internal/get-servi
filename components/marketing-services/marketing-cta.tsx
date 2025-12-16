import { ShieldCheck } from "lucide-react";

export function MarketingCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-6">
          Ready to Own Your Customer Data?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Join hundreds of restaurants growing their brand independently. No
          hidden fees, cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#FF6600] hover:bg-[#FF6600]/90 text-white text-lg font-bold h-14 px-10 rounded-lg shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1">
            See Marketing Plans
          </button>
          <button className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 text-lg font-bold h-14 px-10 rounded-lg hover:border-[#FF6600] hover:text-[#FF6600] transition-colors">
            Book Strategy Call
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <ShieldCheck className="w-5 h-5 text-green-500" />
          <span>No long-term contracts. 30-day money-back guarantee.</span>
        </div>
      </div>
    </section>
  );
}


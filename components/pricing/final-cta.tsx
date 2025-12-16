import { Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#263238] to-gray-900 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"
      }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff7043]/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Ready to modernize your restaurant?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join 5,000+ venues using Ser.vi to streamline operations and boost profit
          margins.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-5 bg-[#ff7043] hover:bg-[#e64a19] text-white text-lg font-bold rounded-xl shadow-xl shadow-[#ff7043]/30 transition-all hover:scale-105">
            Create Free Account
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all">
            Book a Demo
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-400 font-medium flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-[#ff7043]" />
          Setup takes less than 15 minutes
        </p>
      </div>
    </section>
  );
}


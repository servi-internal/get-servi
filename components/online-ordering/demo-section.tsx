import { Check, Play } from "lucide-react";

export function DemoSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6600]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-zinc-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                See Ser.vi In Action
              </h2>
              <p className="text-zinc-300 text-lg">
                Watch how easy it is to set up your menu and start taking
                commission-free orders in less than 15 minutes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#FF6600] flex items-center justify-center text-zinc-900">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <span className="font-medium">
                    Simple drag-and-drop menu builder
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#FF6600] flex items-center justify-center text-zinc-900">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <span className="font-medium">Real-time order dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#FF6600] flex items-center justify-center text-zinc-900">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <span className="font-medium">
                    Automatic marketing campaigns
                  </span>
                </li>
              </ul>
              <button className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold h-14 px-8 rounded-xl shadow-lg shadow-[#FF6600]/30 transition-all">
                Get Started Now
              </button>
            </div>
            <div className="relative aspect-video bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


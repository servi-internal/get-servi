import { Play } from "lucide-react";

export function VideoDemo() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
          See It In Action
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Watch how a customer places an order in under 60 seconds.
        </p>
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer border-4 border-gray-100 dark:border-gray-700">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#FF6600]/90 rounded-full flex items-center justify-center pl-2 shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border-4 border-white/20">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white text-left">
            <div className="font-bold text-xl">Interactive Walkthrough</div>
            <div className="text-sm opacity-80 font-medium">1:45 min</div>
          </div>
        </div>
      </div>
    </section>
  );
}


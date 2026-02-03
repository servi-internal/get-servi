import { 
  CreditCard, 
  Cpu, 
  Monitor, 
  Smartphone,
  Receipt,
  Wallet,
  Tablet,
  TabletSmartphone,
  LayoutDashboard
} from "lucide-react";

export function POSFeaturesGrid() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mb-2 sm:mb-3">
            Use your <span className="text-[#FF6600]">existing devices</span> or choose our hardware.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            No forced purchases — just flexibility.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 mt-6 sm:mt-8">
            {[
              { icon: Tablet, title: "iPad", desc: "Most models supported" },
              { icon: TabletSmartphone, title: "Android Tablet", desc: "Most manufacturers" },
              { icon: Monitor, title: "PC / Laptop", desc: "Browser or Windows App" },
            ].map((device, i) => (
              <div key={i} className="group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 transition-colors hover:bg-[#FF6600]/5">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-sm text-[#FF6600] group-hover:scale-110 transition-transform border border-gray-100">
                  <device.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-center min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900">{device.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 truncate max-w-full">{device.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mb-10 sm:mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF6600] flex items-center justify-center flex-shrink-0">
                <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900">Intuitive Software</h3>
            </div>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-gray-900">Easy to Use Software</h4>
              </div>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 ml-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Access anywhere, anytime
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Minimal training required
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Runs on desktop, tablet, or mobile
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-gray-900">Popular Payment Options</h4>
              </div>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 ml-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Mobile or counter terminals
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Accept cash or credit card
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Supports chip, pin, tap & swipe
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 lg:p-6 text-white overflow-hidden shadow-xl h-full flex flex-col min-h-0">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#FF6600]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF6600]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FF6600] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">Robust Hardware</h3>
              </div>
              <div className="space-y-3 flex-1">
                <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] flex-shrink-0" />
                    <h4 className="font-bold text-white text-xs sm:text-sm">Built for Restaurants</h4>
                  </div>
                  <ul className="text-[10px] sm:text-xs text-gray-400 space-y-0.5 ml-6">
                    <li>Rugged and spill proof</li>
                    <li>Sleek aesthetics & lockable cash drawer</li>
                    <li>Reliable receipt & kitchen printers</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6600] flex-shrink-0" />
                    <h4 className="font-bold text-white text-xs sm:text-sm">Customer Facing Display</h4>
                  </div>
                  <ul className="text-[10px] sm:text-xs text-gray-400 space-y-0.5 ml-6">
                    <li>Tilt screen or dedicated second display</li>
                    <li>Easy for customers to tip</li>
                    <li>Enter phone for marketing & loyalty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Cpu,
  LayoutDashboard
} from "lucide-react";

export function POSFeaturesGrid() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">

        {/* Device compatibility — dark bento section */}
        <div className="mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl bg-gray-900 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FF6600]/15 rounded-full blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#FF6600]/10 rounded-full blur-[60px]" />

          <div className="relative z-10 text-center mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/20 text-[#FF6600] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              Works everywhere
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white mb-2">
              Use your <span className="text-[#FF6600]">existing devices</span> or choose our hardware.
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
              No forced purchases — just flexibility. Run Ser.vi on whatever you already own.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { biIcon: "bi-apple", title: "iPad", desc: "Most models supported", accent: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/30" },
              { biIcon: "bi-android2", title: "Android Tablet", desc: "Most manufacturers", accent: "from-green-500 to-green-600", shadow: "shadow-green-500/30" },
              { biIcon: "bi-windows", title: "PC / Laptop", desc: "Browser or Windows App", accent: "from-purple-500 to-purple-600", shadow: "shadow-purple-500/30" },
            ].map((device, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all hover:border-[#FF6600]/30">
                <div className={`mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${device.accent} shadow-lg ${device.shadow} mb-3 sm:mb-4 group-hover:scale-105 transition-transform`}>
                  <i className={`bi ${device.biIcon} text-2xl sm:text-3xl text-white`} />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-0.5">{device.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-400">{device.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-gray-900">
            Intuitive Software. <span className="text-[#FF6600]">Robust Hardware.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your restaurant operations.
          </p>
        </div>

        {/* Two-column category grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Intuitive Software column */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6600]/10 mb-1">
              <LayoutDashboard className="w-4 h-4 text-[#FF6600]" />
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">Intuitive Software</span>
            </div>

            {/* Easy to Use */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 border-t-4 border-t-[#FF6600] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6600] to-[#E65C00] flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                  <i className="bi bi-hand-index-thumb text-xl text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Easy to Use Software</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-1.5 flex-shrink-0" />
                      Access anywhere, anytime
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-1.5 flex-shrink-0" />
                      Minimal training required
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-1.5 flex-shrink-0" />
                      Runs on desktop, tablet, or mobile
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 border-t-4 border-t-[#FF6600] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                  <i className="bi bi-credit-card-2-front text-xl text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Popular Payment Options</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Mobile or counter terminals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Accept cash or credit card
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Supports chip, pin, tap & swipe
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Robust Hardware column */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/10 mb-1">
              <Cpu className="w-4 h-4 text-gray-800" />
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Robust Hardware</span>
            </div>

            {/* Built for Restaurants */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 border-t-4 border-t-gray-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                  <i className="bi bi-shop text-xl text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Built for Restaurants</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      Rugged and spill proof
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      Sleek aesthetics & lockable cash drawer
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      Reliable receipt & kitchen printers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Facing Display */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 border-t-4 border-t-gray-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <i className="bi bi-display text-xl text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Customer Facing Display</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Tilt screen or dedicated second display
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Easy for customers to tip
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Enter phone for marketing & loyalty
                    </li>
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

import { 
  LayoutGrid, 
  CreditCard, 
  Cpu, 
  Monitor, 
  ExternalLink,
  Phone,
  UtensilsCrossed,
  Smartphone,
  Receipt,
  Users,
  Wallet
} from "lucide-react";

export function POSFeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4">
            POS Built for <span className="text-[#FF6600]">Busy Restaurants</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Use your existing devices or choose from our recommended hardware. No forced purchases — just flexibility.
          </p>
        </div>

        {/* Features Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-16 sm:mb-20">
          
          {/* Column 1 - Flexible Service Modes */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FF6600] flex items-center justify-center">
                <LayoutGrid className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Flexible Service Modes</h3>
            </div>
            
            {/* Counter & Phone Service */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-gray-900">Counter & Phone Service</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 ml-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Standard or separate order stations with dedicated payment
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Caller ID capture, instant order history recall
                </li>
              </ul>
            </div>
            
            {/* Bar & Table Service */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-gray-900">Bar & Table Service</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 ml-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Open tabs for guests
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Manage open tables
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-2 flex-shrink-0"></span>
                  Track comped items & tip reporting
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 2 - World Class Software & Payments */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FF6600] flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Software & Payments</h3>
            </div>
            
            {/* Easy to Use Software */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-gray-900">Easy to Use Software</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 ml-1">
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
            
            {/* Popular Payment Options */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#FF6600]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h4 className="font-bold text-gray-900">Popular Payment Options</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 ml-1">
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
          
          {/* Column 3 - Robust Hardware CTA */}
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 text-white overflow-hidden shadow-2xl h-full flex flex-col">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6600]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF6600] flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white">Robust Hardware</h3>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">
                Use your existing devices or explore our recommended SUNMI hardware — professional-grade terminals trusted by restaurants worldwide.
              </p>
              
              {/* Hardware Features */}
              <div className="space-y-4 flex-1">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Receipt className="w-5 h-5 text-[#FF6600]" />
                    <h4 className="font-bold text-white text-sm">Built for Restaurants</h4>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1 ml-8">
                    <li>Rugged and spill proof</li>
                    <li>Sleek aesthetics & lockable cash drawer</li>
                    <li>Reliable receipt & kitchen printers</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Monitor className="w-5 h-5 text-[#FF6600]" />
                    <h4 className="font-bold text-white text-sm">Customer Facing Display</h4>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1 ml-8">
                    <li>Tilt screen or dedicated second display</li>
                    <li>Easy for customers to tip</li>
                    <li>Enter phone for marketing & loyalty</li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Button */}
              <a
                href="https://www.sunmi.com/en/products"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#FF6600] text-white font-bold rounded-xl hover:bg-[#E65C00] transition-colors shadow-lg hover:shadow-xl"
              >
                View SUNMI Products
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

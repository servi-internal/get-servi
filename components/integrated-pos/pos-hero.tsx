import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export function POSHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-36 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-zinc-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6600]/8 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF6600]/5 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
              We Accommodate You, <br />
              <span className="text-[#FF6600] relative">
                You Don&apos;t Accommodate Us
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF6600]/20" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0 6 Q 75 0, 150 6 T 300 6" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
              The fastest, simplest POS you&apos;ll ever use — and it costs you
              absolutely nothing. You keep running your restaurant your way.
            </p>
            
            {/* Feature list with modern styling */}
            <div className="space-y-4 mb-10">
              {[
                "Use your existing devices — iPads, Android tablets, phones, or PCs",
                "Fully customizable to match your workflow",
                "Everything faster, easier, and more profitable"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#all-order-types" 
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#E65C00] shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:shadow-[#FF6600]/30 hover:-translate-y-0.5"
              >
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Floating accent shapes */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FF6600]/10 rounded-2xl rotate-12 blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6600]/5 rounded-full"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xl font-black">$0</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Monthly Cost</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Free Forever</p>
                  </div>
                </div>
              </div>
              
              {/* Floating device indicator */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center border-2 border-white dark:border-gray-800">
                      <i className="bi bi-tablet text-[#FF6600] text-sm"></i>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center border-2 border-white dark:border-gray-800">
                      <i className="bi bi-phone text-[#FF6600] text-sm"></i>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FF6600]/10 flex items-center justify-center border-2 border-white dark:border-gray-800">
                      <i className="bi bi-laptop text-[#FF6600] text-sm"></i>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-900 dark:text-white">Any Device</span>
                </div>
              </div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-2 shadow-2xl shadow-gray-900/20 z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 via-transparent to-transparent"></div>
                <Image
                  alt="Collection of devices showing POS interface floating in 3D space"
                  className="rounded-xl sm:rounded-2xl w-full h-auto object-cover aspect-[4/3] relative"
                  src="https://assets2.ser.vi/brand/saltestco/feature_image/heroPOS.webp"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

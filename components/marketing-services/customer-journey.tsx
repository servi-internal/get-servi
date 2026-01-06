import {
  Megaphone,
  ShoppingBag,
  Mail,
  Share2,
  Smartphone,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function CustomerJourney() {
  const steps = [
    {
      icon: Megaphone,
      title: "We Create Demand",
      description: "Our system launches targeted ads across Google and Social Media to people within a 5-mile radius of your restaurant.",
      visual: (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-100 text-green-800 text-[10px] font-bold px-1 rounded">Ad</span>
            <span className="text-xs text-gray-500">www.yoursite.com</span>
          </div>
          <div className="text-blue-600 text-xs sm:text-sm font-medium">Best Burger In Town - Order Online</div>
        </div>
      ),
    },
    {
      icon: ShoppingBag,
      title: "You Get Direct Orders",
      description: "Customers land on your optimized website and order directly. You keep the data and save on commission fees.",
      visual: (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2 border-b pb-2">
            <span className="text-xs font-bold text-gray-700">New Order #2938</span>
            <span className="text-xs text-green-500 font-bold">$45.50</span>
          </div>
          <div className="flex gap-2 text-xs text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Delivery at 7:30 PM</span>
          </div>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "Branded Emails Engage",
      description: "We automatically capture their email and send a branded \"Thank You\" message with a discount for their next visit.",
      visual: (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600] font-bold text-xs">R</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-800">Restaurant Name</div>
              <div className="text-xs text-gray-500 truncate">Here's 10% off your next order!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Share2,
      title: "Social Content Re-engages",
      description: "They see your delicious food on their social feed a few days later, reminding them of that great meal.",
      visual: (
        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <div
            className="h-20 sm:h-24 bg-gray-200 rounded mb-2 w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyVUkNuSrLgLW1XCOKcNVmMIa5ggqwrFVCcDxRr_MfH68UVtpHES1ayWYD-749cqmNYf3ZtJedVfbU-5DcQ6tUcaQ5p5nFxDEp-eQP3yLdHJ15N-EOj3LUgoXDLhFUnsQZsQe7GPxsq0pQ1fwduOQ3ndiZ-5dzdk7Cza7BMpphhZz8gvPv8KX3m8yWM6mPNqEptRYZExmcOOO0ENflC1sCb44HpNloU6tLaWoJRW3kdfK-TzXwRnNPpWsuzipePoDewK1FLfTk4MU')",
            }}
          ></div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> 124 likes
          </div>
        </div>
      ),
    },
    {
      icon: Smartphone,
      title: "Customers Download App",
      description: "Loyal fans download your branded app for easy reordering and loyalty points. You own a spot on their home screen.",
      visual: (
        <div className="flex gap-2">
          <div className="size-10 sm:size-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-lg">
            <span className="text-[#FF6600] font-bold text-xs">LOGO</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-gray-800">Your App</span>
            <div className="flex text-[10px] text-yellow-500">★★★★★</div>
          </div>
        </div>
      ),
      highlight: true,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works: The Customer Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            From stranger to loyal regular in 5 automated steps.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`size-12 rounded-full flex items-center justify-center shadow-md ${
                    step.highlight 
                      ? 'bg-[#FF6600] text-white border-4 border-white ring-4 ring-[#FF6600]/20' 
                      : 'bg-white border-4 border-[#FF6600]'
                  }`}>
                    <step.icon className={`w-5 h-5 ${step.highlight ? 'text-white' : 'text-[#FF6600]'}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[120px] bg-gray-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6600] text-white text-xs font-bold">
                            {index + 1}
                          </span>
                          <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">{step.description}</p>
                      </div>
                    </div>
                    <div className="mt-3">{step.visual}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between mb-16 last:mb-0 group">
              <div className={`w-[45%] ${index % 2 === 0 ? 'text-right pr-12' : 'order-3 pl-12'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 size-16 rounded-full z-10 flex items-center justify-center shadow-md ${
                step.highlight 
                  ? 'bg-[#FF6600] text-white border-4 border-white ring-4 ring-[#FF6600]/20' 
                  : 'bg-white border-4 border-[#FF6600]'
              }`}>
                <step.icon className={`w-6 h-6 ${step.highlight ? 'text-white' : 'text-[#FF6600]'}`} />
              </div>
              <div className={`w-[45%] ${index % 2 === 0 ? 'pl-12 order-3' : 'pr-12 flex justify-end'}`}>
                <div className="max-w-xs w-full">{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


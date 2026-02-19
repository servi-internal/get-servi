import {
  Search,
  Mail,
  Share2,
  Smartphone,
  Clock,
  Heart,
  Phone,
} from "lucide-react";

export function CustomerJourney() {
  const steps = [
    {
      icon: Search,
      title: "Customer searches for your cuisine",
      description: "Google ads match and highlight your business, and SEO means you show up for their search terms in your area. They find your restaurant.",
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
      icon: Phone,
      title: "They call, order online or come in",
      description: "For customers that call or order online, you receive their customer contact information and opt-in permission with each order.",
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
      title: "They receive emails with your branding",
      description: "We send a review invite email that drives up your review score. We then send additional marketing emails to keep your brand top of mind.",
      visual: (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600] font-bold text-xs">R</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-800">Restaurant Name</div>
              <div className="text-xs text-gray-500 truncate">Leave us a review &amp; get 10% off!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Share2,
      title: "They see your content on social media",
      description: "We re-target callers and customers on social media in very cost effective campaigns so they see your brand again when the timing is right.",
      visual: (
        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-[8px] font-bold text-gray-800">YR</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">your_restaurant</div>
              <div className="text-[10px] text-gray-500">Sponsored</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> 124 likes
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="text-blue-500 font-bold">+48</span> Followers
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Smartphone,
      title: "They download your ordering app",
      description: "We offer the easiest way to reorder from you, your own branded app when the moment strikes. You will own a spot on their home screen.",
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
    <section className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            From stranger to <span className="text-[#FF6600]">loyal regular</span> in 5 steps.
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`size-10 sm:size-12 rounded-full flex items-center justify-center shadow-md ${
                    step.highlight
                      ? 'bg-[#FF6600] text-white border-4 border-white ring-4 ring-[#FF6600]/20'
                      : 'bg-white border-4 border-[#FF6600]'
                  }`}>
                    <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${step.highlight ? 'text-white' : 'text-[#FF6600]'}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[100px] sm:min-h-[120px] bg-gray-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-4 sm:pb-6 min-w-0">
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF6600] text-white text-[10px] sm:text-xs font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">{step.title}</h3>
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

        {/* Desktop Layout - Copy on left, graphics on right */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between mb-12 lg:mb-16 last:mb-0 group">
              <div className="w-[45%] text-right pr-8 lg:pr-12">
                <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-1.5 lg:mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs lg:text-sm">{step.description}</p>
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 size-12 lg:size-16 rounded-full z-10 flex items-center justify-center shadow-md ${
                step.highlight
                  ? 'bg-[#FF6600] text-white border-4 border-white ring-4 ring-[#FF6600]/20'
                  : 'bg-white border-4 border-[#FF6600]'
              }`}>
                <step.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${step.highlight ? 'text-white' : 'text-[#FF6600]'}`} />
              </div>
              <div className="w-[45%] pl-8 lg:pl-12">
                <div className="max-w-xs w-full">{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

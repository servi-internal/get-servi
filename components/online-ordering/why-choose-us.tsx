import {
  Palette,
  UtensilsCrossed,
  Database,
  Truck,
  Gift,
  Calendar,
} from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Palette,
      title: "Showcase Your Brand",
      description: "Fully customized ordering site with your colors, photos, and style.",
    },
    {
      icon: UtensilsCrossed,
      title: "Unlimited Menu Options",
      description: "Add unlimited items, modifiers, and upsells. We handle setup.",
    },
    {
      icon: Database,
      title: "Built-In Customer Database",
      description: "Auto-capture customer data to grow your marketing list effortlessly.",
    },
    {
      icon: Truck,
      title: "Delivery as a Service",
      description: "Have DoorDash and Uber deliver your online orders without paying delivery app commissions.",
    },
    {
      icon: Gift,
      title: "SEO-Optimized Website",
      description: "Improve your restaurant's visibility in Google Search with a branded site built for SEO.",
    },
    {
      icon: Calendar,
      title: "Full Featured Ordering",
      description: "Schedule recurring breakfast, lunch, dinner, weekday and weekend menus, and even offer daily specials.",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Why Restaurants Choose Our <span className="text-[#FF6600]">Online Ordering</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF6600] to-[#FF8533] mx-auto rounded-full"></div>
        </div>

        {/* Timeline-style layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6600]/20 via-[#FF6600]/40 to-[#FF6600]/20 transform -translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FF6600]/20 group">
                      <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6600] to-[#FF8533] flex items-center justify-center text-white shadow-lg shadow-[#FF6600]/25 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-left`}>
                          <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-2 group-hover:text-[#FF6600] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-[#FF6600] ring-4 ring-white shadow-lg"></div>
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#FF6600] animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


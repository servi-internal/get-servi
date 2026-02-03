import {
  Palette,
  UtensilsCrossed,
  Database,
  Truck,
  Search,
  Calendar,
} from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Palette,
      title: "Showcase Your Brand",
      description: "Fully customized ordering site with your colors, photos, and style that reflects your restaurant's unique identity.",
      color: "#FF6600",
    },
    {
      icon: UtensilsCrossed,
      title: "Unlimited Menu Options",
      description: "Add unlimited items, modifiers, and upsells. We handle the complete setup for you.",
      color: "#10B981",
    },
    {
      icon: Database,
      title: "Built-In Customer Database",
      description: "Auto-capture customer data to grow your marketing list effortlessly and drive repeat business.",
      color: "#3B82F6",
    },
    {
      icon: Truck,
      title: "Delivery as a Service",
      description: "Have DoorDash and Uber deliver your online orders without paying delivery app commissions.",
      color: "#8B5CF6",
    },
    {
      icon: Search,
      title: "SEO-Optimized Website",
      description: "Improve your restaurant's visibility in Google Search with a branded site built for SEO.",
      color: "#F59E0B",
    },
    {
      icon: Calendar,
      title: "Full Featured Ordering",
      description: "Schedule recurring breakfast, lunch, dinner, weekday and weekend menus, and even offer daily specials.",
      color: "#EF4444",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-bold tracking-tight text-[#333333] mb-2 sm:mb-3 sm:text-2xl md:text-3xl lg:text-4xl">
            Why Restaurants Choose Our <span className="text-[#FF6600]">Online Ordering</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            A commission-free platform that puts you in control of your brand, menu, and customer relationships
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 min-w-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group flex flex-col rounded-xl sm:rounded-2xl bg-white border border-gray-100 p-4 sm:p-6 lg:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-200 hover:-translate-y-0.5 min-w-0"
              >
                <div 
                  className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="mb-1.5 sm:mb-2 text-sm font-bold text-[#333333] group-hover:text-[#FF6600] transition-colors sm:text-base lg:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


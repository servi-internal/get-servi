import { FileText, Search, Users, Heart, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    icon: FileText,
    title: "Free Marketing Report",
    description:
      "Get a personalized breakdown of your online strengths and weaknesses.",
  },
  {
    icon: Search,
    title: "Google Visibility",
    description: "How to show up in more Google searches.",
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    description: "How to turn more online visitors into walk-in customers.",
  },
  {
    icon: Heart,
    title: "Create Customer Loyalty",
    description: "How to make it easy for customers to order directly from you.",
  },
  {
    icon: TrendingUp,
    title: "Get More Results",
    description: "How to market affordably and get big returns on investment.",
  },
];

export function DemoBenefits() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333333] mb-4">
        Get a free <span className="text-[#FF6600]">20-minute demo</span>
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        On this 20 minute call, we&apos;ll cover:
      </p>
      <div className="space-y-3 sm:space-y-4">
        {BENEFITS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4 sm:p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6600]/10 text-[#FF6600]">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#333333] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

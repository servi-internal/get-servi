import { Store, Receipt, PiggyBank, Star } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Store,
      value: "500+",
      label: "Restaurants Served",
    },
    {
      icon: Receipt,
      value: "50M+",
      label: "Orders Processed",
    },
    {
      icon: PiggyBank,
      value: "$10M+",
      label: "Saved in Fees",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 text-[#ff6b00]">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1f2937] mb-1">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#6b7280]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 text-[#ff6b00]">
                <stat.icon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#1f2937] dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-[#6b7280] dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


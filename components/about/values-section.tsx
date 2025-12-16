import { BookOpen, Lightbulb, Handshake } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      icon: BookOpen,
      title: "Transparency",
      description:
        "No hidden fees, no data holding. We believe restaurant owners should own their data and understand exactly what they're paying for.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We don't just copy what exists. We rethink workflows from the ground up to solve the specific pain points of modern kitchens.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We are not just a vendor; we are a partner in your success. When you grow, we grow. Our support team is an extension of your staff.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1f2937] dark:text-white mb-4">
            Core Values
          </h2>
          <p className="text-[#6b7280] dark:text-gray-400">
            The principles that guide every feature we build and every support ticket we
            answer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] dark:bg-[#18181b] p-8 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#ff6b00]/30 transition-colors group"
            >
              <div className="size-14 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center text-[#ff6b00] mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-[#6b7280] dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


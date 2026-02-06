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
    <section className="py-10 sm:py-14 lg:py-20 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2937] mb-2 sm:mb-3">
            Core Values
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#6b7280]">
            The principles that guide every feature we build and every support ticket we
            answer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-[#ff6b00]/30 transition-colors group"
            >
              <div className="size-10 sm:size-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#ff6b00] mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1f2937] mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6b7280] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


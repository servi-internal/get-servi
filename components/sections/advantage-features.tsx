import Image from "next/image";
import { ArrowRight } from "lucide-react";

const advantages = [
  {
    title: "Direct Online Ordering",
    bullets: [
      "Take orders directly online and leverage Google search traffic to grow your business.",
      "Add delivery on demand without payment delivery app commissions. Take the order and they deliver it. The customer pays the delivery fee.",
      "Branded website and mobile app allow your customers to return and order again easily.",
    ],
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/online.png",
    color: "#FF6600",
    buttonText: "Learn More",
    buttonLink: "/online-ordering",
  },
  {
    title: "Self Service Ordering",
    bullets: [
      "QR Code order and pay made for table and counter service.",
      "Easy to use for all guests, captures the order quickly without issues.",
      "Prints to your existing network or bluetooth printers.",
    ],
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/counter.png",
    color: "#10B981",
    buttonText: "Learn More",
    buttonLink: "/self-service",
  },
  {
    title: "Integrated POS",
    bullets: [
      "Works on any tablet or PC hardware.",
      "Connected to your online and self-service catalog and ordering.",
      "Supports phone, table tabs and walk up counter orders.",
    ],
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/pos-card.png",
    color: "#3B82F6",
    buttonText: "Learn More",
    buttonLink: "/integrated-pos",
  },
  {
    title: "Marketing",
    bullets: [
      "Engage phone callers with SMS link to your online ordering.",
      "Advertise on Google Maps for real time impulse demand sales.",
      "SEO website and retargeting campaigns drive traffic and repeat business.",
    ],
    image: "https://assets2.ser.vi/brand/saltestco/logo/marketing.png",
    color: "#8B5CF6",
    buttonText: "Learn More",
    buttonLink: "/marketing-services",
  },
];

export function AdvantageFeatures() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#333333] mb-2 sm:mb-3">
            The <span className="text-[#FF6600]">Ser.vi</span> Advantage
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            A complete restaurant platform designed to save money, increase sales, and expand your reach — all in one simple system
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl bg-[#FAFAFA] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <div 
                  className="w-8 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-2 group-hover:text-[#FF6600] transition-colors">
                  {item.title}
                </h3>
                <ul className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={item.buttonLink}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF6600] transition-all duration-300 hover:gap-2.5 hover:underline underline-offset-2"
                >
                  {item.buttonText}
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

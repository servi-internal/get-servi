import Image from "next/image";

const advantages = [
  {
    title: "Direct Online Ordering",
    description: "Take orders directly online and leverage google search traffic to grow your business. Add delivery on demand without payment delivery app commissions. Take the order and they deliver it. The customer pays the delivery fee. Branded website and mobile app allow your customers to return and order again easily.",
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/online.png",
    color: "#FF6600",
  },
  {
    title: "Self Service Ordering",
    description: "QR Code order and pay made for table and counter service. Easy to use for all guests, captures the order quickly without issues. Prints to your existing network or bluetooth printers.",
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/counter.png",
    color: "#10B981",
  },
  {
    title: "Integrated POS",
    description: "Works on any tablet or PC hardware. Connected to your online and self-service catalog and ordering. Supports phone, table tabs and walk up counter orders.",
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/hero-pos.jpeg",
    color: "#3B82F6",
  },
  {
    title: "Marketing",
    description: "Engage phone callers with SMS link to your online ordering. Advertise on google maps for real time impulse demand sales. SEO website and retargeting campaigns drive traffic and repeat business.",
    image: "https://assets2.ser.vi/brand/saltestco/feature_image/hero-pos.jpeg",
    color: "#8B5CF6",
  },
];

export function AdvantageFeatures() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-3 sm:mb-4">
            The <span className="text-[#FF6600]">Ser.vi</span> Advantage
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A complete restaurant platform designed to save money, increase sales, and expand your reach — all in one simple system
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl bg-[#FAFAFA] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
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
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div 
                  className="w-10 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#FF6600] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

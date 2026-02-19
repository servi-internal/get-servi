import Image from "next/image";

const VENUE_TYPES = [
  {
    title: "Casual Dining",
    image: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1771504691/table-service_kj8wcx.jpg",
    alt: "Casual dining restaurant interior",
  },
  {
    title: "Venues with Bars",
    image: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1771504154/bustling-bar_an8ckt.jpg",
    alt: "Bustling bar with bartenders serving customers",
  },
  {
    title: "Entertainment",
    image: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1771504392/entertainment_o6wqlv.jpg",
    alt: "Live entertainment venue with people at tables",
  },
  {
    title: "Coffee Shops & Counter",
    image: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1771504452/coffee_o5fzz0.jpg",
    alt: "Coffee shop counter service",
  },
  {
    title: "Outdoor Focused",
    image: "https://res.cloudinary.com/dxax8yrgb/image/upload/v1771504420/outdoor_dzmv5m.jpg",
    alt: "Outdoor patio restaurant with beach scene",
  },
];

export function PerfectSetup() {
  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-[#FF6600] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
            Never miss an order
          </span>
          <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-black text-gray-900 break-words">
            A <span className="text-[#FF6600]">Win-Win Solution</span> for Restaurants and Customers
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 min-w-0">
          {VENUE_TYPES.map((venue, index) => (
            <div
              key={index}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] cursor-default ring-2 ring-transparent hover:ring-[#FF6600] transition-all duration-300"
            >
              <Image
                src={venue.image}
                alt={venue.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {venue.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


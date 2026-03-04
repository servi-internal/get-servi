import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-[#333333]">
          What Our Clients <span className="text-[#FF6600]">Say</span> About Us
        </h2>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex flex-col rounded-xl bg-white p-5 sm:p-6 text-left shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#FF6600]/20">
            <div className="mb-2 sm:mb-3 flex text-yellow-400 transition-transform duration-300 group-hover:scale-105">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="mb-4 flex-1 text-xs sm:text-sm leading-relaxed text-gray-700 italic">
              &quot;I&apos;m busier than ever. Customers love the ordering and the app. Customers come in and say they have an online order and we just hand it to them. It&apos;s fast and easy since It&apos;s already paid.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-gray-50">
              <Image
                alt="Gaetano Gisone"
                className="h-9 w-9 rounded-full object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                src="/testimonials/testimonial_rosas.webp"
                width={36}
                height={36}
              />
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#333333] transition-colors duration-300 group-hover:text-[#FF6600]">
                  Gaetano Gisone
                </p>
                <p className="text-xs text-gray-500">Rosa&apos;s Pizzeria</p>
              </div>
            </div>
          </div>
          <div className="group flex flex-col rounded-xl bg-white p-5 sm:p-6 text-left shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#FF6600]/20">
            <div className="mb-2 sm:mb-3 flex text-yellow-400 transition-transform duration-300 group-hover:scale-105">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="mb-4 flex-1 text-xs sm:text-sm leading-relaxed text-gray-700 italic">
              &quot;Their online ordering met our separate weekend menu requirements that others could not. Our customers are happy and love the new platform, and it works with our pickup lockers.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-gray-50">
              <Image
                alt="Andrew Dimatos"
                className="h-9 w-9 rounded-full object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                src="/testimonials/testimonial_midland.webp"
                width={36}
                height={36}
              />
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#333333] transition-colors duration-300 group-hover:text-[#FF6600]">Andrew Dimatos</p>
                <p className="text-xs text-gray-500">Midland Bagels</p>
              </div>
            </div>
          </div>
          <div className="group flex flex-col rounded-xl bg-white p-5 sm:p-6 text-left shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#FF6600]/20 md:col-span-2 lg:col-span-1">
            <div className="mb-2 sm:mb-3 flex text-yellow-400 transition-transform duration-300 group-hover:scale-105">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="mb-4 flex-1 text-xs sm:text-sm leading-relaxed text-gray-700 italic">
              &quot;The menu is better looking than any menu out there. The Google ads increase my online and call in business. We take pickup and in-house delivery orders. Ser.vi provides us a customized geo fenced area for our delivery service.&quot;
            </p>
            <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-gray-50">
              <Image
                alt="Pablo Rosales"
                className="h-9 w-9 rounded-full object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                src="/testimonials/testimonial_dangelos.webp"
                width={36}
                height={36}
              />
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#333333] transition-colors duration-300 group-hover:text-[#FF6600]">
                  Pablo Rosales
                </p>
                <p className="text-xs text-gray-500">D&apos;Angelos Gun Hill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


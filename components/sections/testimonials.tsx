import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-[#333333]">
          What Our Clients <span className="text-[#FF6600]">Say</span> About Us
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-xl bg-white p-8 text-left shadow-sm border border-gray-100">
            <div className="mb-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 flex-1 text-base leading-relaxed text-gray-700 italic">
              &quot;I&apos;m busier than ever. Customers love the ordering and the app. Customers come in and say they have an online order and we just hand it to them. It&apos;s fast and easy since It&apos;s already paid.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="Gaetano Gisone"
                className="h-10 w-10 rounded-full object-cover"
                src="/testimonials/testimonial_rosas.webp"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">
                  Gaetano Gisone
                </p>
                <p className="text-xs text-gray-500">Rosa&apos;s Pizzeria</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-8 text-left shadow-sm border border-gray-100">
            <div className="mb-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 flex-1 text-base leading-relaxed text-gray-700 italic">
              &quot;Their online ordering met our separate weekend menu requirements that others could not. Our customers are happy and love the new platform, and it works with our pickup lockers.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="Andrew Dimatos"
                className="h-10 w-10 rounded-full object-cover"
                src="/testimonials/testimonial_midland.webp"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">Andrew Dimatos</p>
                <p className="text-xs text-gray-500">Midland Bagels</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-8 text-left shadow-sm border border-gray-100">
            <div className="mb-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 flex-1 text-base leading-relaxed text-gray-700 italic">
              &quot;The menu is better looking than any menu out there. The Google ads increase my online and call in business. We take pickup and in-house delivery orders. Ser.vi provides us a customized geo fenced area for our delivery service.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="Pablo Rosales"
                className="h-10 w-10 rounded-full object-cover"
                src="/testimonials/testimonial_dangelos.webp"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">
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


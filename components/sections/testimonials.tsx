import { Star, Croissant, Soup, Coffee, Drumstick, IceCream } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-[#333333]">
          Loved by Restaurant Owners
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-xl bg-white p-8 text-left shadow-sm border border-gray-100">
            <div className="mb-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 flex-1 text-base leading-relaxed text-gray-700 italic">
              &quot;Since switching to ser.vi, our margins have improved by 15%. The
              QR ordering system is a game changer for our lunch rush.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="Sarah Jenkins"
                className="h-10 w-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUxIQX4TVgPuYVzhSjBmg-9UHkEauhEL3HZYP1M4cphXb4aWZbzdUqXSA2Rbx4R88872009WhjyMsXTmovlACHQz7haVRqwkMtgf9UAadYBZHBHx44ERGhfxZ4mGSsBwmyqmESYZ_4RhZB7whOMhVN3F6NXXoMVxDyACWlmJQkxD_q-GHKKp_a52DXNuYD9OLQUoe2ujq_3r1keovafwbLEG9IlcQYk8BZwWwprn8WLk3VsyTKZpydJ1Jpgp_E3UfJrC8S7xkNG8"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">
                  Sarah Jenkins
                </p>
                <p className="text-xs text-gray-500">Owner, The Burger Joint</p>
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
              &quot;I was skeptical about the marketing automation, but it actually
              brings people back. We saw a huge bump in repeat customers last
              month.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="David Lee"
                className="h-10 w-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASVy6d-NJYCAGzel9zwF20EeNhV1SRxfQXQO3qdE0rJzubOgXeq7KAOZPBBiGx2JHgee0XQth87WdEC9PIwqwxNnmGwPCD9AxHZlLW1_niv6OZGMw9RX8ypMZyot4Alyvr7h1G85DxItbgI1EwxELiH8_4tUNyHhyjOI55lZ6DkuVjSAIoXiWWKrowEGBxBQlwE_ZuIJVdYAJMMW60Q8dSBs5UT2d69MrGFxLmQa-aRt-l54SHTBxnh70UrYCl0DINrpepnY834Xo"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">David Lee</p>
                <p className="text-xs text-gray-500">Manager, Pasta House</p>
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
              &quot;The support team is incredible. Setup was easy, and now
              everything just runs smoothly. No more tablet chaos.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <Image
                alt="Elena Rodriguez"
                className="h-10 w-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzKJsgamZyqUm0EMIV5MO9bqyxL2xIphVQPwv0Zoe-fO55wdFpHWoZxt3YixrfluQFasQXklrCxfnwV5iK_R-nCnIs9GZ8tGG4eFYGRDX7a0zblJmLNVY5u8QkS2SAkHjG-qg64tisAWXK0_ZY7h_ZiyPSY1TpiojRzmQcChnrgR-z0up8wVWqHjiOqjMPKNQavzjFopqB63LwwK_UNffJLOCF0t9rxVkONEIVBuDl1vGlkPlRxhQkDFJjlYkN5PiRdGJzPRarf2U"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#333333]">
                  Elena Rodriguez
                </p>
                <p className="text-xs text-gray-500">Owner, Tapas &amp; Co.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-200 pt-10">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            TRUSTED BY INNOVATIVE BRANDS
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0 sm:gap-16">
            <div className="flex items-center gap-2 font-bold text-xl text-[#333333]">
              <Croissant className="w-6 h-6 text-[#FF6600]" /> BakerCo
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-[#333333]">
              <Soup className="w-6 h-6 text-[#FF6600]" /> NoodleBar
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-[#333333]">
              <Coffee className="w-6 h-6 text-[#FF6600]" /> DailyBrew
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-[#333333]">
              <Drumstick className="w-6 h-6 text-[#FF6600]" /> GrillSpot
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-[#333333]">
              <IceCream className="w-6 h-6 text-[#FF6600]" /> SweetTreats
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import {
  Bell,
  Award,
  Palette,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export function MobileAppShowcase() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white border-y border-gray-200 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="relative w-[220px] sm:w-[260px] lg:w-[280px] h-[440px] sm:h-[520px] lg:h-[560px] rounded-[2.5rem] sm:rounded-[3rem] mx-auto overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dxax8yrgb/image/upload/v1771404055/dangelos-screen_ndvejy.png"
                alt="Mobile app screenshot"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-1/2 -left-4 bg-white p-3 sm:p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <i className="bi bi-star-fill text-yellow-500"></i>
                <span className="font-bold text-sm">Loyalty Points Earned!</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-[#FF6600] font-bold tracking-wide uppercase text-xs sm:text-sm">
              Branded Mobile App
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-4 sm:mb-6 leading-tight">
              Your Logo on Their Home Screen
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Compete with the big chains. Give your customers a dedicated app to
              order in seconds, track rewards, and receive push notifications for
              special offers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">iOS & Android Apps</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Native apps for both platforms.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Push Notifications</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Instant direct marketing.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Loyalty System</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Built-in rewards program.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Fully Branded</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Your colors, your images.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


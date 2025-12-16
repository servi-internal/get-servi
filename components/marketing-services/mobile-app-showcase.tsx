import {
  TouchpadOff as TouchApp,
  Bell,
  Award,
  Palette,
  ShoppingCart,
} from "lucide-react";

export function MobileAppShowcase() {
  return (
    <section className="py-20 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-white flex flex-col">
                <div className="h-32 bg-[#FF6600]/10 flex items-end p-6 pb-4">
                  <h4 className="font-bold text-xl text-gray-900">
                    Hello, Alex! 👋
                  </h4>
                </div>
                <div className="p-6 flex-1 bg-white">
                  <div className="flex gap-4 overflow-x-hidden mb-6">
                    <div className="min-w-[120px] h-32 bg-gray-100 rounded-xl"></div>
                    <div className="min-w-[120px] h-32 bg-gray-100 rounded-xl"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 bg-white border border-gray-100 shadow-sm rounded-xl p-3 flex gap-3 items-center">
                      <div className="size-14 bg-gray-100 rounded-lg"></div>
                      <div>
                        <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-20 bg-white border border-gray-100 shadow-sm rounded-xl p-3 flex gap-3 items-center">
                      <div className="size-14 bg-gray-100 rounded-lg"></div>
                      <div>
                        <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 size-14 bg-[#FF6600] rounded-full shadow-lg flex items-center justify-center text-white">
                  <ShoppingCart className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce hidden md:block">
              <div className="flex items-center gap-2">
                <i className="bi bi-star-fill text-yellow-500"></i>
                <span className="font-bold text-sm">Loyalty Points Earned!</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-[#FF6600] font-bold tracking-wide uppercase text-sm">
              Branded Mobile App
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Your Logo on Their Home Screen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Compete with the big chains. Give your customers a dedicated app to
              order in seconds, track rewards, and receive push notifications for
              special offers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <TouchApp className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">1-Click Reordering</h4>
                  <p className="text-sm text-gray-500">Fastest way to order.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Bell className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Push Notifications</h4>
                  <p className="text-sm text-gray-500">Instant direct marketing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Award className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Loyalty System</h4>
                  <p className="text-sm text-gray-500">Built-in rewards program.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#FF6600]/10 p-2 rounded-lg h-fit">
                  <Palette className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fully Branded</h4>
                  <p className="text-sm text-gray-500">Your colors, your images.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 bg-black text-white px-4 rounded flex items-center gap-2 cursor-pointer">
                <i className="bi bi-apple text-xl"></i>
                <div className="flex flex-col leading-none">
                  <span className="text-[8px]">Download on the</span>
                  <span className="text-xs font-bold">App Store</span>
                </div>
              </div>
              <div className="h-10 bg-black text-white px-4 rounded flex items-center gap-2 cursor-pointer">
                <i className="bi bi-google-play text-xl"></i>
                <div className="flex flex-col leading-none">
                  <span className="text-[8px]">GET IT ON</span>
                  <span className="text-xs font-bold">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


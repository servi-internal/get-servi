import {
  Megaphone,
  ShoppingBag,
  Mail,
  Share2,
  Smartphone,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function CustomerJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works: The Customer Journey
          </h2>
          <p className="text-gray-600">
            From stranger to loyal regular in 5 automated steps.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
            <div className="md:w-[45%] mb-6 md:mb-0 md:text-right pr-0 md:pr-12 order-2 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We Create Demand
              </h3>
              <p className="text-gray-600 text-sm">
                Our system launches targeted ads across Google and Social Media to
                people within a 5-mile radius of your restaurant.
              </p>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-16 bg-white border-4 border-[#FF6600] rounded-full z-10 flex items-center justify-center shadow-md order-1 md:order-2">
              <Megaphone className="w-6 h-6 text-[#FF6600]" />
            </div>
            <div className="md:w-[45%] pl-16 md:pl-12 order-3">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-1 rounded">
                    Ad
                  </span>
                  <span className="text-xs text-gray-500">www.yoursite.com</span>
                </div>
                <div className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Best Burger In Town - Order Online
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
            <div className="md:w-[45%] mb-6 md:mb-0 md:text-right pr-0 md:pr-12 order-2 md:order-1 flex justify-end">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-xs w-full text-left">
                <div className="flex items-center justify-between mb-2 border-b pb-2">
                  <span className="text-xs font-bold text-gray-700">
                    New Order #2938
                  </span>
                  <span className="text-xs text-green-500 font-bold">$45.50</span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Pickup at 7:30 PM</span>
                </div>
              </div>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-16 bg-white border-4 border-[#FF6600] rounded-full z-10 flex items-center justify-center shadow-md order-1 md:order-2">
              <ShoppingBag className="w-6 h-6 text-[#FF6600]" />
            </div>
            <div className="md:w-[45%] pl-16 md:pl-12 order-3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                You Get Direct Orders
              </h3>
              <p className="text-gray-600 text-sm">
                Customers land on your optimized website and order directly. You
                keep the data and save on commission fees.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
            <div className="md:w-[45%] mb-6 md:mb-0 md:text-right pr-0 md:pr-12 order-2 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Branded Emails Engage
              </h3>
              <p className="text-gray-600 text-sm">
                We automatically capture their email and send a branded &quot;Thank
                You&quot; message with a discount for their next visit.
              </p>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-16 bg-white border-4 border-[#FF6600] rounded-full z-10 flex items-center justify-center shadow-md order-1 md:order-2">
              <Mail className="w-6 h-6 text-[#FF6600]" />
            </div>
            <div className="md:w-[45%] pl-16 md:pl-12 order-3">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600] font-bold text-xs">
                    R
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-800">
                      Restaurant Name
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      Here&apos;s 10% off your next order!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
            <div className="md:w-[45%] mb-6 md:mb-0 md:text-right pr-0 md:pr-12 order-2 md:order-1 flex justify-end">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 max-w-xs w-full">
                <div
                  className="h-24 bg-gray-200 rounded mb-2 w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyVUkNuSrLgLW1XCOKcNVmMIa5ggqwrFVCcDxRr_MfH68UVtpHES1ayWYD-749cqmNYf3ZtJedVfbU-5DcQ6tUcaQ5p5nFxDEp-eQP3yLdHJ15N-EOj3LUgoXDLhFUnsQZsQe7GPxsq0pQ1fwduOQ3ndiZ-5dzdk7Cza7BMpphhZz8gvPv8KX3m8yWM6mPNqEptRYZExmcOOO0ENflC1sCb44HpNloU6tLaWoJRW3kdfK-TzXwRnNPpWsuzipePoDewK1FLfTk4MU')",
                  }}
                ></div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> 124
                  likes
                </div>
              </div>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-16 bg-white border-4 border-[#FF6600] rounded-full z-10 flex items-center justify-center shadow-md order-1 md:order-2">
              <Share2 className="w-6 h-6 text-[#FF6600]" />
            </div>
            <div className="md:w-[45%] pl-16 md:pl-12 order-3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Social Content Re-engages
              </h3>
              <p className="text-gray-600 text-sm">
                They see your delicious food on their social feed a few days
                later, reminding them of that great meal.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="md:w-[45%] mb-6 md:mb-0 md:text-right pr-0 md:pr-12 order-2 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Customers Download App
              </h3>
              <p className="text-gray-600 text-sm">
                Loyal fans download your branded app for easy reordering and
                loyalty points. You own a spot on their home screen.
              </p>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-16 bg-[#FF6600] text-white border-4 border-white ring-4 ring-[#FF6600]/20 rounded-full z-10 flex items-center justify-center shadow-md order-1 md:order-2">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="md:w-[45%] pl-16 md:pl-12 order-3">
              <div className="flex gap-2">
                <div className="size-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-lg">
                  <span className="text-[#FF6600] font-bold text-xs">LOGO</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-800">
                    Your App
                  </span>
                  <div className="flex text-[10px] text-yellow-500">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Check, Minus } from "lucide-react";

export function SocialMediaTable() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] text-center mb-8 sm:mb-10 lg:mb-12">
          Social Media Management Add-ons
        </h2>
        <div className="overflow-x-auto border border-[#e2e8f0] rounded-2xl shadow-sm">
          <table className="min-w-full divide-y divide-[#e2e8f0]">
            <thead className="bg-[#f8fafc]">
              <tr>
                <th
                  scope="col"
                  className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 text-left text-xs sm:text-sm font-bold text-[#263238]"
                >
                  Plan Name
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 text-left text-xs sm:text-sm font-bold text-[#263238]"
                >
                  Best For
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 text-center text-xs sm:text-sm font-bold text-[#263238]"
                >
                  Monthly Price
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 text-left text-xs sm:text-sm font-bold text-[#263238]"
                >
                  Content per Month
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] bg-white">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238]">
                  Basic
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  Simple presence and activity
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238] text-center">
                  <span className="text-base sm:text-lg font-black text-[#ff7043]">$99</span>/mo
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  10 posts, 10 Stories, comment responses, 1 network
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#263238]">
                  <span className="font-bold">Pro</span>
                  <br />
                  <span className="italic text-[10px] sm:text-xs text-[#64748b]">(Popular)</span>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  Adding video to boost engagement
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238] text-center">
                  <span className="text-base sm:text-lg font-black text-[#ff7043]">$199</span>/mo
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  10 posts, 10 Stories, 10 videos, responses, 2 networks
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238]">
                  Premium
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  More content + some ad boosting
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238] text-center">
                  <span className="text-base sm:text-lg font-black text-[#ff7043]">$399</span>/mo
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  15 posts, 15 Stories, 15 videos, responses, 3 networks, 1 ad boost (extra boosts +$99)
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238]">
                  Max
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  Maximum content, reach & boosts
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-[#263238] text-center">
                  <span className="text-base sm:text-lg font-black text-[#ff7043]">$799</span>/mo
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#64748b]">
                  20 posts, 20 Stories, 20 videos, responses, 4 networks, 4 ad boosts
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


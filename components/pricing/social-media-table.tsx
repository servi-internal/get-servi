import { Check, Minus } from "lucide-react";

export function SocialMediaTable() {
  return (
    <section className="py-20 bg-white border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#263238] text-center mb-12">
          Social Media Management Add-ons
        </h2>
        <div className="overflow-hidden border border-[#e2e8f0] rounded-2xl shadow-sm">
          <table className="min-w-full divide-y divide-[#e2e8f0]">
            <thead className="bg-[#f8fafc]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-sm font-bold text-[#263238]"
                >
                  Features
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-center text-sm font-bold text-[#263238]"
                >
                  Basic
                  <br />
                  <span className="text-lg font-black">$99</span>/mo
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-center text-sm font-bold text-[#ff7043] bg-[#ff7043]/5 border-x border-[#ff7043]/10 relative"
                >
                  <span className="absolute top-0 left-0 w-full h-1 bg-[#ff7043]"></span>
                  Pro
                  <br />
                  <span className="text-lg font-black">$199</span>/mo
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-center text-sm font-bold text-[#263238]"
                >
                  Premium
                  <br />
                  <span className="text-lg font-black">$399</span>/mo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] bg-white">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-[#263238]">
                  Posts per month
                </td>
                <td className="px-6 py-4 text-sm text-[#64748b] text-center">8</td>
                <td className="px-6 py-4 text-sm font-bold text-[#263238] text-center bg-[#ff7043]/5 border-x border-[#ff7043]/10">
                  12
                </td>
                <td className="px-6 py-4 text-sm text-[#64748b] text-center">20</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-[#263238]">
                  Reels / Video Content
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 text-center">
                  <Minus className="w-4 h-4 inline-block" />
                </td>
                <td className="px-6 py-4 text-sm font-bold text-[#263238] text-center bg-[#ff7043]/5 border-x border-[#ff7043]/10">
                  2 Videos
                </td>
                <td className="px-6 py-4 text-sm text-[#64748b] text-center">
                  4 Videos
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-[#263238]">
                  Ad Spend Included
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 text-center">
                  <Minus className="w-4 h-4 inline-block" />
                </td>
                <td className="px-6 py-4 text-sm font-bold text-[#263238] text-center bg-[#ff7043]/5 border-x border-[#ff7043]/10">
                  $50 Credit
                </td>
                <td className="px-6 py-4 text-sm text-[#64748b] text-center">
                  $100 Credit
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-[#263238]">
                  Community Management
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-5 h-5 text-green-500 inline-block" />
                </td>
                <td className="px-6 py-4 text-center bg-[#ff7043]/5 border-x border-[#ff7043]/10">
                  <Check className="w-5 h-5 text-[#ff7043] inline-block" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-5 h-5 text-green-500 inline-block" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm font-bold text-[#263238] hover:text-[#ff7043] transition-colors">
                    Add Basic
                  </button>
                </td>
                <td className="px-6 py-4 text-center bg-[#ff7043]/5 border-x border-[#ff7043]/10">
                  <button className="px-4 py-1.5 bg-[#ff7043] text-white text-xs font-bold rounded shadow-md hover:bg-[#e64a19] transition-colors">
                    Add Pro
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm font-bold text-[#263238] hover:text-[#ff7043] transition-colors">
                    Add Premium
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


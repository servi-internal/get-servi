import { CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

export function PartnershipSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-[#18181b] text-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-6 sm:-mt-10 relative z-10 mx-2 sm:mx-4 lg:mx-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-[#ff6b00] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">
            Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">Grow with Ser.vi</h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
            Join our network of resellers and consultants. Help restaurants in your
            region modernize while building a recurring revenue stream.
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Generous commission structure</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Dedicated support & training</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Co-marketing opportunities</span>
            </li>
          </ul>
          <button className="bg-[#ff6b00] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-white hover:text-[#ff6b00] transition-colors w-full sm:w-auto">
            Become a Partner
          </button>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ff6b00]" />
          </div>
          <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-4 sm:mb-6 italic text-gray-200">
            "Partnering with Ser.vi has been a game-changer for my consultancy. My
            clients love the simplicity of the platform, and the support team is
            unmatched."
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="size-10 sm:size-12 rounded-full bg-cover bg-center overflow-hidden flex-shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyi0ha41m-VooRnXQc5Asvm1et2sKS4QOylA3bqDU9dE1N5vfyxqXraEnv7UwkWBRrFjii6N1BcKjin34SwwuDYq5kkY_paLTskV_kPC4CFj0S-oh5CHzRfQO64s5cuqyx9TU0ibnoDOL0hoeZqWYmp7REEnWIxt00yh1wweOGIDtm34VwisI0mL2mnQEwiCJhILCpCwza9KKD16dhIxQO9PEulqseKtSdN0fNTuE6VlxDXsYFqsRRUWsGLsTumJi_Hmvhjh6DJA"
                alt="James Wilson, Restaurant Consultant"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">James Wilson</div>
              <div className="text-xs sm:text-sm text-[#ff6b00]">
                Restaurant Consultant, Chicago
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-[#18181b] text-white rounded-t-[3rem] -mt-10 relative z-10 mx-2 sm:mx-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#ff6b00] font-bold uppercase tracking-wider text-sm mb-2 block">
            Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">Grow with Ser.vi</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Join our network of resellers and consultants. Help restaurants in your
            region modernize while building a recurring revenue stream.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="font-medium">Generous commission structure</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="font-medium">Dedicated support & training</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
              <span className="font-medium">Co-marketing opportunities</span>
            </li>
          </ul>
          <button className="bg-[#ff6b00] text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#ff6b00] transition-colors">
            Become a Partner
          </button>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Quote className="w-12 h-12 text-[#ff6b00]" />
          </div>
          <p className="text-xl font-medium leading-relaxed mb-6 italic text-gray-200">
            "Partnering with Ser.vi has been a game-changer for my consultancy. My
            clients love the simplicity of the platform, and the support team is
            unmatched."
          </p>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cover bg-center overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyi0ha41m-VooRnXQc5Asvm1et2sKS4QOylA3bqDU9dE1N5vfyxqXraEnv7UwkWBRrFjii6N1BcKjin34SwwuDYq5kkY_paLTskV_kPC4CFj0S-oh5CHzRfQO64s5cuqyx9TU0ibnoDOL0hoeZqWYmp7REEnWIxt00yh1wweOGIDtm34VwisI0mL2mnQEwiCJhILCpCwza9KKD16dhIxQO9PEulqseKtSdN0fNTuE6VlxDXsYFqsRRUWsGLsTumJi_Hmvhjh6DJA"
                alt="James Wilson, Restaurant Consultant"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-white">James Wilson</div>
              <div className="text-sm text-[#ff6b00]">
                Restaurant Consultant, Chicago
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


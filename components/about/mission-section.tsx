import { Settings, TrendingUp } from "lucide-react";
import Image from "next/image";

export function MissionSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#FF6600]/5 rounded-full -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW-3bZug0qJw4ovfXmNI18_k-Vnit7_z_SqfZnfkP_SpLdl8PX3txl5hXLxDq7sqcutxWZ3HMktewNnl1TUX9-hGTzzQqN-tyUDt0VoD5kjVnEPibSo1rqXR-F7JdREZ6OVdUX-DZCKfqutbyRidWut9Vx_o1W_v3YfYjwu6luI6ZjbXUt9qcoxDyT_PcEX9wXRc9_mns-qnerLc0_PyXRIEUCuqBohjNie94zlVI9KzG3OVN2oPpbsNoJyloEAghSN2gX0Xiq_eM"
                  alt="Restaurant owner smiling and shaking hands with a happy customer"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display font-bold text-xl">Hospitality First</p>
                <p className="text-sm opacity-90">Technology serving people</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="h-px w-12 bg-[#FF6600]"></span>
              <span className="text-[#FF6600] font-bold uppercase tracking-wider text-sm">
                Our Mission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-[#1F2937] leading-tight">
              "We believe technology should serve hospitality,{" "}
              <span className="text-[#FF6600]">not replace it</span>."
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We started Ser.vi with a simple belief: independent restaurants are the
                soul of our communities. In a world dominated by chains, we provide the
                tools local owners need to survive and flourish.
              </p>
              <p>
                Too often, technology creates a barrier between the host and the guest.
                We build invisible tools that handle the chaos of the kitchen and the
                complexity of the back office, so owners can focus on what matters most:
                the food and the people.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Settings className="w-6 h-6 text-[#FF6600] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#1F2937]">Accessible Tech</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Built for everyone, from head chefs to new servers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                <TrendingUp className="w-6 h-6 text-[#FF6600] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#1F2937]">Data Driven</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Turn orders into insights that grow your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

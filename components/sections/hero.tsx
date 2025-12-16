import { TrendingUp } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF3EE]/30 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-[#333333] text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Boost Profits.
              <br />
              Get More Customers.
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl max-w-lg leading-relaxed">
              Are you a restaurant paying high credit card fees, extra staff
              costs, and high delivery app commissions? Take back control.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-[#FF6600] px-8 text-base font-bold text-white transition-all hover:bg-[#FF6600]/90 shadow-lg shadow-[#FF6600]/25 hover:shadow-xl hover:-translate-y-0.5">
                Book a Demo
              </button>
              <button className="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-base font-bold text-[#333333] transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-[#FF6600]">
                See Pricing
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-3">
                <Image
                  alt="User Avatar 1"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover ring-1 ring-gray-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_CG3ho-0GGXOFVq9qeqfpGzOwqKsc5yIsN7Ywa-lfyAR_XL7HOayaBL4MGYt8TqMgNPLauQXAYSDPshxWiawtHWMaEn6nKkwZ7qAPrSFUSC7FNte8jdbMV7ySPObJj8gBccDMGJLRZKs930Hg6036hIB9du0_3TDyyaeW7H561zefmmD-yyR9f595qV3tOtxs_rZzjkwqDgTA-KtF3uQM0B7htfBC4-U1sHpnvAM7pG50xsCybN7b8UW8J5u98nJrPh4eXEfLDlg"
                  width={36}
                  height={36}
                />
                <Image
                  alt="User Avatar 2"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover ring-1 ring-gray-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUq2PBVfZ_glbYFewmOkKcXdM3vFhm0cKdMcRDCIfdm_PMPDLguR8EHb5W3oL6z1iYPR2-CcFrJoTmZMVlIefrcUWQ5K3OzsVZMdTn6EtVarG3h2fVoXpYdO074Gmqwan8V9V1SrGhN77delpebBE5M2m4yemeqDfjkFCNs-qEP_py_TQpCDJKzNXWoPhDVXRA5lz-mUIsGrYofR-aChzs6vb_TqciLqCAgdc1YJEnaltNeILCO6eg-X2JyV5lvghdrH-9P7UVtUo"
                  width={36}
                  height={36}
                />
                <Image
                  alt="User Avatar 3"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover ring-1 ring-gray-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAesoVmxmGEc0P64_zVa0kDIqZYN1SkuPgKgFuMxdFU1hTQlCkmN1QLmC1B4lGj8EalAyjfh2YORW9YbQjP-eVpke9PnQwDIy8L-odpJDwGQQGIK0_Cy-VWrgb8dkaETjMH6in-awhv844fe6YlZm-BXdx1i8BoUZe380GOaEE-o1CHikYWLVS0blk5AxWB3YJyK3hV-pUu2fAyHdm_T2y00PaNDJSjbpjMrTQsZY8xY2vE9sYlFTS1G2sE8UrEPZ0J0RyvmQ4drWI"
                  width={36}
                  height={36}
                />
              </div>
              <span>
                Used by <strong className="text-[#333333]">500+ restaurants</strong>
              </span>
            </div>
          </div>
          <div className="relative w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-gray-200 ring-1 ring-gray-900/5">
              <Image
                alt="Restaurant POS Tablet"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGxvxJSpvf4vMyVjs9gjvT4Oq6tPhMYsxDP0eQmUXE-MmPzrkXZ5CRRy4u3hD4gc4s81SiMe9k_l2EYn75b89_pczZ4dZO0EbFTJBkxDq68r8PB5Rpf1Nm7NZadrzQn99XMlRcHddJ72ME1nu1co83pd4d_myaHHPhAr1CUN311DgKONP4naGyOElmlxh_Tm4__2_Cp5-_MdE4Q31y3wDIzId6iG9OWJughreOnxR2oQfffDC_3q3A9VKRs3sjoFnj4YE78EdMN5U"
                width={800}
                height={600}
                priority
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl border border-gray-100 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6600]/10 text-[#FF6600]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Revenue Increase
                </p>
                <p className="text-lg font-bold text-[#333333]">+30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


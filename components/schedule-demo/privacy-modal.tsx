import { X } from "lucide-react";

interface PrivacyModalProps {
  onClose: () => void;
}

export function PrivacyModal({ onClose }: PrivacyModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close privacy policy"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4">Privacy Policy</h2>
        <div className="text-sm text-gray-600 leading-relaxed space-y-4">
          <p><strong>Last Updated:</strong> December 24, 2025</p>
          <p>
            Ser.vi Worldwide LLC (&ldquo;Ser.vi,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our restaurant management platform and services.
          </p>
          <h3 className="font-bold text-[#333333]">Information We Collect</h3>
          <p>
            We collect account information (name, email, phone number, business details), payment information,
            restaurant data, order information, and automatically collected data such as device information, usage
            data, and cookies.
          </p>
          <h3 className="font-bold text-[#333333]">How We Use Your Information</h3>
          <p>
            We use information to provide and improve our services, process transactions, respond to support
            requests, send administrative updates, analyze usage patterns, prevent fraud, and send marketing
            communications with your consent.
          </p>
          <h3 className="font-bold text-[#333333]">Data Security</h3>
          <p>
            We implement encryption, regular security assessments, access controls, and employee training to
            protect your information.
          </p>
          <h3 className="font-bold text-[#333333]">Your Rights</h3>
          <p>
            You have the right to access, correct, delete, and port your data, as well as opt out of marketing
            communications.
          </p>
          <h3 className="font-bold text-[#333333]">Contact Us</h3>
          <p>
            Ser.vi Worldwide LLC<br />
            Email:{" "}
            <a href="mailto:privacy@ser.vi" className="text-[#FF6600] hover:underline">
              privacy@ser.vi
            </a>
            <br />
            Address: Zephyrhills, FL, United States
          </p>
          <p className="pt-2">
            <a href="/privacy" className="text-[#FF6600] hover:underline font-medium text-sm">
              Read Full Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

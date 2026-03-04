import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormStatusMessageProps {
  success?: string | null;
  error?: string | null;
}

export function FormStatusMessage({ success, error }: FormStatusMessageProps) {
  if (success) {
    return (
      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-green-900 text-sm">Success!</p>
          <p className="text-green-700 text-sm">{success}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-red-900 text-sm">Submission Failed</p>
          <p className="text-red-700 text-sm">{error}</p>
          <p className="text-red-600 text-xs mt-1">
            Need help? Email us at{" "}
            <a href="mailto:hello@ser.vi" className="underline hover:text-red-800">
              hello@ser.vi
            </a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}

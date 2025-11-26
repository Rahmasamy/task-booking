import { cn } from "@/lib/utils";

export const LanguageToggle = ({ language, onToggle }: { language: 'SAR' | 'EN', onToggle: () => void }) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
      <button
        onClick={onToggle}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-all",
          language === 'SAR' ? "bg-[#C4A053] text-white" : "text-gray-600 hover:text-gray-900"
        )}
      >
        SAR
      </button>
      <button
        onClick={onToggle}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-all",
          language === 'EN' ? "bg-[#C4A053] text-white" : "text-gray-600 hover:text-gray-900"
        )}
      >
        ENG
      </button>
    </div>
  );
};

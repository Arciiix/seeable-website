import { useTranslation } from "react-i18next";

const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === "en" ? "pl" : "en");
  };

  const PolishFlag = () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
      <rect width="20" height="7.5" fill="#FFFFFF" />
      <rect y="7.5" width="20" height="7.5" fill="#DC143C" />
    </svg>
  );

  const EnglishFlag = () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
      <rect width="20" height="15" fill="#012169" />
      <g>
        <path d="M0,0 L20,15 M20,0 L0,15" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1" />
      </g>
      <g>
        <path
          d="M10,0 L10,15 M0,7.5 L20,7.5"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
        <path
          d="M10,0 L10,15 M0,7.5 L20,7.5"
          stroke="#C8102E"
          strokeWidth="1.8"
        />
      </g>
    </svg>
  );

  return (
    <button
      onClick={toggleLanguage}
      className="lg:mx-3 mx-auto w-full lg:w-max justify-center lg:mt-0 mt-4 group relative flex items-center gap-3 px-4 py-2.5 bg-white border-2 border-yellow-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-400 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #fefce8 100%)",
      }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-yellow-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

      {/* Content container */}
      <div className="relative flex items-center gap-3">
        {/* Flag container with flip animation */}
        <div
          className="relative w-5 h-4 transition-transform duration-500 ease-in-out"
          style={{
            transform:
              currentLanguage === "pl" ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: currentLanguage === "en" ? 1 : 0,
              transform: "rotateY(0deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <EnglishFlag />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: currentLanguage === "pl" ? 1 : 0,
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <PolishFlag />
          </div>
        </div>

        {/* Language text with slide animation */}
        <div className="relative w-12 h-5 overflow-hidden">
          <div
            className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out"
            style={{
              transform:
                currentLanguage === "en"
                  ? "translateY(0%)"
                  : "translateY(-100%)",
            }}
          >
            <span className="h-5 flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              EN
            </span>
            <span className="h-5 flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              PL
            </span>
          </div>
        </div>

        {/* Animated arrow */}
        <div className="w-4 h-4 flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="text-yellow-600 group-hover:text-yellow-700 transition-all duration-300 group-hover:rotate-180"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Subtle inner glow */}
      <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-50/50 to-yellow-100/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ChangeLanguageButton;

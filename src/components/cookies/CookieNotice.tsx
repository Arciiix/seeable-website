import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CookieNotice = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("cookieConsent");
    if (!hasVisited) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 md:left-auto md:right-6 md:bottom-6 -translate-x-1/2 md:translate-x-0 z-50 w-[95%] md:w-80">
      <div className="bg-yellow-900/80 backdrop-blur-md text-yellow-100 rounded-2xl shadow-xl border border-yellow-700 p-4 animate-fade-in">
        <div className="text-sm mb-3">
          <span role="img" aria-label="cookie">
            🍪
          </span>{" "}
          {t("cookies.title")}
        </div>
        <button
          onClick={handleAccept}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold text-sm py-2 rounded-xl transition-all shadow"
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;

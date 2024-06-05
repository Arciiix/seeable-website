import { useState } from "react";

// Credit for design idea: Talius UI (MIT License)
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const fromPortfolio = params.get("fromPortfolio") === "true";

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/#getStarted", text: "Features" },
    { href: "/#video", text: "Video" },
    { href: "/#achievements", text: "Achievements" },
    { href: "/#aboutUs", text: "About Us" },
  ];

  return (
    <header className="font-rubik">
      {fromPortfolio ? (
        <div className="w-full bg-seeable-dark bg-opacity-30 p-3 text-seeable font-medium text-center">
          <a
            className="hover:text-yellow-100 transition-all
        "
            href="https://arturnowak.netlify.app/"
          >
            ✨ {fromPortfolio ? "Go back to" : "Go check my"} portfolio
          </a>
        </div>
      ) : null}
      <nav className="w-full absolute border-b z-10 lg:border-transparent">
        <div className="px-6 max-w-7xl mx-auto xl:px-6 md:px-12">
          <div className="relative py-3 flex flex-wrap gap-6 items-center justify-between md:py-4 md:gap-0">
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a href="/#home" className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <img
                    src="/logo/logo-hexagon-empty.png"
                    className="w-16 h-16"
                    alt="Seeable"
                  />
                </div>
                <span className="font-bold text-2xl text-white">Seeable</span>
              </a>

              <div className="relative flex items-center max-h-10 lg:hidden">
                <button
                  aria-label="menu-toggle"
                  className={`-mr-6 relative p-6 ${menuOpen ? "open" : ""}`}
                  onClick={handleToggle}
                >
                  <div className="bg-gray-300 h-0.5 w-5 m-auto rounded transition duration-300"></div>
                  <div className="bg-gray-300 h-0.5 w-5 mt-2 m-auto rounded transition duration-300"></div>
                </button>
              </div>
            </div>
            <div
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 transition duration-500 backdrop-blur-2xl lg:hidden dark:bg-gray-900/70 ${
                menuOpen ? "origin-top scale-y-100" : ""
              }`}
            ></div>
            <div
              className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 flex-col flex-wrap justify-end gap-6 bg-gray-900 p-8 opacity-0 rounded-3xl border border-gray-100 shadow-2xl transition-all duration-300 lg:visible lg:relative lg:flex lg:w-7/12 lg:flex-row lg:items-center lg:gap-0 lg:bg-transparent lg:opacity-100 lg:shadow-none lg:border-none lg:scale-100 lg:translate-y-0 ${
                menuOpen
                  ? "!visible !scale-100 !opacity-100 !lg:translate-y-0"
                  : ""
              }`}
            >
              <div className="w-full text-gray-600 lg:w-auto lg:pr-4 dark:text-gray-200 lg:pt-0">
                <ul className="flex flex-col gap-6 lg:flex-row lg:gap-0 tracking-wide lg:text-sm">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={handleToggle}
                        className="block md:px-4 transition hover:text-primary dark:hover:text-white"
                      >
                        <span>{link.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:mt-0 mt-12">
                <a
                  href="/#getStarted"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:bg-primary before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:before:scale-95 active:duration-75 sm:w-max"
                >
                  <span className="relative font-semibold text-sm text-white">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

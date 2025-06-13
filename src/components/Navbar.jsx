import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/devalbo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLangDropdownOpen(false); // Close language dropdown when toggling menu
    document.body.style.overflowY = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLangDropdownOpen(false);
    document.body.style.overflowY = "auto";
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
    closeMenu();
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  const languageLabels = {
    nl: 'NL',
    fr: 'FR',
    en: 'EN',
  };

  return (
    <nav className={`bg-gray-100 p-6 md:p-1.5 md:pl-6 md:pr-6 ${menuOpen ? "fixed inset-0 z-40 p-0" : ""}`}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold flex items-center">
          <img src={Logo} alt="Logo" className={`w-auto h-12 ${menuOpen ? "hidden" : ""}`} />
        </Link>

        {/* Burger icon for smaller screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className={`text-black focus:outline-none ${menuOpen ? "text-2xl" : "text-lg"}`}
          >
            <svg
              className={`w-6 h-6 z-50 ${menuOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation menu */}
        <ul
          className={`lg:flex lg:flex-wrap lg:items-center lg:space-x-6 mt-4 lg:mt-0 ${
            menuOpen ? "w-full inset-0 text-center flex-col-reverse justify-center align-middle bg-gray-100 pt-12" : "hidden"
          }`}
        >
          <svg
            className={`w-full mb-12 h-6 z-50 ${menuOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <li>
            <Link
              to="/"
              className="block py-4 text-black hover:text-orange-500 transition duration-300"
              onClick={closeMenu}
            >
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link
              to="/verbouwingen"
              className="block py-4 text-black hover:text-orange-500 transition duration-300"
              onClick={closeMenu}
            >
              {t('navbar.verbouwing')}
            </Link>
          </li>
          <li>
            <Link
              to="/terrassen"
              className="block py-4 text-black hover:text-orange-500 transition duration-300"
              onClick={closeMenu}
            >
              {t('navbar.terrassen')}
            </Link>
          </li>
          <li>
            <Link
              to="/offerte"
              className="block py-4 text-black hover:text-orange-500 transition duration-300"
              onClick={closeMenu}
            >
              {t('navbar.offerte')}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-4 text-black hover:text-orange-500 transition duration-300"
              onClick={closeMenu}
            >
              {t('navbar.contact')}
            </Link>
          </li>
          {/* Language Switcher */}
          <li className="relative lg:ml-auto">
            <button
              onClick={toggleLangDropdown}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-3 rounded-md transition duration-300 text-sm"
            >
              {languageLabels[i18n.language] || 'NL'}
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <button
                  onClick={() => changeLanguage('nl')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                >
                  Nederlands
                </button>
                <button
                  onClick={() => changeLanguage('fr')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                >
                  English
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
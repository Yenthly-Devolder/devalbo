import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/devalbo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body overflow when the menu is open
    document.body.style.overflowY = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    // Restore body overflow to auto when the menu is closed
    document.body.style.overflowY = "auto";
  };

  return (
    <nav
    className={`bg-gray-100 p-4 pt-2 pb-2 ${menuOpen ? "fixed inset-0 z-40 p-0" : ""}`}
    >
      <div className="container flex flex-wrap justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold flex items-center">
          <img src={Logo} alt="Logo" className={`w-auto h-12 ${menuOpen ? "hidden" : ""}`} />
        </Link>

        {/* Burger icon for smaller screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className={`text-black focus:outline-none ${
              menuOpen ? "text-2xl" : "text-lg"
            }`}
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
          className={`lg:flex lg:flex-wrap lg:space-x-6 mt-4 lg:mt-0 ${
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
            <Link to="/" className="block py-4 text-black hover:underline"  onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/verbouwingen"
              className="block py-4 text-black hover:underline"   onClick={closeMenu}
            >
              Verbouwing
            </Link>
          </li>
          <li>
            <Link
              to="/terrassen"
              className="block py-4 text-black hover:underline"   onClick={closeMenu}
            > 
              Terrassen
            </Link>
          </li>
          <li>
            <Link
              to="/offerte"
              className="block py-4 text-black hover:underline"   onClick={closeMenu}
            >
              Offerte
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-4 text-black hover:underline"   onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

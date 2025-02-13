import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full p-4 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="w-8 h-8" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8" />
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 font-bold">
          {["/home", "/projects", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              
              className={({ isActive }) =>
                `text-white hover:text-[rgb(0,61,182)] transition-all duration-300 ${
                  isActive ? "text-[rgb(0,61,182)] border-b-2 border-[rgb(0,61,182)] text-xl" : ""
                }`
              }
              exact
            >
              {path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#6cb6df] rounded-md shadow-lg text-center p-4 space-y-4 font-bold">
          {["/home", "/projects", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block text-white hover:text-[rgb(0,61,182)] transition-all duration-300 ${
                  isActive ? "text-[rgb(0,61,182)] border-b-2 border-[rgb(0,61,182)] text-xl" : ""
                }`
              }
              onClick={toggleMenu}
              exact
            >
              {path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

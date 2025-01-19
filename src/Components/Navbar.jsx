// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="w-full p-4 bg-transparent">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">
//           <Link to="/">MyPortfolio</Link>
//         </div>

//         {/* Hamburger Button */}
//         <button
//           className="text-white lg:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-8 h-8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex space-x-6">
//           <Link
//             to="/home"
//             className="text-white hover:text-[#ff00ff] transition-all duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/work"
//             className="text-white hover:text-[#ff00ff] transition-all duration-300"
//           >
//             Work
//           </Link>
//           <Link
//             to="/about"
//             className="text-white hover:text-[#ff00ff] transition-all duration-300"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-white hover:text-[#ff00ff] transition-all duration-300"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-4 bg-[#6b21a8] rounded-md shadow-lg text-center p-4 space-y-4">
//           <Link
//             to="/home"
//             className="block text-white hover:text-[#ff00ff] transition-all duration-300"
//             onClick={toggleMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="/work"
//             className="block text-white hover:text-[#ff00ff] transition-all duration-300"
//             onClick={toggleMenu}
//           >
//             Work
//           </Link>
//           <Link
//             to="/about"
//             className="block text-white hover:text-[#ff00ff] transition-all duration-300"
//             onClick={toggleMenu}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="block text-white hover:text-[#ff00ff] transition-all duration-300"
//             onClick={toggleMenu}
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          {["/home", "/projects", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-white hover:text-[#ff00ff] transition-all duration-300 ${
                  isActive ? "text-[#ff00ff] border-b-2 border-[#ff00ff]" : ""
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
        <div className="lg:hidden mt-4 bg-[#6b21a8] rounded-md shadow-lg text-center p-4 space-y-4">
          {["/home", "/projects", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block text-white hover:text-[#ff00ff] transition-all duration-300 ${
                  isActive ? "text-[#ff00ff] border-b-2 border-[#ff00ff]" : ""
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

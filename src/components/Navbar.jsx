import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-950 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 xl:px-0">
        <Link to="/">
          <div>
            <span className="text-white text-2xl">gkMovie</span>
          </div>
        </Link>
        {/* desktop-menu */}
        <div className="gap-12 hidden md:flex">
          <Link to="/" className="text-white">
            Anasayfa
          </Link>
          <Link to="/explore" className="text-white">
            Keşfet
          </Link>
          <Link to="/favorites" className="text-white">
            Favoriler
          </Link>
          <Link to="/watchlist" className="text-white">
            İzleyeceklerim
          </Link>
        </div>

        <div className="md:hidden">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
            }}
          >
            {isMobileMenuOpen ? (
              <FaRegWindowClose className="text-2xl text-slate-50" />
            ) : (
              <FaBars className="text-2xl text-slate-50" />
            )}
          </span>
        </div>
      </div>

      {/* mobile-menu */}

      <div
        className={`md:hidden px-4 gap-4 pb-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "flex flex-col" : "hidden"}`}
      >
        <Link to="/" className="text-white">
          Anasayfa
        </Link>
        <Link to="/explore" className="text-white">
          Keşfet
        </Link>
        <Link to="/favorites" className="text-white">
          Favoriler
        </Link>
        <Link to="/watchlist" className="text-white">
          İzleyeceklerim
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

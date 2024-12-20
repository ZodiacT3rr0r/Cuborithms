import { NavLink, Outlet } from "react-router-dom";
import IMAGES from "./IMAGES";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <header>
        <nav
          className={`fixed top-0 w-full transition-all duration-500 z-10 bg-black ${
            extended ? "h-56" : "h-16"
          } pl-16`}
        >
          <div className="flex justify-between items-center h-14 px-4 pt-2">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src={IMAGES.logo}
                  className="w-10 min-w-10 sm:min-w-12 sm:w-12 rounded-full"
                  alt="Logo.png"
                />
              </NavLink>
              <NavLink to="/">
                <h1 className="sm:text-5xl text-cyan-400 ml-4 text-4xl">
                  Cuborithms
                </h1>
              </NavLink>
            </div>
            <div
              onMouseEnter={() => setExtended(true)}
              onMouseLeave={() => setExtended(false)}
              className="relative mx-auto flex items-center cursor-pointer h-14"
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 text-2xl">
                Hover for more!
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setExtended(true)}
            onMouseLeave={() => setExtended(false)}
            className={`flex justify-around flex-grow transition-all duration-500 w-1/2 mx-auto ${
              extended ? `opacity-100 visible h-40` : "opacity-0 invisible h-0"
            }`}
          >
            <div className="flex flex-col">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-400 border-b">
                Other Tutorials
              </div>
              <Link to="/notations" className="text-white">Notations</Link>
              <Link to="/2x2-advanced" className="text-white">2x2 Advanced</Link>
            </div>
            <div className="w-1/2">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 w-min">
                Algorithms
              </div>
              <div className="flex border-t w-full justify-between bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-orange-500">
                <div className="flex flex-col">
                  <div>2x2:</div>
                  <Link to="/algorithms/2x2/oll" className="text-white pl-2 text-sm cursor-pointer">OLL</Link>
                  <Link to="/algorithms/2x2/pbl" className="text-white pl-2 text-sm cursor-pointer">PBL</Link>
                  <Link to="/algorithms/2x2/cll" className="text-white pl-2 text-sm cursor-pointer">CLL</Link>
                </div>
                <div className="flex flex-col">
                  <div>3x3 Advanced:</div>
                  <Link to="/algorithms/advance/oll" className="text-white pl-2 text-sm cursor-pointer">1-look OLL</Link>
                  <Link to="/algorithms/advance/pll" className="text-white pl-2 text-sm cursor-pointer">1-look PLL</Link>
                  <Link to="/algorithms/advance/coll" className="text-white pl-2 text-sm cursor-pointer">COLL</Link>
                </div>
                <div className="flex flex-col">
                  <div>3x3 Beginner:</div>
                  <Link to="/algorithms/beginner/oll" className="text-white pl-2 text-sm cursor-pointer">2-look OLL</Link>
                  <Link to="/algorithms/beginner/pll" className="text-white pl-2 text-sm cursor-pointer">2-look PLL</Link>
                </div>
              </div>
            </div>
            <div className="">
              <Link to="/about" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-20 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;

import { NavLink, Outlet } from "react-router-dom";
import IMAGES from "./IMAGES";
import { useState } from "react";

const Navbar = () => {

  const [BurgOpen, setBurgOpen] = useState(false);
  const [DropDownOA, setDropDownOA] = useState(false);
  const [DropDownAlg, setDropDownAlg] = useState(false);
  const [SideViewBeg, setSideViewBeg] = useState(false);
  const [SideViewAdv, setSideViewAdv] = useState(false);
  const [SideView2x2, setSideView2x2] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <header>
        <nav className="fixed top-0 w-full z-10 bg-black h-12 sm:h-16 pr-72">
          <div className="flex justify-between items-center h-full px-4">
            <div className="flex items-center">
              <NavLink to="/"><img src={IMAGES.logo} className="w-10 min-w-10 sm:min-w-14 sm:w-14 rounded-full" alt="Logo.png" /></NavLink>
              <NavLink to="/"><h1 className="sm:text-5xl text-cyan-400 ml-4 text-3xl">Cuborithms</h1></NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              <div className="relative" onMouseEnter={() => setDropDownOA(true)} onMouseLeave={() => setDropDownOA(false)}>
                <div className="text-green-300 cursor-default">Other Tutorials</div>
                {DropDownOA && (
                  <div className="absolute bg-gray-700 text-white">
                    <ul>
                      <NavLink to="/notations"><li className="border-b border-gray-400 p-2">Notations</li></NavLink>
                      <NavLink to="/2x2-advanced"><li className="border-b border-gray-400 p-2">Advanced 2x2</li></NavLink>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={() => setDropDownAlg(true)} onMouseLeave={() => setDropDownAlg(false)}>
                <div className="text-green-300 cursor-default px-8">Algorithms</div>
                {DropDownAlg && (
                  <div className="absolute bg-gray-700 text-white">
                    <ul>
                      <li className="relative" onMouseEnter={() => setSideViewBeg(true)} onMouseLeave={() => setSideViewBeg(false)}>
                        <div className="p-2">Beginner ▸</div>
                        {SideViewBeg && (
                          <div className="absolute left-full bg-gray-700">
                            <ul>
                              <NavLink to="/algorithms/beginner/oll"><li className="p-2">OLL</li></NavLink>
                              <NavLink to="/algorithms/beginner/pll"><li className="p-2">PLL</li></NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="relative" onMouseEnter={() => setSideViewAdv(true)} onMouseLeave={() => setSideViewAdv(false)}>
                        <div className="p-2">Advance ▸</div>
                        {SideViewAdv && (
                          <div className="absolute left-full bg-gray-700">
                            <ul>
                              <NavLink to="/algorithms/advance/oll"><li className="p-2">OLL</li></NavLink>
                              <NavLink to="/algorithms/advance/pll"><li className="p-2">PLL</li></NavLink>
                              <NavLink to="/algorithms/advance/coll"><li className="p-2">COLL</li></NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="relative" onMouseEnter={() => setSideView2x2(true)} onMouseLeave={() => setSideView2x2(false)}>
                        <div className="p-2">2x2 ▸</div>
                        {SideView2x2 && (
                          <div className="absolute left-full bg-gray-700">
                            <ul>
                              <NavLink to="/algorithms/2x2/oll"><li className="p-2">OLL</li></NavLink>
                              <NavLink to="/algorithms/2x2/pbl"><li className="p-2">PBL</li></NavLink>
                              <NavLink to="/algorithms/2x2/cll"><li className="p-2">CLL</li></NavLink>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <NavLink to="/about" className="text-green-300 hover:underline">About</NavLink>
            </div>
            <div className="md:hidden">
              <button onClick={() => setBurgOpen(!BurgOpen)}>Menu</button>
              <div className={`absolute right-0 bg-gray-900 ${BurgOpen ? 'block' : 'hidden'}`}>
                <ul>
                  <li className="p-4">Item 1</li>
                  <li className="p-4">Item 2</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-16 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;

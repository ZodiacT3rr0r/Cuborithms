import { NavLink, Outlet } from "react-router-dom";
import IMAGES from "./IMAGES";

const Navbar = () => {

  return (
    <div className="h-screen flex flex-col">
      <header>
        <nav className="fixed top-0 w-full z-10 bg-black h-12 sm:h-16 pr-72">
          <div className="flex justify-between items-center h-full px-4">
            <div className="flex items-center">
              <NavLink to="/"><img src={IMAGES.logo} className="w-10 min-w-10 sm:min-w-14 sm:w-14 rounded-full" alt="Logo.png" /></NavLink>
              <NavLink to="/"><h1 className="sm:text-5xl text-cyan-400 ml-4 text-3xl">Cuborithms</h1></NavLink>
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

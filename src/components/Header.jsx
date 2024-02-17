import { useState } from "react";
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
     <header className="bg-gray-800 text-white relative md:fixed z-10 w-screen">
      <div className="container flex flex-row md:flex-row items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">Sumit Shukla</h1>
          <p className=" md:text-sm ml-2 font-semibold text-sky-800">FullStack Developer</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-col md:flex-row">
            <li className="md:ml-4">
              <a href="#about" className="hover:text-gray-400">About</a>
            </li>
            <li className="md:ml-4">
              <a href="#portfolio" className="hover:text-gray-400">Blog</a>
            </li>
            <li className="md:ml-4">
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          {/* Hamburger icon for mobile view */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <ClearIcon className="text-6xl text-red-700"/>
            ) : (
              <MenuIcon className="text-6xl text-white"/>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <ul className="flex flex-col items-center">
            <li className="my-2">
              <a href="/PortFolio" className="text-white hover:text-gray-400">About</a>
            </li>
            <li className="my-2">
              <a href="/portfolio" className="text-white hover:text-gray-400">Portfolio</a>
            </li>
            <li className="my-2">
              <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
    </div>
  );
}

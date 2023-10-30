import React from "react";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-zinc-600 sticky top-0">
        <div className="container px-1 h-full">
          <div className="flex justify-between items-center h-full">
            <div className='flex'>
              <Logo></Logo>
              <h1 className='float-left text-white font-semibold text-lg lg:text-4xl mx-4'>Arcane Studio</h1>
            </div>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
            <li>
            <a href="#home">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#catalog">
              <p>Catalog</p>
            </a>
          </li>
          <li>
            <a href="#services">
              <p>Services</p>
            </a>
          </li>
          <li> 
            <a href="#about">
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
              </a>
          </li>
            </ul>
            <div className="hidden md:block">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
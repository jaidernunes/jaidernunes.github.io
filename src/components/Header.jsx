import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-1.5 bg-black bg-opacity-70 shadow-md text-sm " >
      <nav className="container mx-auto py-3">
        <div className="flex flex-row justify-between items-center">
          <div className=''>
            <a href="#intro" className="nav-link whitespace-nowrap p-1.5 border-2 border-white text-white  font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
              Jaider Nunes
            </a>
          </div>
          {/* Phantom link with transparent border - to fix */}
          {/* <a className="nav-link mr-10 border-b-2 border-transparent text-transparent">'</a> */}
          <div className="flex">
            <a href="#about" className="nav-link ml-4 text-white hover:text-gray-300 transition-colors duration-300 ease-in-out hover:border-b-2 border-white">
              About
            </a>
            <a href="#projects" className="nav-link ml-4 text-white hover:text-gray-300 transition-colors duration-300 ease-in-out hover:border-b-2 border-white">
              Projects
            </a>
            <a href="#skills" className="nav-link ml-4 text-white hover:text-gray-300 transition-colors duration-300 ease-in-out hover:border-b-2 border-white">
              Skills
            </a>
            <a href="#contact" className="nav-link ml-4 text-white hover:text-gray-300 transition-colors duration-300 ease-in-out hover:border-b-2 border-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

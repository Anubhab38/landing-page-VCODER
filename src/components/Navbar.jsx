import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setmobileOpen] = useState(false);
  const toggleNavbar = () => {
    setmobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="" className="w-10 h-10 mr-2" />
            <span className="text-xl tracking-tight font-extrabold">
              VCODER
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 font-bold">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-10 items-center">
            <a
              href="#"
              className="px-2 py-2 border-black-1 rounded-lg bg-gradient-to-r from-green-700 to-green-950 font-bold"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-2 py-2 border-black-1 rounded-lg bg-gradient-to-r from-red-600 to-red-950 font-bold"
            >
              Create Account
            </a>
          </div>

          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileOpen && (
            <div className="overflow-y-auto fixed top-0 left-0 z-20 bg-neutral-900 w-full h-screen p-6 sm:p-12 flex flex-col items-center lg:hidden font-bold">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href} onClick={() => setmobileOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-4 mt-6">
                <a
                  href="#"
                  onClick={() => setmobileOpen(false)}
                  className="py-2 px-3 border rounded-md text-center"
                >
                  Sign In
                </a>

                <a
                  href="#"
                  onClick={() => setmobileOpen(false)}
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-red-500 to-red-800 text-center"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

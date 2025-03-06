import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/public/imgs/logo-leblondespa.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "Inicio", href: "#" },
    { text: "Servicios", href: "#" },
    { text: "Productos", href: "#" },
    { text: "Nosotros", href: "#" },
    { text: "Contacto", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#BC9C5E]">
              <img src={logo} alt="Leblond Spa Logo" className="w-15" />
            </span>
            <h1 className="text-xl font-light tracking-widest text-[#4A5759] px-4">
              LE BLOND <span className="font-medium text-[#BC9C5E]">SPA</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="text-gray-700 hover:text-[#BC9C5E] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#BC9C5E] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="block text-gray-700 hover:text-[#BC9C5E] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

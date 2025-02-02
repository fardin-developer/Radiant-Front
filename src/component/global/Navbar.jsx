"use client";
import { useState } from "react";
import { Menu, X, Home, BookOpen, User, Mail, LogIn } from "lucide-react"; // Icons for menu items

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "about", icon: <User size={20} /> },
    { name: "Academics", href: "#academics", icon: <BookOpen size={20} /> },
    { name: "Admissions", href: "#admissions", icon: <BookOpen size={20} /> },
    { name: "Contact", href: "contact", icon: <Mail size={20} /> },
    // { name: "Login", href: "#login", icon: <LogIn size={20} /> },
  ];

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center py-8">
          {/* Logo with Floating Animation */}
          <a
            href="#"
            className="text-2xl font-bold tracking-wide neon-text hover:scale-105 transition-transform w-1/4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Radiant Senior Secondary School
            </span>
          </a>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-800 hover:text-purple-400 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";
import { useState } from "react";
import { Menu, X, Home, BookOpen, Users, Mail, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={24} /> },
    {
      name: "About",
      href: "/about",
      icon: <Users size={24} />,
      submenu: [
        { name: "About Our School", href: "#about-school" },
        { name: "Infrastructure", href: "#infrastructure" },
        { name: "Events", href: "#events" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      icon: <BookOpen size={24} />,
      submenu: [
        { name: "Courses", href: "#courses" },
        { name: "Faculty", href: "#faculty" },
        { name: "Time Table", href: "#timetable" },
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      icon: <FileText size={24} />,
      submenu: [
        { name: "Process", href: "#admission-process" },
        { name: "Fee Structure", href: "#fees" },
        { name: "Apply Online", href: "#apply" },
      ],
    },
    {
      name: "Student Life",
      href: "/student-life",
      icon: <Users size={24} />,
      submenu: [
        { name: "Activities", href: "#activities" },
        { name: "Facilities", href: "#facilities" },
        { name: "Gallery", href: "#gallery" },
      ],
    },
    { name: "Contact", href: "/contact", icon: <Mail size={24} /> },
  ];

  return (
    <nav className="shadow-lg sticky top-0 z-50 w-screen bg-gray-900 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="/" className="flex-shrink-0 mr-8">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Radiant School
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={item.href || "#"}
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>

                {item.submenu && (
                  <div 
                    className={`absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 transition-opacity duration-150 ${
                      openMenu === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.href}${subItem.href}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 bg-gray-800">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:text-white focus:outline-none"
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </div>
                  {item.submenu && (
                    <span className="ml-2 transform transition-transform duration-200">
                      {openMenu === index ? "▼" : "▶"}
                    </span>
                  )}
                </button>
                {item.submenu && openMenu === index && (
                  <div className="bg-gray-700">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.href}${subItem.href}`}
                        className="block pl-12 pr-4 py-3 text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

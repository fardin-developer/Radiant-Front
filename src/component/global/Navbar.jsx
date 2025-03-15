"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Home, BookOpen, Users, Mail, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const submenuRefs = useRef([]);

  // Check if we're on mobile for better responsiveness
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    {
      name: "About",
      href: "/about",
      icon: <Users size={20} />,
      submenu: [
        { name: "About Our School", href: "#about-school" },
        { name: "Infrastructure", href: "#infrastructure" },
        { name: "Events", href: "#events" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      icon: <BookOpen size={20} />,
      submenu: [
        { name: "Courses", href: "#courses" },
        { name: "Faculty", href: "#faculty" },
        { name: "Time Table", href: "#timetable" },
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      icon: <FileText size={20} />,
      submenu: [
        { name: "Process", href: "#admission-process" },
        { name: "Fee Structure", href: "#fees" },
        { name: "Apply Online", href: "#apply" },
      ],
    },
    {
      name: "Student Life",
      href: "/student-life",
      icon: <Users size={20} />,
      submenu: [
        { name: "Activities", href: "#activities" },
        { name: "Facilities", href: "#facilities" },
        { name: "Gallery", href: "#gallery" },
      ],
    },
    { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
  ];

  // Fixed the submenu disappearance issue by handling mouse events properly
  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  const handleMouseLeave = (index) => {
    // Only close if we're not hovering over the submenu
    if (!submenuRefs.current[index]?.contains(document.activeElement)) {
      setOpenMenu(null);
    }
  };

  return (
    <nav className="shadow-lg fixed top-0 z-50 w-full h-16 bg-opacity-30 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="/" className="flex items-center space-x-2">
            <img src="logo.png" alt="Logo" className="h-12 w-auto" />
            <span className="text-white font-bold text-xl hidden sm:block">Radiant Senior Secondary School</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <a
                  href={item.href || "#"}
                  className="flex items-center px-3 py-2 text-sm lg:text-base font-medium text-white hover:bg-white/20 rounded-md transition-colors"
                >
                  <span className="mr-1.5">{item.icon}</span>
                  <span>{item.name}</span>
                </a>

                {item.submenu && (
                  <div 
                    ref={el => submenuRefs.current[index] = el}
                    className={`absolute left-0 mt-0.5 w-52 bg-black/70 backdrop-blur-sm rounded-md shadow-lg py-1 z-50 transition-all duration-200 ${
                      openMenu === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.href}${subItem.href}`}
                        className="block px-4 py-2.5 text-sm text-white hover:bg-white/20 transition-colors"
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
            className="md:hidden p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Slide from top animation */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700 last:border-0">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/20 rounded-md transition-colors"
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {item.submenu && (
                    <span className={`transition-transform duration-200 ${openMenu === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  )}
                </button>
                {item.submenu && (
                  <div 
                    className={`bg-black/60 rounded-md overflow-hidden transition-all duration-200 ${
                      openMenu === index ? 'max-h-96 py-1' : 'max-h-0'
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={`${item.href}${subItem.href}`}
                        className="block pl-12 pr-4 py-3 text-sm text-white hover:bg-white/20 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const routes = {
  main: [
    { path: '/contact', label: 'تماس با ما' },
    { path: '/about', label: 'درباره ما' },
    { path: '/newses', label: 'رویدادها' },
    { path: '/blog', label: 'مقالات' },
    { path: '/courses', label: 'دوره های آموزشی' },
    { path: '/', label: 'خانه' }
  ]
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest("#nav-dropdown") === null) {
      setIsOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderMenuItem = (item) => {
    return (
      <li key={item.path} className="hover:text-accent transition-all duration-300 relative group">
        <Link href={item.path} className="px-5 inline-block">
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300" />
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 font-IranYekan font-normal text-sm flex items-center justify-between bg-background sm:border-b gradient-border-bottom h-16 transition-all duration-300 ${isScrolled ? "" : ""
        }`}
    >
      {/* Mobile menu button */}
      <div className="flex items-center md:hidden px-4">
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md text-accent hover:text-white focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          {!isMobileMenuOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop search and signup */}
      <div className="hidden md:flex justify-start gap-2 items-center w-[600px] h-full px-5">
        <a href="tel:02128111195" className="group flex items-center gap-3 px-4 py-2 bg-accent/5 hover:bg-accent rounded-xl transition-all duration-300">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white group-hover:bg-white group-hover:text-accent transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">تماس با ما</span>
            <span className="font-bold text-gray-700 group-hover:text-white transition-colors duration-300" dir="ltr">۰۲۱-۲۸۱۱۱۱۹۵</span>
          </div>
        </a>
      </div>

      {/* Desktop menu */}
      <ul className="text-textDark hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 justify-center items-center gap-2 py-3 px-3 mt-2">
        {routes.main.map((item) => renderMenuItem(item))}
      </ul>

      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="mx-5 h-10 md:h-10 w-auto object-contain"
          src="/Logo/Bonzhivar-Logo.png"
          alt="Logo-Bonzhivar"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
          } ${isScrolled ? "bg-accentLight" : ""}`}
      >
        <ul className="flex flex-col items-center py-4">
          {routes.main.slice().reverse().map((item) => (
            <li key={item.path} className="w-full">
              <Link
                href={item.path}
                className="block px-4 py-2 text-right"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

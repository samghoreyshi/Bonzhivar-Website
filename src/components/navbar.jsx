import React, { useState, useEffect, useRef } from "react";
import Logo from "/Logo/Bonzhivar-Logo.png";
import { Link } from "react-router-dom";
import SearchBox from "./searchbox";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
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

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
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
    setIsAccordionOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-20 font-IranYekan font-normal text-sm flex items-center justify-between bg-background sm:border-b gradient-border-bottom h-16 p-5 transition-all duration-300 ${
        isScrolled ? "" : ""
      }`}
    >
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center  rounded-md text-accent hover:text-whitefocus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          {!isMobileMenuOpen ? (
            <svg
              className="block h-8 w-8"
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
              className="block h-8 w-8"
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
      <div className="flex justify-start gap-5 items-center w-[600px] h-full">
        <SearchBox id="searchbox" className="md:hidden lg:block" />
      </div>

      <ul className="text-textDark hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2  justify-center items-center gap-2 py-3 px-3 mt-2 ">
        {/* <li>
          <div className=" invisible sm:visible text-[12px] gap-2 font-IranYekan font-normal flex items-center justify-center w-auto p-4 rounded-lg h-[3px] bg-[#e4f7f0] border border-[#aee0d2] text-accent">
            <span>.وبسایت بن‌ژیوار در حال توسعه می‌باشد</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#4F9A85"
              height={15}
            >
              <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
          </div>
        </li> */}
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to="/تماس-با-ما" className="px-5 inline-block">
            تماس با ما
          </Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to="/درباره-ما" className="px-5 inline-block">
            درباره ما
          </Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <div
            ref={dropdownRef}
            id="nav-dropdown"
            className="flex items-center justify-center gap-1 group cursor-pointer relative"
          >
            <svg
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={15}
              onClick={toggleDropdown}
              fill="#4F9A85"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
            <span onClick={toggleDropdown}>دوره های آموزشی</span>
            <div
              id="dropdown"
              className={`absolute cursor-default left-0 top-11 -translate-x-1/2 w-[850px] rounded-tr-none rounded-tl-none rounded-3xl h-64 bg-[url('/Backgrounds/Drop-grid.webp')] bg-cover bg-center overflow-hidden  shadow-lg p-4 transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 max-h-64 z-[100] visible"
                  : "opacity-0 max-h-0 invisible overflow-hidden"
              }`}
            >
              <div className="flex h-full w-fullitems-center justify-between gap-2 ">
                <div className="flex flex-col w-full h-full bg-[url('/Backgrounds/Drop-cover.webp')] bg-cover bg-center rounded-md"></div>
                <div className="flex flex-col justify-start items-end w-full h-full gap-2 ">
                  <span className="font-bold font-IranYekan text-sm text-right border-b border-accent py-2 text-black hover:text-black">
                    دوره های آموزشی کافی‌شاپ
                  </span>
                  <ul className="text-accent text-right text-xs leading-loose ">

                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره آموزشی بار سرد و گرم</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره آموزشی ویتری</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-start items-end w-full h-full gap-2 ">
                  <span className="font-bold font-IranYekan text-sm text-right border-b border-accent py-2 text-black hover:text-black">
                    دوره های آموزشی کسب و کار
                  </span>
                  <ul className="text-accent text-right text-xs leading-loose ">
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره Mini MBA دیجیتال مارکتینگ</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره اصول و فنون ارتباطات و مذاکرات تجاری</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره حقوق کسب و کار</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">مدیریت مالی برای مدیران غیر مالی</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-start items-end w-full h-full gap-2 ">
                  <span className="font-bold font-IranYekan text-sm text-right border-b border-accent py-2 text-black hover:text-black">
                    دوره های آموزشی معماری داخلی
                  </span>
                  <ul className="text-accent text-right text-xs leading-loose ">
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/info/بازسازی-ساختمان" onClick={closeDropdown}>دوره جامع بازسازی ساختمان </Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/info/مدلسازی-رندرینگ" onClick={closeDropdown}>مدلسازی و رندرینگ</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/info/نورپردازی">دوره جامع نورپردازی</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">دوره های آموزشی معماری داخلی</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه">معماری داخلی کافه و رستوران</Link>
                    </li>
                    <li className="hover:text-black transition-all duration-300">
                      <Link to="/در-حال-توسعه"> کاربرد رنگ در دکوراسیون داخلی</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to="/خانه" className="px-5 inline-block">
            خانه
          </Link>
        </li>
      </ul>
      <div>
        <img
          className="w-64 sm:w-28 mt-2 object-contain"
          src={Logo}
          alt="Logo-Bonzhivar"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } ${isScrolled ? "bg-accentLight" : ""}`}
      >
        <ul className="flex flex-col items-center py-4">
          <li className="w-full">
            <Link to="/خانه" className="block px-5 py-2 text-right" onClick={closeMobileMenu}>
              خانه
            </Link>
          </li>
          <li className="w-full">
            <button
              onClick={toggleAccordion}
              className="w-full px-5 py-2 text-center flex items-center justify-end gap-5"
            >
              <svg
                className={`ml-1 transition-transform duration-300 ${
                  isAccordionOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={15}
                fill="#4F9A85"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
              <span>دوره های آموزشی</span>
            </button>
            <div
              className={`bg-background-100 overflow-hidden transition-all duration-300 ease-in-out ${
                isAccordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="text-accent text-right px-5 py-2">
                <li className="py-1 font-IranYekan font-bold text-lg ">
                  <span onClick={closeMobileMenu}>دوره های آموزشی معماری داخلی</span>
                </li>
                <li className="py-1 font-IranYekan font-normal ">
                  <Link onClick={closeMobileMenu} to="/info/بازسازی-ساختمان">دوره جامع بازسازی ساختمان </Link>
                </li>
                <li className="py-1 font-IranYekan font-normal">
                  <Link onClick={closeMobileMenu} to="/info/مدلسازی-رندرینگ">مدلسازی و رندرینگ</Link>
                </li>
                <li className="py-1 font-IranYekan font-normal">
                  <Link onClick={closeMobileMenu} to="/info/نورپردازی">دوره جامع نورپردازی</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-full">
            <Link to="/درباره-ما" className="block px-5 py-2 text-right" onClick={closeMobileMenu}>
              درباره ما
            </Link>
          </li>
          <li className="w-full">
            <Link to="/تماس-با-ما" className="block px-5 py-2 text-right" onClick={closeMobileMenu}>
              تماس با ما
            </Link>
          </li>
          <li className="w-full px-5 py-2">
            <SearchBox />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

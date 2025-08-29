"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Mail, Phone } from "react-feather";

const menuItems = [
  { label: "Why Choose Us", href: "#" },
  { label: "Our Expert", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Heart Transplant Milestones", href: "#" },
  { label: "Doctor Talk", href: "#" },
  { label: "News and Update", href: "#" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Prevent body scroll when the dropdown is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up the effect by enabling scroll when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50">
      {/* Top bar */}
      <div className="bg-[#353a91] text-white text-sm py-2">
        <div className="max-w-screen-xl mx-auto sm:flex justify-between items-center px-4 sm:px-6">
          <a href="mailto:connect@marengoasia.com" className="flex items-center"><Mail className="w-[18px] mr-1" /> connect@marengoasia.com</a>
          <ul className="flex gap-4 items-center">
            <li>
              <a href="https://wa.me/917840027846" className="flex sm:ml-0 ml-[-5px] items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                >
                  <path
                    d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405ZM25.4386 48.985L26.2016 49.4365C29.6779 51.4918 33.7382 52.3423 37.7498 51.8555C41.7613 51.3687 45.4987 49.5719 48.3796 46.7452C51.2605 43.9185 53.123 40.2206 53.6769 36.2279C54.2308 32.2351 53.445 28.1717 51.4419 24.6709C49.4388 21.1701 46.331 18.4285 42.6027 16.8734C38.8745 15.3184 34.7352 15.0372 30.8299 16.0736C26.9247 17.11 23.4729 19.4059 21.0124 22.6035C18.5519 25.801 17.2209 29.7206 17.2269 33.7514C17.2237 37.0937 18.1503 40.3712 19.9038 43.2192L20.3823 44.0061L18.546 50.8167L25.4386 48.985Z"
                    fill="white" />
                  <path
                    d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
                    fill="white" />
                </svg> +91 7840027846
              </a>
            </li>
            <li>
              <a href="tel:+917840027846" className="flex items-center gap-1 flex items-center">
                <Phone className="w-[18px] mr-1" /> +91 7840027846
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50"
            : "relative"
        } transition-all duration-300 ease-in-out border-b border-gray-200 py-2`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 xl-w-[8%] lg:w-[12.8%] md:w-[99px] sm:w-[30%] w-[70px] ">
              <Image src={logo} alt="Logo" width={140} height={50} className="xl-w-[54%] lg:w-[62%]" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex-[0.92] justify-between lg:flex-[1] lg:flex xl:space-x-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#353a91] hover:text-blue-700 font-medium xl:text-[18px] lg:text-[17px] text-[14px]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-[#353a91] focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-40
            transition-all duration-300 transform
            ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}
          `}
        >
          <div className="px-4 pt-4 pb-4 h-[100vh] overflow-y-auto flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 text-[#353a91] hover:bg-gray-100 rounded-md font-medium text-[16px]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

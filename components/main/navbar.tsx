'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30" : "bg-transparent"}`}>
      <div className="max-w-[1300px] mx-auto h-[68px] flex items-center justify-between px-8">

        {/* Logo */}
        <Link href="#about-me" className="group flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300" />
          <span className="font-[family-name:var(--font-raleway)] font-black text-lg tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
            Harsh Gupta
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setActive(link.title)}
              className={`relative text-sm font-medium transition-colors duration-200 group ${active === link.title ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {link.title}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-200 transition-all duration-300 ${active === link.title ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200"
              title={name}
            >
              <Icon className="h-[18px] w-[18px]" />
            </Link>
          ))}
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 text-sm font-semibold px-4 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-200"
          >
            GitHub ↗
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="text-orange-400 text-sm font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub ↗
          </Link>
          <div className="flex gap-5 pt-2 border-t border-white/5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

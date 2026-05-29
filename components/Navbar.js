"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, navigation } from "../data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brown-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full bg-brown-700 text-cream flex items-center justify-center font-display text-sm font-bold tracking-wider group-hover:bg-bronze transition-colors duration-300">
            {siteConfig.logo}
          </span>
          <span className="hidden sm:block font-display text-lg font-semibold tracking-wide text-brown-900">
            {siteConfig.title}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link font-sans text-[13px] tracking-widest uppercase ${
                pathname === item.href
                  ? "text-bronze font-semibold"
                  : "text-brown-600 hover:text-brown-900"
              } transition-colors duration-200`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 bg-brown-700 text-cream font-sans text-[11px] tracking-widest uppercase rounded-full hover:bg-bronze transition-colors duration-300"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1.5px] bg-brown-800 transition-all duration-300 ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} />
          <span className={`w-5 h-[1.5px] bg-brown-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-[1.5px] bg-brown-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-cream border-t border-brown-200/50 px-6 py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-sans text-sm tracking-widest uppercase ${
                pathname === item.href ? "text-bronze font-semibold" : "text-brown-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

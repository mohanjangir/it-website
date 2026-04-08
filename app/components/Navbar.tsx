"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-black">
            TECH TONIC INOVATION
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-medium items-center">
          {["Home", "Services", "Courses", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              {item}

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Enroll Button */}
          <a
            href="tel:+916367614340"
            className="ml-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Enroll Now
          </a>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1"
          >
            <span className={`block w-6 h-[2px] bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl transition-all duration-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        {["Home", "Services", "Courses", "Contact"].map((item, i) => (
          <p
            key={item}
            className="cursor-pointer text-black transform transition duration-300 hover:scale-110"
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </p>
        ))}

        {/* Mobile Enroll Button */}
        <a
          href="tel:+916367614340"
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
}
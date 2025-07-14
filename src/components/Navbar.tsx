"use client";

import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/tjenester', label: 'Tjenester' },
    { href: '/om-meg', label: 'Om meg' },
    { href: '/artikler', label: 'Artikler' },
    { href: '/blogg', label: 'Blogg' },
    { href: '/kontakt', label: 'Kontakt' },
  ];
  
  return (
    <>
      <div className="block md:hidden w-full fixed top-0 left-0 right-0 bg-[var(--textLight)]/10 backdrop-blur-sm h-32 z-[80]"></div>
      <Link href="/" className="fixed top-8 md:top-16 left-4 md:left-16 flex gap-2 items-center z-[100]">
        <span className="bg-[var(--textLight)] rounded-xl z-[100] w-16 h-16 flex items-center justify-center text-2xl">CS</span>
        <span className="text-2xl font-light">Cecilie <br /> Skogstad</span>
      </Link>

      <button
        className="fixed top-8 md:top-16 right-4 md:right-16 z-[100]"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <IoMenuOutline
            size={64}
            className={`absolute transition-all duration-300 cursor-pointer hover:bg-[var(--textDark)]/20 rounded-full p-2 ${
              isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <IoCloseOutline
            size={64}
            className={`absolute transition-all duration-300 cursor-pointer hover:bg-[var(--textDark)]/20 rounded-full p-2 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
            }`}
          />
        </div>
      </button>

      <nav
        className={`fixed inset-y-0 right-0 w-full md:w-[30vw] bg-[var(--textDark)] text-[var(--textLight)] z-[90] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-around px-4 md:px-16">
          <ul className="space-y-8 text-6xl font-light mt-20 relative">
            {menuLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="w-fit hover:text-[#6d4f3c] text-2xl md:text-5xl transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-[var(--textLight)]">
            <p className="text-xl">Email:</p>
            <p className="text-2xl md:text-3xl mt-2">cecilieskogstad@hotmail.com</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
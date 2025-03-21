"use client";

import React, { useEffect, useRef, useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
import { initializeMenuState, openMenu, closeMenu } from '@/utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const menuLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/tjenester', label: 'Tjenester' },
    { href: '/om', label: 'Om meg' },
    { href: '/artikler', label: 'Artikler' },
    { href: '/blogg', label: 'Blogg' },
    { href: '/contact', label: 'Kontakt' },
  ];

  useEffect(() => {
    if (!menuRef.current || !linksRef.current || !footerRef.current) return;

    const elements = {
      menu: menuRef.current,
      links: linksRef.current,
      footer: footerRef.current,
    };

    initializeMenuState(elements);

    const tl = isOpen ? openMenu(elements) : closeMenu(elements);

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <>
      <Link href="/" className="fixed top-16 left-16 flex gap-2 items-center z-[90]">
        <span className="bg-[#d1c5c5] rounded-xl z-[100] w-16 h-16 flex items-center justify-center text-2xl">CS</span>
        <span className="text-2xl font-light">Cecilia <br /> Skogstad</span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 right-16 z-[100] text-4xl cursor-pointer hover:bg-[#d1c5c5] rounded-full"
        aria-label="Toggle Menu"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <IoMenuOutline
            size={48}
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <IoCloseOutline
            size={48}
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
            }`}
          />
        </div>
      </button>

      <nav
        ref={menuRef}
        className="fixed inset-0 bg-[#fceded] text-[#160b03] clip-circle z-[90]"
        style={{
          clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
        }}
      >
        <div className="h-full flex flex-col justify-between p-20">
          <ul ref={linksRef} className="space-y-8 text-6xl font-light mt-20 relative">
            {menuLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="w-fit hover:text-[#6d4f3c] transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div ref={footerRef} className="text-[#160b03] relative">
            <p className="text-xl">Email:</p>
            <p className="text-3xl mt-2">cecilie@example.bla</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
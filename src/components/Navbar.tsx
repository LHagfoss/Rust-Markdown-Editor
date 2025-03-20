"use client";

import React, { useEffect, useRef, useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import gsap from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const menuLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/tjenester', label: 'Tjenester' },
    { href: '/om', label: 'Om' },
    { href: '/artikler', label: 'Artikler' },
    { href: '/contact', label: 'Kontakt' },
  ];

  useEffect(() => {
    if (!menuRef.current || !linksRef.current || !footerRef.current) return;

    gsap.set([linksRef.current.children, footerRef.current], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({ paused: true });

    if (isOpen) {
      tl.to(menuRef.current, {
        clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)',
        duration: 1,
        ease: 'power4.inOut',
      })
      .to(linksRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.5')
      .to(footerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.2');

      tl.play();
    } else {
      tl.to([linksRef.current.children, footerRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.in',
      })
      .to(menuRef.current, {
        clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
        duration: 0.8,
        ease: 'power4.inOut',
      }, '-=0.2');

      tl.play();
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[100] p-2 text-4xl"
        aria-label="Toggle Menu"
      >
        <div className="relative w-8 h-8">
          <IoMenuOutline
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <IoCloseOutline
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
            }`}
          />
        </div>
      </button>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#fceded] text-[#171717] clip-circle z-[90]"
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
                  className="hover:text-gray-400 transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div ref={footerRef} className="text-gray-400 relative">
            <p className="text-xl">Hygge</p>
            <p className="text-3xl mt-2">cecilie@example.bla</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
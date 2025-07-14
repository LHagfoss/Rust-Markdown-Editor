"use client"

import Link from 'next/link'
import React from 'react'
import { BiSend } from 'react-icons/bi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  

  return (
    <footer className='w-full bg-[var(--textDark)] border-t border-[var(--textLight)]/70 mt-12'>
      <div className="max-w-5xl mx-auto px-4 md:px-16 py-12 text-[var(--textLight)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Lokasjon</h3>
            <div className="space-y-2 text-[var(--textLight)]/70">
              <div className="flex items-start gap-2">
                <p>
                  Kontoret ligger hos Herman<br />
                  Kristiansand, et sted.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Ta Kontakt</h3>
            <Link 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--textLight)] text-[var(--textDark)] rounded-lg hover:bg-[var(--textLight)]/90 transition-colors"
            >
              <BiSend className="text-lg" />
              Book Time
            </Link>
            <p className="">476 69 901</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-2xl text-[var(--textLight)]/70 hover:text-[var(--textLight)] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-[var(--textLight)]/70 hover:text-[var(--textLight)] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--textLight)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--textLight)]/70">
          <div>
            Copyright © {new Date().getFullYear()} Cecilie Skogstad. All rights reserved.
          </div>
          <div>
            Utviklet av{' '}
            <a href="https://lhagfoss.com" className="underline hover:text-[var(--textLight)]">Lucas</a>
            {' '}og{' '}
            <a href="https://herman-portfolio.vercel.app" className="underline hover:text-[var(--textLight)]">Herman</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
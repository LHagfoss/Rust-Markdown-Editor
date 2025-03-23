import Link from 'next/link'
import React from 'react'
import { BiSend } from 'react-icons/bi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-[#fceded] border-t border-[#171717]/10 mt-12'>
      <div className="max-w-5xl mx-auto px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Cecilie Skogstad</h3>
            <p className="text-gray-600 max-w-xs">
              Gestaltterapeut under utdanning som tilbyr samtaler og veiledning for personlig vekst og selvutvikling. Spesialisert innen stress, angst og relasjoner.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Meny</h3>
            <ul className="space-y-2">
              <li><Link href="/tjenester" className="text-gray-600 hover:text-[#171717]">Tjenester</Link></li>
              <li><Link href="/om" className="text-gray-600 hover:text-[#171717]">Om Meg</Link></li>
              <li><Link href="/artikler" className="text-gray-600 hover:text-[#171717]">Artikler</Link></li>
              <li><Link href="/blogg" className="text-gray-600 hover:text-[#171717]">Blogg</Link></li>
              <li><Link href="/kontakt" className="text-gray-600 hover:text-[#171717]">Kontakt</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Lokasjon</h3>
            <div className="space-y-2 text-gray-600">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#171717]/90 transition-colors"
            >
              <BiSend className="text-lg" />
              Book Time
            </Link>
            <p className="">476 69 901</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-2xl text-gray-600 hover:text-[#171717] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-600 hover:text-[#171717] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#171717]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div>
            Copyright © {new Date().getFullYear()} Cecilie Skogstad. All rights reserved.
          </div>
          <div>
            Utviklet av{' '}
            <a href="https://lhagfoss.com" className="underline hover:text-[#171717]">Lucas</a>
            {' '}og{' '}
            <a href="https://herman-portfolio.vercel.app" className="underline hover:text-[#171717]">Herman</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import Link from 'next/link';
import { BiSend } from 'react-icons/bi';
import { services } from '@/data/services';

const Tjenester = () => {
  return (
    <section className="w-full flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-4 md:px-16">
        <h2 className="text-4xl md:text-6xl mb-12">Tjenester & Priser</h2>
        
        <div className="space-y-6 mb-12">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center py-4 border-b border-[#171717]/10 hover:bg-[#fceded] transition-colors px-4 rounded-lg"
            >
              <span className="text-xl">{item.service}</span>
              <span className="text-xl font-medium">
                {item.price} <span className="text-gray-600">{item.details}</span>
              </span>
            </div>
          ))}
        </div>

        <Link 
          href="/tjenester" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#171717]/90 transition-colors"
        >
          <BiSend className="text-lg" />
          Se alle tjenester
        </Link>
      </div>
    </section>
  );
};

export default Tjenester;
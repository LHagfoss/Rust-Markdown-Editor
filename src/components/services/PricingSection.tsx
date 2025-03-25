import React from 'react';
import { services } from '@/data/services';

export const PricingSection = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl md:text-6xl mb-12">Tjenester & Priser</h1>
      
      <div className="space-y-4">
        <div className="flex flex-col gap-6">
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
      </div>

      <div className="space-y-4 text-gray-600">
        <p>Avbestilling av timeavtale må skje senest 24 timer før, ellers belastes timen fullt.</p>
        <p>NB! Jeg gjør oppmerksomme på at priser kan justeres årlig. Eksisterende klienter vil bli varslet i forkant.</p>
        <p>Dersom du bor i utlandet eller foretrekker terapi per videosamtale, tilbyr jeg også terapi online.</p>
        <p>Betaling skjer i etterkant av hver time via vipps.</p>
      </div>
    </section>
  );
};
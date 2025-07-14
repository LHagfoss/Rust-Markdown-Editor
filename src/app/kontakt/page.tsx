import React from 'react';
import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt Cecilie Skogstad - Gestaltterapeut",
  description: "Kontaktinformasjon for Cecilie Skogstad. Send en melding, ring, eller finn veibeskrivelse for å bestille time eller stille spørsmål.",
};

export default function Kontakt() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Kontakt Meg</h1>
        <p className="text-lg leading-relaxed mb-8">
          Har du spørsmål, eller ønsker du å bestille en time? Ta gjerne kontakt med meg.
        </p>
        <div className="space-y-4 text-left inline-block">
          <div className="flex items-center gap-4">
            <BiPhone className="text-2xl text-[var(--textDark)]" />
            <a href="tel:+4712345678" className="text-lg hover:underline">+47 123 45 678</a>
          </div>
          <div className="flex items-center gap-4">
            <BiEnvelope className="text-2xl text-[var(--textDark)]" />
            <a href="mailto:cecilie.skogstad@example.com" className="text-lg hover:underline">cecilie.skogstad@example.com</a>
          </div>
          <div className="flex items-center gap-4">
            <BiMap className="text-2xl text-[var(--textDark)]" />
            <span className="text-lg">Min Adresse, 1234 By</span>
          </div>
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikler - Cecilie Skogstad",
  description: "Les artikler og innlegg fra Cecilie Skogstad om gestaltterapi, personlig utvikling og velvære.",
};

export default function Artikler() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Artikler</h1>
        <p className="text-lg leading-relaxed">
          Her vil du finne artikler og innsikt om ulike temaer relatert til gestaltterapi og personlig vekst.
          Kom snart tilbake for mer innhold!
        </p>
      </div>
    </main>
  );
}
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg - Cecilie Skogstad",
  description: "Følg Cecilie Skogstad sin blogg for tanker, refleksjoner og oppdateringer innen gestaltterapi og mental helse.",
};

export default function Blogg() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Blogg</h1>
        <p className="text-lg leading-relaxed">
          Velkommen til bloggen! Her deler jeg tanker og innsikt om gestaltterapi, selvutvikling og hverdagsrefleksjoner.
          Nye innlegg kommer snart!
        </p>
      </div>
    </main>
  );
}
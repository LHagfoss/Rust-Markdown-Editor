import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Cecilie Skogstad - Gestaltterapeut",
  description: "Lær mer om Cecilie Skogstad, en gestaltterapeut under utdanning. Min tilnærming og filosofi for å hjelpe deg med personlig vekst.",
};

export default function OmMeg() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Om Meg</h1>
        <p className="text-lg leading-relaxed mb-4">
          Velkommen til min side! Jeg er Cecilie Skogstad, en gestaltterapeut under utdanning ved NGI (Norsk Gestaltinstitutt).
          Min lidenskap er å hjelpe mennesker med å finne klarhet, vekst og indre ro i en stadig skiftende verden.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Jeg tilbyr et trygt og støttende rom hvor du kan utforske dine tanker, følelser og utfordringer.
          Gjennom gestaltterapi fokuserer vi på &quot;her og nå&quot;-opplevelsen, og hvordan du kan bli mer bevisst på dine egne mønstre og ressurser.
        </p>
        <p className="text-lg leading-relaxed">
          Mitt mål er å veilede deg mot større selvforståelse og personlig utvikling, slik at du kan leve et mer autentisk og meningsfylt liv.
          Ta gjerne kontakt for en uforpliktende samtale.
        </p>
      </div>
    </main>
  );
}
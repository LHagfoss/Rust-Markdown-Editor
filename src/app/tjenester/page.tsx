import { PricingSection } from '@/components/services/PricingSection';
import { PrivacySection } from '@/components/services/PrivacySection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester og Priser - Cecilie Skogstad",
  description: "Oversikt over gestaltterapitjenester og priser tilbudt av Cecilie Skogstad. Finn informasjon om individualterapi, parterapi og mer.",
};

const ServicePage = () => {
  return (
    <main className="w-full min-h-screen py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-16 space-y-24">
        <PricingSection />
        <PrivacySection />
      </div>
    </main>
  );
};

export default ServicePage;
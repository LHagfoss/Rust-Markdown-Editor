import { PricingSection } from '@/components/services/PricingSection';
import { PrivacySection } from '@/components/services/PrivacySection';

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
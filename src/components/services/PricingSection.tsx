import { services } from '@/data/services';

interface Service {
  service: string;
  price: string;
  details: string;
}

export const PricingSection = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl md:text-6xl mb-12">Tjenester & Priser</h1>
      
      <div className="space-y-4">
        <div className="flex flex-col gap-6">
          {services.map((item: Service, index: number) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-[#171717]/10">
              <span className="text-xl">{item.service}</span>
              <span className="text-xl font-medium">{item.price} <span className="text-gray-600">{item.details}</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
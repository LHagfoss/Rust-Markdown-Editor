import Link from 'next/link';
import { BiSend } from 'react-icons/bi';
import { services } from '@/data/services';

interface Service {
  service: string;
  price: string;
  details: string;
}

const Tjenester = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16">
        <h2 className="text-4xl md:text-6xl mb-12">Tjenester & Priser</h2>
        
        <div className="space-y-6 mb-12">
          {services.map((item: Service, index: number) => (
            <div 
              key={index}
              className="group flex justify-between items-center py-4 border-b border-[var(--textDark)]/10 hover:bg-[var(--textDark)]/10 transition-colors px-4 rounded-lg"
            >
              <span className="text-xl">{item.service}</span>
              <div className="flex items-center gap-4">
                <span className="text-xl font-medium">
                  {item.price} <span className="text-gray-600">{item.details}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/tjenester" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--textDark)] text-white rounded-lg hover:bg-[var(--textDark)]/90 transition-colors"
        >
          <BiSend className="text-lg" />
          Se alle tjenester
        </Link>
      </div>
    </section>
  );
};

export default Tjenester;
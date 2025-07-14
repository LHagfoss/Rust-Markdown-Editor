import React from 'react';

interface InfoBlockProps {
  title: string;
  items: string[];
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, items }) => (
  <div className='mb-4'>
    <h3 className="text-2xl text-[var(--textDark)] mb-2">{title}</h3>
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

InfoBlock.displayName = 'PrivacySection.InfoBlock';

export const PrivacySection = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl md:text-4xl mb-8">Personvern</h2>
      
      <div className="prose prose-lg max-w-none text-[var(--textDark)]/70">
        <p>
          Jeg oppfordrer deg til å lese mer om taushetsplikt under. Jeg sørger for at hensynet til anonymitet ivaretas, 
          har taushetsplikt og følger EUs forordning for personvern (GDPR).
        </p>
        
        <p>Jeg er til enhver tid ansvarlige for lagring og behandling av personopplysninger i virksomheten.</p>

        <PrivacySection.InfoBlock 
          title="Behandlingsaktiviteter"
          items={[
            'Registrere nye klienter.',
            'Føre journal i forbindelse med konsultasjoner.',
            'Fakturering/betaling.',
          ]}
        />

        <PrivacySection.InfoBlock 
          title="Personopplysninger som behandles"
          items={[
            'Alminnelige personopplysninger som navn og fødselsdato.',
            'Kontaktdetaljer som e-post, telefonnummer.',
            'Timelister og journalføring.',
          ]}
        />

        <PrivacySection.InfoBlock 
          title="Behandlingsgrunnlag"
          items={[
            'Å overholde avtalen med klienter.',
            'Eksplisitt samtykke.',
            'Å overholde rettslige forpliktelser.',
            'Å ivareta virksomhetens berettigede interesser.',
          ]}
        />

        <PrivacySection.InfoBlock 
          title="Dine rettigheter"
          items={[
            'Trekke tilbake samtykket til behandlingsaktiviteter.',
            'Få innsyn i personopplysninger og kopi av journal.',
            'Endre personopplysninger.',
            'Be om sletting av personopplysninger.',
            'Avslutte avtaleforholdet.',
          ]}
        />

        <div className="space-y-6 mt-8">
          <h3 className="text-2xl text-[#171717]">Databehandlere</h3>
          <ul className="list-disc pl-6">
            <li>easypractice.net</li>
            <li>squarespace.com (nettsiden)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

PrivacySection.InfoBlock = InfoBlock;
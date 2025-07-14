'use client';

interface SectionProps {
  title: string;
  content: string;
}

export const DynamicSection = ({ title, content }: SectionProps) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24">
      <div className="max-w-5xl w-full px-16">
        <h2 className="text-4xl md:text-6xl mb-12">{title}</h2>
        <div className="prose prose-lg max-w-none text-gray-800">
          {content}
        </div>
      </div>
    </section>
  );
};
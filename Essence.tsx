
import React from 'react';

const Essence: React.FC = () => {
  const points = [
    "Real-life chemistry.",
    "No pressure.",
    "Curated environment.",
    "Natural flow.",
    "Respectful, calm hosting."
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl mb-8">The essence</h2>
          <div className="text-lg leading-relaxed text-brand-black mb-8 space-y-4">
            <p>
              We move away from the frantic pace of dating apps.
            </p>
            <p>
              The evening is designed to flow naturally, with space to be yourself.
            </p>
            <p>
              There are a few optional points of engagement - never forced, but designed for a natural connection to occur.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-stone" />
              <span className="text-xl font-playfair">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essence;

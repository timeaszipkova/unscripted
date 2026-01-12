
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Arrive and settle in.",
      desc: "Warm greetings. A quiet, inviting space. Take a moment to adjust to the atmosphere."
    },
    {
      title: "Talk to who you want.",
      desc: "Move through the room as you feel. Take breaks anytime. No social obligations."
    },
    {
      title: "Let the evening unfold.",
      desc: "Connections happen when they are ready. No forced outcomes or expected endings."
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl mb-12">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <div key={i} className="space-y-6">
            <span className="text-brand-stone font-playfair italic text-3xl">0{i+1}</span>
            <h3 className="text-2xl">{step.title}</h3>
            <p className="text-brand-black/70 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

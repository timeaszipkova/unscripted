
import React from 'react';

const Respect: React.FC = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=80&w=1200" 
              alt="Calm sky with light clouds"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-charcoal/5" />
          </div>
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <h2 className="text-4xl">Respect & comfort</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl">Calm hosting</h3>
              <p className="text-brand-black/70">Our team is present to facilitate, not to entertain. We are here to ensure you feel at ease.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl">Respectful environment</h3>
              <p className="text-brand-black/70">We curate a guest list that values consideration, boundaries, and genuine listening.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl">Clear boundaries</h3>
              <p className="text-brand-black/70">A thoughtful code of conduct ensures everyone shares the same expectation of safety.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Respect;
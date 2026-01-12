
import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 scroll-mt-24">
      <h2 className="text-4xl mb-12">Event Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-stone font-source font-bold">When</h3>
            <p className="text-2xl font-playfair">6. 2. 2026</p>
            <p className="text-lg">18:30 – 21:00</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-stone font-source font-bold">Who</h3>
            <p className="text-2xl font-playfair">Age range 23–35</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-stone font-source font-bold">Where</h3>
            <p className="text-2xl font-playfair">Vlkova 36, Praha 3</p>
            <p className="text-lg">Žižkov, Prague</p>
            <a 
              href="https://maps.google.com/?q=Vlkova+36,+Praha+3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs uppercase tracking-widest text-brand-blue border-b border-brand-blue pb-1"
            >
              Open in maps
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-stone font-source font-bold">Pricing</h3>
            <div className="space-y-2">
              <p className="text-xl">Men: 790 Kč</p>
              <p className="text-xl">Women: 290 Kč</p>
            </div>
            <p className="text-sm text-brand-charcoal/60 mt-4">Limited seats available.</p>
          </div>
        </div>

        <div className="lg:col-span-1 h-64 md:h-full min-h-[300px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1017062402283!2d14.446864476901961!3d50.08440521364539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9496660144d1%3A0xe53239e31d960f58!2sVlkova%2036%2C%20130%2000%20Praha%203-%C5%BDi%C5%BEkov!5e0!3m2!1sen!2scz!4v1709123456789!5m2!1sen!2scz" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

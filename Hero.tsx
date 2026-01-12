import React from 'react';

const Hero: React.FC = () => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSc_i4aVVkm-JAZLyED23fc2XqHIaLu06k_HzCxy7AD4lN4CLg/viewform?usp=header";
  const instagramLink = "https://www.instagram.com/unscriptedcz/";

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-8xl leading-none">
            [Un:]Scripted
          </h1>
          <p className="text-2xl md:text-3xl font-playfair-italic text-brand-charcoal">
            Natural connection. No script.
          </p>
          <p className="text-lg md:text-xl text-brand-black max-w-md leading-relaxed">
            A calm, curated in-person social experience for those seeking something real beyond the digital noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-charcoal text-brand-bg px-8 py-4 text-center text-sm uppercase tracking-widest hover:bg-brand-logo transition-all duration-300"
            >
              Reserve a seat
            </a>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-stone px-8 py-4 text-center text-sm uppercase tracking-widest hover:bg-brand-stone/10 transition-all duration-300"
            >
              More about us
            </a>
          </div>
        </div>
        <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm group w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
          <img 
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1200&auto=format&fit=crop" 
            alt="Natural connection in a calm setting"
            className="object-cover w-full h-full grayscale transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-charcoal/5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
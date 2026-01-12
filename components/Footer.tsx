
import React from 'react';

const Footer: React.FC = () => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSc_i4aVVkm-JAZLyED23fc2XqHIaLu06k_HzCxy7AD4lN4CLg/viewform?usp=header";

  return (
    <footer id="reserve" className="bg-brand-charcoal text-brand-bg pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Reserve Section - Height significantly reduced, horizontal width restored to full container */}
        <div className="text-center space-y-8 pb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl text-brand-bg font-playfair leading-tight">Reserve a seat</h2>
            <p className="text-lg md:text-xl font-playfair-italic text-brand-stone">
              No pressure. Just space to meet naturally.
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <a 
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-bg text-brand-charcoal py-5 px-10 text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-stone transition-colors duration-300"
            >
              Apply to join
            </a>
            <p className="mt-4 text-[10px] text-brand-stone uppercase tracking-widest opacity-60">
              Applications reviewed for balanced guest mix.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-brand-bg/10">
          <div>
            <div className="text-brand-stone text-[10px] uppercase tracking-widest mb-4 opacity-60">Contact</div>
            <a href="mailto:unscriptedcz@gmail.com" className="text-base hover:text-brand-stone transition-colors font-playfair">unscriptedcz@gmail.com</a>
          </div>
          <div>
            <div className="text-brand-stone text-[10px] uppercase tracking-widest mb-4 opacity-60">Follow</div>
            <a 
              href="https://www.instagram.com/unscriptedcz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base hover:text-brand-stone transition-colors block font-playfair"
            >
              Instagram
            </a>
          </div>
          <div>
            <div className="text-brand-stone text-[10px] uppercase tracking-widest mb-4 opacity-60">Location</div>
            <p className="text-base font-playfair">Prague, Czech Republic</p>
          </div>
        </div>

        <div className="pt-12 text-[9px] text-brand-stone uppercase tracking-[0.4em] opacity-30 text-center md:text-left">
          © 2026 [Un:]Scripted. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

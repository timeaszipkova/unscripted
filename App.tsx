
import React from 'react';
import Hero from './components/Hero';
import Essence from './components/Essence';
import EventDetails from './components/EventDetails';
import HowItWorks from './components/HowItWorks';
import Activities from './components/Activities';
import Respect from './components/Respect';
import Footer from './components/Footer';

const App: React.FC = () => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSc_i4aVVkm-JAZLyED23fc2XqHIaLu06k_HzCxy7AD4lN4CLg/viewform?usp=header";

  return (
    <div className="min-h-screen selection:bg-brand-stone/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md py-6 px-6 md:px-12 flex justify-between items-center border-b border-brand-stone/20">
        <div className="text-brand-logo font-playfair text-2xl tracking-tight font-semibold">
          [Un:]Scripted
        </div>
        <a 
          href={registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-logo transition-colors"
        >
          Reserve
        </a>
      </nav>

      <main>
        <Hero />
        
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="divider my-12" />
          <Essence />
          
          <div className="divider my-12" />
          <EventDetails />
          
          <div className="divider my-12" />
          <HowItWorks />
          
          <div className="divider my-12" />
          <Activities />
          
          <div className="divider my-12" />
          <Respect />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

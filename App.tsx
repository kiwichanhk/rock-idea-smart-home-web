import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import SmartLinkage from './components/SmartLinkage';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-slate-50 font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <SmartLinkage />
        <Pricing />
      </main>
      <Contact />
    </div>
  );
};

export default App;

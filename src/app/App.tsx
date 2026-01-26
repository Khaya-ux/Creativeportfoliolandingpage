import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/1b7ded304b7046b0bc6e6b8e18b95a975b20be5d.png';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="size-full bg-neutral-950 text-white overflow-y-auto">
      <Navigation />
      <Hero image={heroImage} />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

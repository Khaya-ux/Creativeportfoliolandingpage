import { useState } from 'react';
import heroImage from '../assets/1b7ded304b7046b0bc6e6b8e18b95a975b20be5d.png';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { Grain } from './components/Grain';
import { Preloader } from './components/Preloader';
import { Marquee } from './components/Marquee';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />
      <Grain />
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div className="size-full bg-neutral-950 text-white overflow-y-auto scroll-smooth">
        <Navigation />
        <Hero image={heroImage} />
        <Marquee />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

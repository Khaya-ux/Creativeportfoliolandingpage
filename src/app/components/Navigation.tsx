import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl tracking-tight">CREATIVE</a>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-neutral-400 transition-colors">About</a>
          <a href="#work" className="hover:text-neutral-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-neutral-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

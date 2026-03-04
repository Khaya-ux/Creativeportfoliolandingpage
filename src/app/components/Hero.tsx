import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  image: string;
}

export function Hero({ image }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const container = sectionRef.current?.closest('.overflow-y-auto') ?? window;
    const onScroll = () => {
      const y = container === window
        ? window.scrollY
        : (container as Element).scrollTop;
      setScrollY(y);
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Creative Portfolio"
          className="w-full h-full object-cover object-center"
          style={{ transform: `translateY(${scrollY * 0.35}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Role badge */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-amber-400/40 text-amber-400 text-xs tracking-widest transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          COO • ENTREPRENEUR • CONTENT CREATOR
        </div>

        <h1
          className={`text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight leading-none transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          VISIONARY
          <br />
          <em className="not-italic italic text-amber-400">Leader</em>
        </h1>

        <p
          className={`text-lg md:text-xl text-neutral-300 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building brands, scaling companies, and creating content that resonates.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#work"
            className="px-8 py-4 bg-amber-400 text-neutral-950 font-semibold tracking-wide hover:bg-amber-300 transition-colors duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/40 hover:border-white hover:text-white transition-all duration-300 text-neutral-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}

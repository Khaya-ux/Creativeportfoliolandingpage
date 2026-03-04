import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return value;
}

const services = [
  {
    title: 'Operations Leadership',
    description: 'Strategic oversight and optimization of business operations to drive efficiency and growth.',
  },
  {
    title: 'Business Strategy',
    description: 'Entrepreneurial guidance for startups and established companies looking to scale.',
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that builds brands, tells stories, and connects with audiences.',
  },
];

function StatCounter({ target, suffix, label, active, delay }: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  const value = useCounter(target, 1600, started);

  return (
    <div
      className={`transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${300 + delay}ms` }}
    >
      <div
        className="text-4xl md:text-5xl mb-2 text-amber-400 tabular-nums"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}{suffix}
      </div>
      <div className="text-neutral-500 text-sm tracking-widest uppercase">{label}</div>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className="min-h-screen flex items-center bg-neutral-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <div className="text-amber-400 mb-4 tracking-widest text-xs uppercase">About Me</div>
          <h2
            className="text-5xl md:text-6xl mb-8 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Building Brands
            <br />
            <em className="not-italic italic text-neutral-400">&amp; Businesses</em>
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            I'm a dynamic leader and entrepreneur with a passion for operational excellence
            and compelling storytelling. As a COO, I drive strategic growth and optimize
            business operations, while creating engaging content that resonates with audiences.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed">
            With extensive experience in scaling companies and building brands, I combine
            data-driven leadership with creative vision to deliver exceptional results.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <StatCounter target={10} suffix="M+" label="Reach" active={inView} delay={0} />
            <StatCounter target={5} suffix="+" label="Companies" active={inView} delay={100} />
            <StatCounter target={12} suffix="+" label="Years" active={inView} delay={200} />
          </div>
        </div>

        {/* Right Content — Services */}
        <div
          className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-neutral-800 p-6 hover:border-amber-400/50 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-xs mt-1 tracking-widest font-mono">
                  0{index + 1}
                </span>
                <div>
                  <h3
                    className="text-xl mb-3 group-hover:text-amber-400 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

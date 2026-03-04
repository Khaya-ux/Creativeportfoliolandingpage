interface MarqueeProps {
  items?: string[];
  speed?: number; // seconds for one full cycle
}

const defaultItems = [
  'Operations Leadership',
  'Business Strategy',
  'Content Creation',
  'Brand Building',
  'Scaling Companies',
  'Entrepreneurship',
  'Thought Leadership',
  'Creative Direction',
];

export function Marquee({ items = defaultItems, speed = 30 }: MarqueeProps) {
  // Duplicate for seamless loop
  const list = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-amber-400 py-4 select-none">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-amber-400 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-amber-400 to-transparent z-10" />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 text-neutral-950 font-medium tracking-widest text-sm uppercase"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950/40 flex-shrink-0" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

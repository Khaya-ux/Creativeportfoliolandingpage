import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

function useInView(threshold = 0.1) {
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

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  fullCategory: string;
  description: string;
  outcomes: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Company Scale-Up Strategy',
    category: 'Operations',
    fullCategory: 'Operations Leadership',
    image: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNjc3NjU1NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    description: 'Led a full operational transformation for a Series B startup, restructuring teams and implementing scalable systems to support 3x revenue growth.',
    outcomes: ['3x revenue growth in 18 months', 'Reduced operational costs by 40%', 'Built and managed team of 60+'],
    tags: ['Operations', 'Leadership', 'Scaling', 'Process Design'],
  },
  {
    id: 2,
    title: 'Brand Launch Campaign',
    category: 'Content',
    fullCategory: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGNhbXBhaWdufGVufDF8fHx8MTc2NzcwMzIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    description: 'Directed a multi-platform brand launch for a luxury lifestyle brand, creating cohesive narratives across social, video, and editorial content.',
    outcomes: ['5M impressions in first week', '200K new followers across platforms', 'Featured in Vogue & Forbes'],
    tags: ['Brand Strategy', 'Content', 'Social Media', 'Editorial'],
  },
  {
    id: 3,
    title: 'Tech Startup Advisory',
    category: 'Strategy',
    fullCategory: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzY0ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    description: 'Strategic advisory for a SaaS startup from seed to Series A, including GTM strategy, investor relations, and product-market fit validation.',
    outcomes: ['Secured $4.2M Series A', 'GTM strategy reached 500+ customers', '98% customer retention rate'],
    tags: ['Advisory', 'SaaS', 'Fundraising', 'GTM Strategy'],
  },
  {
    id: 4,
    title: 'Thought Leadership Series',
    category: 'Content',
    fullCategory: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1651021467774-ab3d8b920deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3JrfGVufDF8fHx8MTc2NzcwMzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    description: 'Produced a 12-part video and podcast series on entrepreneurial leadership, distributed across YouTube, Spotify, and Apple Podcasts.',
    outcomes: ['2M total views/listens', 'Top 50 Business Podcast ranking', '40K newsletter subscribers'],
    tags: ['Podcast', 'Video', 'Thought Leadership', 'Distribution'],
  },
  {
    id: 5,
    title: 'Operational Transformation',
    category: 'Operations',
    fullCategory: 'Operations Leadership',
    image: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NzU3OTIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    description: 'Drove a company-wide digital transformation for a traditional media company, modernizing workflows and introducing data-driven decision making.',
    outcomes: ['60% increase in team productivity', 'Migrated 200+ processes to digital', '$2M in annual cost savings'],
    tags: ['Digital Transformation', 'Change Management', 'Automation'],
  },
  {
    id: 6,
    title: 'E-commerce Venture',
    category: 'Strategy',
    fullCategory: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0dWRpb3xlbnwxfHx8fDE3Njc2NDczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    description: 'Co-founded and scaled a DTC e-commerce brand from zero to $1.2M revenue in its first year through strategic positioning and organic growth.',
    outcomes: ['$1.2M revenue in Year 1', '25K active customers', '4.8★ average product rating'],
    tags: ['E-commerce', 'DTC', 'Brand Building', 'Growth'],
  },
];

const filters = [
  { label: 'All', value: 'All' },
  { label: 'Operations', value: 'Operations' },
  { label: 'Strategy', value: 'Strategy' },
  { label: 'Content', value: 'Content' },
];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-0 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full md:max-w-4xl bg-neutral-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-amber-400 transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <div className="text-amber-400 text-xs tracking-widest mb-2 uppercase">
                {project.fullCategory} · {project.year}
              </div>
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Outcomes */}
          <div className="mb-10">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Key Outcomes</div>
            <div className="space-y-3">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-neutral-200">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs border border-neutral-700 text-neutral-400 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        id="work"
        className="min-h-screen bg-neutral-900 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-amber-400 mb-4 tracking-widest text-xs uppercase">Selected Works</div>
            <h2
              className="text-5xl md:text-6xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Portfolio
            </h2>
          </div>

          {/* Filter */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 text-sm border transition-all duration-200 ${
                  activeFilter === filter.value
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                    : 'border-neutral-700 text-neutral-400 hover:border-amber-400/50 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative aspect-[3/4] overflow-hidden cursor-pointer bg-neutral-800 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: inView ? `${200 + i * 80}ms` : '0ms' }}
                data-cursor-hover
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-amber-400 mb-2 tracking-widest">
                      {project.fullCategory} · {project.year}
                    </div>
                    <h3
                      className="text-xl font-medium leading-snug mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-amber-400">
                      <span>View Case Study</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

                {/* Category pill */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/70 backdrop-blur-sm text-xs text-neutral-300 border border-neutral-700">
                  {project.category}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div
            className={`text-center mt-16 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-neutral-950 transition-all duration-300 font-semibold">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

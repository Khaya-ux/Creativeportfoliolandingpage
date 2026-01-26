import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Company Scale-Up Strategy',
    category: 'Operations Leadership',
    image: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNjc3NjU1NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
  {
    id: 2,
    title: 'Brand Launch Campaign',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGNhbXBhaWdufGVufDF8fHx8MTc2NzcwMzIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
  {
    id: 3,
    title: 'Tech Startup Advisory',
    category: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzY0ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
  },
  {
    id: 4,
    title: 'Thought Leadership Series',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1651021467774-ab3d8b920deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3JrfGVufDF8fHx8MTc2NzcwMzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
  },
  {
    id: 5,
    title: 'Operational Transformation',
    category: 'Operations Leadership',
    image: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NzU3OTIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
  },
  {
    id: 6,
    title: 'E-commerce Venture',
    category: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0dWRpb3xlbnwxfHx8fDE3Njc2NDczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Operations Leadership', 'Business Strategy', 'Content Creation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="min-h-screen bg-neutral-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-neutral-500 mb-4 tracking-widest text-sm">SELECTED WORKS</div>
          <h2 className="text-5xl md:text-6xl tracking-tight">Portfolio</h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border transition-all ${
                activeFilter === filter
                  ? 'bg-white text-neutral-950 border-white'
                  : 'border-neutral-700 hover:border-neutral-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-neutral-800"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-neutral-400 mb-2">{project.category} • {project.year}</div>
                  <h3 className="text-2xl">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-neutral-950 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
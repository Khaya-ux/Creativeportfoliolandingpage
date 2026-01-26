export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="text-neutral-500 mb-4 tracking-widest text-sm">ABOUT ME</div>
          <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">
            Building Brands
            <br />
            <span className="italic text-neutral-400">& Businesses</span>
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            I'm a dynamic leader and entrepreneur with a passion for operational excellence 
            and compelling storytelling. As a COO, I drive strategic growth and optimize 
            business operations, while creating engaging content that resonates with audiences.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed">
            With extensive experience in scaling companies and building brands, I combine 
            data-driven leadership with creative vision to deliver exceptional results and 
            inspire teams to reach their full potential.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-2">10M+</div>
              <div className="text-neutral-500 text-sm">Reach</div>
            </div>
            <div>
              <div className="text-4xl mb-2">5+</div>
              <div className="text-neutral-500 text-sm">Companies</div>
            </div>
            <div>
              <div className="text-4xl mb-2">12+</div>
              <div className="text-neutral-500 text-sm">Years</div>
            </div>
          </div>
        </div>

        {/* Right Content - Services */}
        <div className="space-y-6">
          {[
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
          ].map((service, index) => (
            <div 
              key={index}
              className="border border-neutral-800 p-6 hover:border-neutral-600 transition-colors group"
            >
              <h3 className="text-2xl mb-3 group-hover:text-neutral-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
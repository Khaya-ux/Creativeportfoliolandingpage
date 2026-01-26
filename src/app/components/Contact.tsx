export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="text-neutral-500 mb-4 tracking-widest text-sm">GET IN TOUCH</div>
            <h2 className="text-5xl md:text-7xl mb-8 tracking-tight leading-tight">
              Let's Build
              <br />
              <span className="italic text-neutral-400">Together</span>
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-12">
              I'm always open to new opportunities, partnerships, and collaborations. 
              Whether you need operational leadership, strategic guidance, or compelling 
              content, let's discuss how we can create value together.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <a 
                href="mailto:hello@creative.com" 
                className="block text-xl hover:text-neutral-400 transition-colors"
              >
                hello@creative.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="block text-xl hover:text-neutral-400 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex gap-6 mt-12">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-neutral-900 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm text-neutral-400 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="project"
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                >
                  <option>Operations Leadership</option>
                  <option>Business Strategy</option>
                  <option>Content Creation</option>
                  <option>Speaking Engagement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-neutral-950 py-4 hover:bg-neutral-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>© 2026 Creative Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
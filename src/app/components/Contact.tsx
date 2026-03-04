import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs.config';

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

type FormState = { name: string; email: string; project: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const blank: FormState = { name: '', email: '', project: 'Operations Leadership', message: '' };

export function Contact() {
  const { ref, inView } = useInView();
  const [values, setValues] = useState<FormState>(blank);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    setValues((v) => ({ ...v, [id]: value }));
    if (errors[id as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          inquiry_type: values.project,
          message: values.message,
          to_name: 'Creative',
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
      setValues(blank);
    } catch {
      setStatus('error');
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-neutral-950 border px-4 py-3 focus:outline-none transition-colors text-white placeholder:text-neutral-600 ${
      errors[field] ? 'border-red-500 focus:border-red-400' : 'border-neutral-800 focus:border-amber-400'
    }`;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="min-h-screen flex items-center bg-neutral-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="text-amber-400 mb-4 tracking-widest text-xs uppercase">Get In Touch</div>
            <h2
              className="text-5xl md:text-7xl mb-8 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's Build
              <br />
              <em className="not-italic italic text-neutral-400">Together</em>
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-12">
              I'm always open to new opportunities, partnerships, and collaborations.
              Whether you need operational leadership, strategic guidance, or compelling
              content, let's discuss how we can create value together.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@creative.com"
                className="flex items-center gap-3 text-xl hover:text-amber-400 transition-colors group"
              >
                <span className="text-amber-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
                hello@creative.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-xl hover:text-amber-400 transition-colors group"
              >
                <span className="text-amber-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex gap-6 mt-12">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-neutral-400 hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {status === 'success' ? (
              <div className="bg-neutral-900 p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[460px]">
                <div
                  className="text-5xl mb-6 text-amber-400"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  ✓
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-neutral-400 mb-8">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-neutral-950 transition-all duration-300 text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="bg-neutral-900 p-8 md:p-12 space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                    Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text" id="name" value={values.name} onChange={handleChange}
                    className={inputClass('name')} placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                    Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email" id="email" value={values.email} onChange={handleChange}
                    className={inputClass('email')} placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm text-neutral-400 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="project" value={values.project} onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors text-white"
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
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message" rows={5} value={values.message} onChange={handleChange}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-amber-400 text-neutral-950 py-4 hover:bg-amber-300 transition-colors font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
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

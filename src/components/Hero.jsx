import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-indigo-500" /> Available for work
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Software Developer crafting delightful, performant experiences
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            I build modern web apps with React, TypeScript, and Python. I love turning ideas into polished, accessible products with thoughtful UX.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              View my work <ArrowRight size={18} />
            </a>
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
              Contact me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-content-center rounded-full border hover:bg-slate-50">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-content-center rounded-full border hover:bg-slate-50">
              <Linkedin size={18} />
            </a>
            <a href="mailto:you@example.com" className="h-10 w-10 grid place-content-center rounded-full border hover:bg-slate-50">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

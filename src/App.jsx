import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t bg-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-xs text-slate-500">Built with React, Tailwind, and a playful 3D touch.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

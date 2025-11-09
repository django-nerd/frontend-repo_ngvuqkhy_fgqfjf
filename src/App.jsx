import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HackerBackground from './components/HackerBackground';

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} PIYUSH MISHRA. All rights reserved.</p>
        <div className="text-xs">Built with React, Tailwind, and an interactive 3D touch.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-mono bg-slate-950 text-white relative min-h-screen">
      <HackerBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

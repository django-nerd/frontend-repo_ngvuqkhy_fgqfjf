import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Piyush Mishra</p>
          <p className="hidden sm:block">Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-sm md:text-base font-medium text-slate-300 hover:text-white transition-colors';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="group flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 grid place-content-center text-white font-bold">P</div>
            <span className="text-white/90 font-semibold tracking-tight">PIYUSH MISHRA</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('about')} className={linkBase}>
              <span className="inline-flex items-center gap-2"><User size={18}/>About</span>
            </button>
            <button onClick={() => scrollTo('projects')} className={linkBase}>
              <span className="inline-flex items-center gap-2"><Briefcase size={18}/>Projects</span>
            </button>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              <Mail size={18}/> Contact
            </button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <button onClick={() => scrollTo('about')} className="text-left px-2 py-2 rounded hover:bg-white/10 text-slate-200">About</button>
              <button onClick={() => scrollTo('projects')} className="text-left px-2 py-2 rounded hover:bg-white/10 text-slate-200">Projects</button>
              <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded bg-white/10 text-white">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

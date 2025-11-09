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

  const linkBase = 'text-sm md:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 border-b border-slate-200' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="group flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 grid place-content-center text-white font-bold">P</div>
            <span className="text-slate-900 font-semibold tracking-tight">PIYUSH MISHRA</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('projects')} className={linkBase}>
              <span className="inline-flex items-center gap-2"><Briefcase size={18}/>Projects</span>
            </button>
            <button onClick={() => scrollTo('contact')} className={linkBase}>
              <span className="inline-flex items-center gap-2"><Mail size={18}/>Contact</span>
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
              <button onClick={() => scrollTo('projects')} className="text-left px-2 py-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2"><Briefcase size={16}/>Projects</button>
              <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2"><Mail size={16}/>Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

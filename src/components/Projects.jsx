import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const demoProjects = [
  {
    title: 'Realtime Chat App',
    description: 'WebSocket powered chat with rooms, presence, and message history.',
    tags: ['React', 'Node', 'WebSocket'],
    site: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Starter',
    description: 'Product catalog, cart, checkout flow, and admin dashboard.',
    tags: ['FastAPI', 'MongoDB', 'Stripe'],
    site: '#',
    repo: '#',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D scenes with Spline and performant React rendering.',
    tags: ['React', 'Spline', 'Tailwind'],
    site: '#',
    repo: '#',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(demoProjects);

  useEffect(() => {
    // Replace with backend API later if needed
    setProjects(demoProjects);
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected projects</h2>
            <p className="mt-2 text-slate-600">A snapshot of things I’ve designed, built, and shipped.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-pink-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.site} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:underline">
                    Live <ExternalLink size={14} />
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:underline">
                    Code <Github size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

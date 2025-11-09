import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Food Delivery Web App — Team Leader',
    period: '09/2023 - 12/2023',
    description:
      'Led a team to build a full‑stack platform with Next.js, Node.js, MongoDB, and Tailwind CSS with JWT‑based authentication and payments.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'JWT', 'Payments'],
    site: '#',
    repo: '#',
  },
  {
    title: 'Secure Vault — Password Manager',
    period: '02/2025 - 04/2025',
    description:
      'Full‑stack password manager using Node.js, Express, MongoDB, and JWT. Implemented hashing, sessions, strength checks, and responsive UI.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Security'],
    site: '#',
    repo: '#',
  },
  {
    title: 'Task Mate — Task Management App',
    period: '03/2025 - 05/2025',
    description:
      'Task manager with React, Node.js, Express, MongoDB. CRUD, filters, completion toggling, reusable components, and robust APIs.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    site: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected projects</h2>
            <p className="mt-2 text-slate-600">A snapshot of things I’ve built and led.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 via-teal-100 to-indigo-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{p.period}</p>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>
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

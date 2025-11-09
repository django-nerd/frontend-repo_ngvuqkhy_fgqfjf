export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About me</h2>
            <p className="mt-4 text-slate-600">
              I’m a full‑stack developer with a strong product mindset. I focus on clean architecture, great DX, and a11y. My toolkit includes React, TypeScript, Tailwind, Node.js, Python/FastAPI, and MongoDB.
            </p>
            <p className="mt-4 text-slate-600">
              I enjoy collaborating closely with designers and founders to ship features quickly without sacrificing quality. Performance, testing, and maintainability are first‑class citizens in my workflow.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'React • TypeScript • Vite',
              'Node.js • FastAPI • MongoDB',
              'Tailwind • Radix UI • Framer Motion',
              'Testing • CI/CD • Cloud Deployments',
            ].map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

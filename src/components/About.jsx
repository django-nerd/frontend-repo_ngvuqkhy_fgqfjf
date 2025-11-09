export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">About me</h2>
            <p className="mt-4 text-slate-300">
              I’m a full‑stack developer with a strong focus on security and clean architecture. My toolkit includes React, Node.js/Express, FastAPI, and MongoDB — with a passion for building robust, performant, and accessible products.
            </p>
            <p className="mt-4 text-slate-300">
              I lead teams with empathy and clarity, adopt Agile practices, and ship features quickly without sacrificing quality. Testing, CI/CD, and observability are integral to my workflow.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'React • Next.js • TypeScript • Vite',
              'Node.js • Express • FastAPI',
              'MongoDB • Mongoose • Prisma',
              'Tailwind • Radix UI • Framer Motion',
              'Auth • JWT • bcrypt • OWASP Mindset',
            ].map((item) => (
              <li key={item} className="rounded-xl border border-white/10 p-4 bg-white/5 shadow-sm">
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

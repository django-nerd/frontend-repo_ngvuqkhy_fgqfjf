import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-600/20">
            <Mail size={14}/> Let’s talk
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">Want to collaborate or have a role in mind? Drop a message.</p>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="h-11 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 px-4 outline-none focus:ring-2 focus:ring-emerald-400/30" />
            <input name="email" type="email" required placeholder="Email address" defaultValue="2k22.csai.2213601@gmail.com" className="h-11 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 px-4 outline-none focus:ring-2 focus:ring-emerald-400/30" />
          </div>
          <input name="subject" placeholder="Subject" className="h-11 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 px-4 outline-none focus:ring-2 focus:ring-emerald-400/30" />
          <textarea name="message" required placeholder="Your message" rows={5} className="rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 p-4 outline-none focus:ring-2 focus:ring-emerald-400/30" />
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-600">Or email me directly at <a href="mailto:2k22.csai.2213601@gmail.com" className="underline decoration-emerald-400/50 underline-offset-4 hover:text-slate-900">2k22.csai.2213601@gmail.com</a></p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-700 transition-colors">
              Send <Send size={16}/>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      // This can be wired to a backend endpoint or email service
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Thanks! I will get back to you shortly.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
            <Mail size={14}/> Let’s talk
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">Want to collaborate or have a role in mind? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="h-11 rounded-lg border border-slate-300 px-4 outline-none focus:ring-2 focus:ring-indigo-200" />
            <input name="email" type="email" required placeholder="Email address" className="h-11 rounded-lg border border-slate-300 px-4 outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>
          <input name="subject" placeholder="Subject" className="h-11 rounded-lg border border-slate-300 px-4 outline-none focus:ring-2 focus:ring-indigo-200" />
          <textarea name="message" required placeholder="Your message" rows={5} className="rounded-lg border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-indigo-200" />
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">I typically reply within 1–2 business days.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              Send <Send size={16}/>
            </button>
          </div>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}

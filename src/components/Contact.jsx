import { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const socials = [
    { href: 'mailto:bhavtosh2000@gmail.com', label: 'EMAIL', value: 'bhavtosh2000@gmail.com', icon: Mail, color: '#dc2626', tilt: 'tilt-1' },
    { href: 'https://linkedin.com/in/bhavtosh-upadhyay', label: 'LINKEDIN', value: '/in/bhavtosh-upadhyay', icon: Linkedin, color: '#2563eb', tilt: 'tilt-2' },
    { href: 'https://github.com/Bhav-tosh', label: 'GITHUB', value: '/Bhav-tosh', icon: Github, color: '#1a1a1a', tilt: 'tilt-3' },
    { href: 'https://docs.groclake.ai', label: 'GITBOOK', value: 'docs.groclake.ai', icon: FileText, color: '#65a30d', tilt: 'tilt-1' },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-10">
        <div className="font-marker text-xs tracking-widest text-[#dc2626] mb-2">📡 INCOMING TRANSMISSION</div>
        <h2 className="font-marker text-4xl md:text-6xl ink-underline inline-block">Let's Build Something Intelligent</h2>
        <p className="font-hand text-lg md:text-xl mt-6 max-w-2xl mx-auto text-[#404040]">
          Ready to create AI-first experiences together? I'm always excited to discuss AI product strategy, conversational UX, or how to build better human-AI interactions.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 doodle-border-3 bg-white p-6 doodle-shadow-lg relative">
          <div className="tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2" style={{ transform: 'translateX(-50%) rotate(-3deg)' }}></div>
          <div className="font-marker text-sm tracking-widest mb-4 text-[#dc2626]">▸ SEND TRANSMISSION</div>

          <div className="space-y-4">
            <div>
              <label className="font-marker text-sm block mb-1">Callsign (Name)</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full doodle-border-2 bg-[#f5edd6] px-3 py-2 font-hand text-base outline-none"
                placeholder="Your name here..."
              />
            </div>
            <div>
              <label className="font-marker text-sm block mb-1">Frequency (Email)</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full doodle-border-2 bg-[#f5edd6] px-3 py-2 font-hand text-base outline-none"
                placeholder="you@somewhere.com"
              />
            </div>
            <div>
              <label className="font-marker text-sm block mb-1">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full doodle-border-2 bg-[#f5edd6] px-3 py-2 font-hand text-base outline-none resize-none"
                placeholder="What's the mission?"
              />
            </div>
            <button
              onClick={handleSend}
              className="w-full doodle-border doodle-shadow bg-[#dc2626] text-white py-3 font-marker text-lg wobble flex items-center justify-center gap-2"
            >
              {sent ? '✅ TRANSMISSION SENT!' : <>SEND MESSAGE <Send size={18}/></>}
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={`doodle-border bg-white p-4 doodle-shadow flex items-center gap-3 wobble ${s.tilt}`}>
                <div className="w-12 h-12 doodle-border-2 flex items-center justify-center text-white shrink-0" style={{ backgroundColor: s.color }}>
                  <Icon size={22}/>
                </div>
                <div className="min-w-0">
                  <div className="font-marker text-sm">{s.label}</div>
                  <div className="font-hand text-sm truncate">{s.value}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

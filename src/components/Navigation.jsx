import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Missions' },
    { href: '#skills', label: 'Arsenal' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#f5edd6]/90 border-b-[3px] border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 doodle-border-2 bg-[#dc2626] flex items-center justify-center font-marker text-white text-xl tilt-1">B</div>
          <div>
            <div className="font-marker text-xl md:text-2xl leading-none">Be You</div>
            <div className="font-hand text-xs text-[#525252]">Bhavtosh Upadhyay</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7 font-marker text-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#contact" className="doodle-border-2 doodle-shadow bg-[#dc2626] text-white px-5 py-2 font-marker text-base wobble">Let's Talk</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-[#1a1a1a] bg-[#f5edd6] px-6 py-4 flex flex-col gap-4 font-marker text-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

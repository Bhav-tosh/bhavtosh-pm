import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Lamp } from './Doodles.jsx';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // Lamp ON = light mode, lamp OFF = dark mode.
  const lampOn = !dark;

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Missions' },
    { href: '#skills', label: 'Arsenal' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#f5edd6]/90 dark:bg-[#15120e]/90 border-b-[3px] border-[#1a1a1a] dark:border-[#f0e6cf]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 doodle-border-2 bg-[#dc2626] flex items-center justify-center font-marker text-white text-xl tilt-1">B</div>
          <div>
            <div className="font-marker text-xl md:text-2xl leading-none">Be You</div>
            <div className="font-hand text-xs text-[#525252] dark:text-[#b8ad8f]">Bhavtosh Upadhyay</div>
          </div>
        </a>

        <div className="flex items-center gap-5 md:gap-7">
          <div className="hidden md:flex items-center gap-7 font-marker text-lg">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#contact" className="doodle-border-2 doodle-shadow bg-[#dc2626] text-white px-5 py-2 font-marker text-base wobble">Let's Talk</a>
          </div>

          {/* Hanging lamp: pull it to switch modes */}
          <button
            onClick={() => setDark((d) => !d)}
            className="lamp-toggle -mt-4 shrink-0"
            aria-label={lampOn ? 'Turn off the lamp (switch to dark mode)' : 'Turn on the lamp (switch to light mode)'}
            title={lampOn ? 'Lights on — click for dark mode' : 'Lights off — click for light mode'}
          >
            <Lamp on={lampOn} className="w-9 h-14 md:w-10 md:h-16" />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-[#1a1a1a] dark:border-[#f0e6cf] bg-[#f5edd6] dark:bg-[#15120e] px-6 py-4 flex flex-col gap-4 font-marker text-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

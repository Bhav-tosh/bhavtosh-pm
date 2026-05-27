import { Download } from 'lucide-react';
import { StickHero, Boom } from './Doodles.jsx';
import MusicBomb from './MusicBomb.jsx';

export default function Hero() {
  const stats = [
    { n: '7+', l: 'PRODUCTS SHIPPED', c: '#dc2626' },
    { n: '220+', l: 'CITIES IMPACTED', c: '#2563eb' },
    { n: '3M+', l: 'USERS REACHED', c: '#65a30d' },
    { n: '∞', l: 'AI USE CASES', c: '#9333ea' },
  ];

  return (
    <section id="home" className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 doodle-border bg-white dark:bg-[#211d18] px-4 py-2 doodle-shadow mb-6 tilt-1">
            <span className="w-3 h-3 rounded-full bg-[#65a30d] pulse-red"></span>
            <span className="font-hand text-sm">DEPLOYED · Associate PM @ Rezo.ai</span>
          </div>

          <h1 className="font-marker text-5xl md:text-7xl leading-tight mb-4">
            Hi, I'm <span className="text-[#dc2626] ink-underline">Bhavtosh</span>
          </h1>
          <p className="font-marker text-2xl md:text-3xl mb-6 leading-tight">
            Associate PM building <br/>
            <span className="bg-[#fbbf24] px-2 py-1 inline-block tilt-2 doodle-border-2">AI-first user experiences</span>
          </p>
          <p className="font-hand text-lg md:text-xl text-[#404040] dark:text-[#c9bd9e] mb-8 max-w-lg">
            I design intelligent systems — from dating apps to agentic automation. Turning complex AI capabilities into delightful user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="doodle-border doodle-shadow bg-[#dc2626] text-white px-6 py-3 font-marker text-lg wobble flex items-center gap-2">
              Explore My Work <span>→</span>
            </a>
            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="doodle-border doodle-shadow bg-white dark:bg-[#211d18] px-6 py-3 font-marker text-lg wobble flex items-center gap-2">
              <Download size={20}/> Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute -top-4 -left-4 w-32 h-20 hidden md:block">
            <Boom text="POW!" rotate={-12} />
          </div>

          {/* Blow this bomb to play the soundtrack */}
          <div className="absolute bottom-0 left-0 md:-left-4 z-20">
            <MusicBomb />
          </div>
          <div className="relative float-anim">
            <StickHero className="w-72 md:w-96" />
            <div className="absolute -right-4 md:-right-8 top-2 doodle-border-2 bg-white dark:bg-[#211d18] px-4 py-2 doodle-shadow font-hand text-sm md:text-base tilt-2 max-w-[140px]">
              Ready to ship!
              <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[#1a1a1a] dark:border-t-[#f0e6cf]"></div>
              <div className="absolute -bottom-2 left-[26px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-white dark:border-t-[#211d18]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card doodle-border bg-white dark:bg-[#211d18] p-5 doodle-shadow text-center ${i % 2 ? 'tilt-2' : 'tilt-1'}`}>
            <div className="font-marker text-4xl md:text-5xl" style={{ color: s.c }}>{s.n}</div>
            <div className="font-marker text-xs md:text-sm mt-2 tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

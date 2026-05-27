import { caseStudies } from '../data.js';
import { Medal } from './Doodles.jsx';

export default function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <div className="font-marker text-xs tracking-widest text-[#dc2626] mb-2">COMPLETED MISSIONS</div>
        <h2 className="font-marker text-4xl md:text-6xl ink-underline inline-block">Case Studies</h2>
        <p className="font-hand text-lg md:text-xl mt-6 max-w-2xl mx-auto text-[#404040] dark:text-[#c9bd9e]">
          Building intelligent products that transform how users interact with technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((cs, i) => (
          <div key={i} className={`mission-card doodle-border-3 bg-white dark:bg-[#211d18] doodle-shadow-lg overflow-hidden relative ${i % 2 ? 'tilt-2' : 'tilt-1'}`}>
            <div className="p-5 border-b-[3px] border-[#1a1a1a] dark:border-[#f0e6cf] flex items-center justify-between" style={{ backgroundColor: cs.color + '20' }}>
              <div>
                <div className="font-marker text-xs tracking-widest" style={{ color: cs.color }}>{cs.codename}</div>
                <h3 className="font-marker text-2xl md:text-3xl mt-1">{cs.title}</h3>
                <p className="font-hand text-sm text-[#525252] dark:text-[#b8ad8f]">{cs.sector}</p>
              </div>
              <div className="text-5xl">{cs.emoji}</div>
            </div>

            <div className="p-5">
              <p className="font-marker text-lg mb-4 italic">"{cs.subtitle}"</p>

              <div className="mb-4">
                <div className="font-marker text-sm tracking-widest mb-2 text-[#404040] dark:text-[#c9bd9e]">▸ MY ROLE</div>
                <ul className="space-y-1">
                  {cs.role.map((r, j) => (
                    <li key={j} className="font-hand text-sm md:text-base flex items-start gap-2">
                      <span style={{ color: cs.color }}>●</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doodle-border-2 p-3" style={{ backgroundColor: cs.color + '15', borderColor: cs.color }}>
                <div className="font-marker text-sm tracking-widest mb-2 flex items-center gap-2" style={{ color: cs.color }}>
                  <Medal className="w-5 h-5"/> LOOT EARNED
                </div>
                <ul className="space-y-1">
                  {cs.loot.map((l, j) => (
                    <li key={j} className="font-hand text-sm md:text-base flex items-start gap-2 font-bold">
                      <span>⭐</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

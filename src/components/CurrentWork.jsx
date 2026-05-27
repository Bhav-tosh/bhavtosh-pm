import { currentWork } from '../data.js';
import { Crosshair } from './Doodles.jsx';

export default function CurrentWork() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <span className="absolute -top-6 -right-8 w-16 h-16 -rotate-12">
            <Crosshair className="w-full h-full" />
          </span>
          <div className="font-marker text-xs tracking-widest text-[#dc2626] mb-2">ACTIVE DEPLOYMENT</div>
          <h2 className="font-marker text-4xl md:text-6xl ink-underline">What I'm Building Now</h2>
        </div>
        <p className="font-hand text-lg md:text-xl mt-6 max-w-2xl mx-auto text-[#404040] dark:text-[#c9bd9e]">
          Shipping voice AI, conversational bots, and platform tooling powering enterprise AI deployments across India's largest brands.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {currentWork.map((w, i) => (
          <div key={i} className={`mission-card doodle-border bg-white dark:bg-[#211d18] p-6 doodle-shadow relative ${i % 3 === 0 ? 'tilt-1' : i % 3 === 1 ? 'tilt-2' : 'tilt-3'}`}>
            <div className="tape w-20 h-6 -top-3 left-8" style={{ transform: 'rotate(-4deg)' }}></div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-marker text-xs tracking-widest px-3 py-1 doodle-border-2 text-white" style={{ backgroundColor: w.color }}>
                {w.tag}
              </span>
              <span className="font-hand text-xs text-[#525252] dark:text-[#b8ad8f]">MISSION 0{i+1}</span>
            </div>
            <h3 className="font-marker text-xl md:text-2xl mb-2 leading-tight">{w.title}</h3>
            <p className="font-hand text-base text-[#404040] dark:text-[#c9bd9e] mb-4">{w.desc}</p>
            <div className="scribble-line mb-3"></div>
            <ul className="space-y-2">
              {w.intel.map((line, j) => (
                <li key={j} className="font-hand text-sm md:text-base flex items-start gap-2">
                  <span className="text-[#dc2626] font-bold mt-1">▸</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

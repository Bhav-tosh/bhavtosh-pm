import { skillCats, tools } from '../data.js';
import { Star } from './Doodles.jsx';

export default function Skills() {
  const colors = ['#dc2626','#2563eb','#65a30d','#fbbf24','#9333ea','#0ea5e9','#ea580c','#ec4899'];

  return (
    <>
      <section id="skills" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <div className="font-marker text-xs tracking-widest text-[#dc2626] mb-2">LOADOUT</div>
          <h2 className="font-marker text-4xl md:text-6xl ink-underline inline-block">Skills & Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCats.map((sc, i) => (
            <div key={i} className={`doodle-border-2 bg-white p-6 doodle-shadow ${i % 2 ? 'tilt-2' : 'tilt-1'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 doodle-border-2 flex items-center justify-center" style={{ backgroundColor: sc.color }}>
                  <Star color="#fff" className="w-6 h-6"/>
                </div>
                <h3 className="font-marker text-xl md:text-2xl">{sc.cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {sc.items.map((it, j) => (
                  <span key={j} className="sticker doodle-border-2 bg-[#f5edd6] px-3 py-1 font-hand text-sm" style={{ borderColor: sc.color }}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="doodle-border bg-[#fbbf24] p-5 doodle-shadow tilt-2 max-w-3xl mx-auto text-center">
          <div className="font-marker text-sm tracking-widest mb-2">⚡ CURRENTLY TRAINING</div>
          <p className="font-marker text-lg md:text-xl">Agentic Infrastructure · AI for PMs · Framer · Prompt Engineering · Webflow</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="font-marker text-3xl md:text-5xl ink-underline inline-block">Tools & Tech</h2>
          <p className="font-hand text-lg mt-4 text-[#404040]">My everyday tactical gear</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tools.map((t, i) => {
            const c = colors[i % colors.length];
            const tilt = ['tilt-1','tilt-2','tilt-3'][i % 3];
            return (
              <span key={i} className={`sticker doodle-border-2 bg-white px-4 py-2 font-marker text-base doodle-shadow ${tilt}`} style={{ borderColor: c, color: c }}>
                {t}
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
}

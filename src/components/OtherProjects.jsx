import { otherProjects } from '../data.js';

export default function OtherProjects() {
  const tilts = ['tilt-1', 'tilt-2', 'tilt-3', 'tilt-1'];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="font-marker text-3xl md:text-5xl ink-underline inline-block">More Side Missions</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {otherProjects.map((p, i) => (
          <div key={i} className={`mission-card doodle-border bg-white dark:bg-[#211d18] p-5 doodle-shadow ${tilts[i]}`}>
            <div className="text-4xl mb-3">{p.emoji}</div>
            <h3 className="font-marker text-lg mb-2 leading-tight">{p.title}</h3>
            <p className="font-hand text-sm text-[#525252] dark:text-[#b8ad8f] mb-3">{p.desc}</p>
            <div className="scribble-line mb-3"></div>
            <p className="font-hand text-sm font-bold text-[#dc2626]">{p.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from 'react';

// Click anywhere to "shoot": leaves a bullet hole + PEW, and counts hits.
export default function ShootingRange() {
  const [shots, setShots] = useState([]);
  const [hits, setHits] = useState(0);
  const idRef = useRef(0);

  useEffect(() => {
    const onClick = (e) => {
      // Ignore the loading splash while it's up.
      if (e.target.closest('.splash')) return;
      const id = ++idRef.current;
      const x = e.clientX;
      const y = e.clientY;
      const rot = Math.floor(Math.random() * 60 - 30);
      setShots((prev) => [...prev, { id, x, y, rot }]);
      setHits((h) => h + 1);
      window.setTimeout(() => {
        setShots((prev) => prev.filter((s) => s.id !== id));
      }, 1100);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      {/* Shot effects */}
      <div className="fixed inset-0 pointer-events-none z-[45]">
        {shots.map((s) => (
          <div key={s.id}>
            <svg
              className="bullet-hole absolute"
              style={{ left: s.x, top: s.y, transform: 'translate(-50%,-50%)' }}
              width="34" height="34" viewBox="0 0 34 34"
            >
              <circle cx="17" cy="17" r="7" fill="#1a1a1a" />
              <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
                <line x1="17" y1="6" x2="17" y2="1" />
                <line x1="17" y1="28" x2="17" y2="33" />
                <line x1="6" y1="17" x2="1" y2="17" />
                <line x1="28" y1="17" x2="33" y2="17" />
                <line x1="9" y1="9" x2="5" y2="5" />
                <line x1="25" y1="9" x2="29" y2="5" />
                <line x1="9" y1="25" x2="5" y2="29" />
                <line x1="25" y1="25" x2="29" y2="29" />
              </g>
            </svg>
            <span
              className="pew-text absolute font-marker text-[#dc2626] text-lg"
              style={{ left: s.x, top: s.y, transform: `translate(-50%,-50%) rotate(${s.rot}deg)` }}
            >
              PEW!
            </span>
          </div>
        ))}
      </div>

      {/* Hit counter */}
      {hits > 0 && (
        <div
          key={hits}
          className="hits-counter fixed bottom-4 right-4 z-40 doodle-border-2 doodle-shadow bg-[#1a1a1a] text-[#fbbf24] px-3 py-1.5 font-marker text-sm tilt-2 select-none pointer-events-none"
        >
          🎯 HITS: {hits}
        </div>
      )}
    </>
  );
}

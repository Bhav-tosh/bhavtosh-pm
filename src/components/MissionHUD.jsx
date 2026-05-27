import { useEffect, useState } from 'react';

// Fixed game HUD: a mission-progress bar that fills as you scroll.
export default function MissionHUD() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const rank =
    pct >= 100 ? 'VICTORY' : pct >= 67 ? 'PUSHING' : pct >= 34 ? 'ENGAGE' : 'RECON';
  const lvl = Math.max(1, Math.ceil(pct / 20));

  return (
    <div className="hidden sm:block fixed bottom-4 left-4 z-40 doodle-border-2 doodle-shadow bg-[#f5edd6] dark:bg-[#1f1c16] px-3 py-2 tilt-1 select-none pointer-events-none w-52">
      <div className="flex items-center justify-between mb-1">
        <span className="font-marker text-[10px] tracking-widest text-[#dc2626]">MISSION PROGRESS</span>
        <span className="font-marker text-[10px]">LVL {lvl}</span>
      </div>
      <div className="h-3 doodle-border-2 bg-white dark:bg-[#0c0a08] overflow-hidden p-[2px] rounded-md">
        <div
          className="hud-fill h-full rounded-sm"
          style={{
            width: `${pct}%`,
            background:
              'repeating-linear-gradient(45deg,#65a30d 0 6px,#4d7c0f 6px 12px)',
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="font-hand text-xs">{rank}</span>
        <span className="font-marker text-xs">{pct}%</span>
      </div>
    </div>
  );
}

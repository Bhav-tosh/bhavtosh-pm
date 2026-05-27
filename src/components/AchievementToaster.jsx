import { useEffect, useState, useRef } from 'react';

// Pops a doodle "ACHIEVEMENT UNLOCKED" badge the first time each section is seen.
const ACHIEVEMENTS = [
  { id: 'work', emoji: '🎙️', label: 'RECON COMPLETE', sub: 'Active missions located' },
  { id: 'case-studies', emoji: '🧠', label: 'INTEL CRACKED', sub: 'Case files decrypted' },
  { id: 'other-work', emoji: '📦', label: 'SIDE QUESTS FOUND', sub: 'Bonus objectives spotted' },
  { id: 'skills', emoji: '🛠️', label: 'ARSENAL UNLOCKED', sub: 'Full loadout revealed' },
  { id: 'contact', emoji: '📡', label: 'FINAL BOSS', sub: 'Time to say hello' },
];

export default function AchievementToaster() {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const fired = new Set();
    const observers = [];

    ACHIEVEMENTS.forEach((a) => {
      const el = document.getElementById(a.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !fired.has(a.id)) {
              fired.add(a.id);
              const tid = ++idRef.current;
              setToasts((prev) => [...prev, { ...a, tid, leaving: false }]);
              // start exit
              window.setTimeout(() => {
                setToasts((prev) =>
                  prev.map((t) => (t.tid === tid ? { ...t, leaving: true } : t))
                );
              }, 3200);
              // remove
              window.setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.tid !== tid));
              }, 3700);
              io.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed top-20 right-3 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.tid}
          className={`${t.leaving ? 'toast-out' : 'toast-in'} doodle-border-2 doodle-shadow bg-[#1a1a1a] text-[#f5edd6] pl-2 pr-4 py-2 flex items-center gap-3 max-w-[260px]`}
        >
          <div className="w-9 h-9 shrink-0 doodle-border-2 bg-[#fbbf24] flex items-center justify-center text-xl">
            {t.emoji}
          </div>
          <div className="min-w-0">
            <div className="font-marker text-[10px] tracking-widest text-[#fbbf24]">🏆 ACHIEVEMENT UNLOCKED</div>
            <div className="font-marker text-sm leading-tight">{t.label}</div>
            <div className="font-hand text-xs text-[#a3a3a3]">{t.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

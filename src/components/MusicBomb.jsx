import { useRef, useState } from 'react';
import { Pause } from 'lucide-react';
import { Grenade, Boom } from './Doodles.jsx';
import { trackEvent } from '../analytics.js';

// Bomb on the hero: blow it up to start the Mini Militia theme, pause to stop.
export default function MusicBomb() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [bursting, setBursting] = useState(false);
  const [started, setStarted] = useState(false);

  // Particles that fly out of the explosion (random-ish fixed directions).
  const particles = [
    { px: '-46px', py: '-34px', c: '#dc2626' },
    { px: '44px', py: '-40px', c: '#fbbf24' },
    { px: '-52px', py: '24px', c: '#2563eb' },
    { px: '50px', py: '30px', c: '#65a30d' },
    { px: '0px', py: '-56px', c: '#9333ea' },
    { px: '-30px', py: '46px', c: '#ea580c' },
    { px: '34px', py: '44px', c: '#0ea5e9' },
  ];

  const blow = () => {
    trackEvent('music_play', { mode: started ? 'resume' : 'blow' });
    setStarted(true);
    setBursting(true);
    const a = audioRef.current;
    if (a) {
      a.volume = 0.55;
      a.play().catch(() => {}); // browsers allow this since it's a click
    }
    setPlaying(true);
    window.setTimeout(() => setBursting(false), 700);
  };

  const pause = () => {
    trackEvent('music_pause');
    if (audioRef.current) audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <div className="relative select-none w-28 h-28 flex items-center justify-center">
      <audio ref={audioRef} src="/mini-militia-theme.mp3" loop preload="auto" />

      {/* Explosion overlay */}
      {bursting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <span className="boom-ring absolute w-20 h-20 rounded-full border-4 border-[#fbbf24]"></span>
          {particles.map((p, i) => (
            <span
              key={i}
              className="boom-particle absolute w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: p.c, '--px': p.px, '--py': p.py }}
            />
          ))}
          <div className="explode-burst w-32 h-24">
            <Boom text="BOOM!" rotate={-6} />
          </div>
        </div>
      )}

      {playing ? (
        /* NOW PLAYING badge — click to pause */
        <button
          onClick={pause}
          className="now-playing-pulse doodle-border-2 bg-[#1a1a1a] dark:bg-[#0c0a08] px-3 py-2 flex items-center gap-2 wobble z-20"
          aria-label="Pause the music"
          title="Pause the soundtrack"
        >
          <div className="flex items-end gap-[3px] h-6 w-7">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="eq-bar flex-1 bg-[#fbbf24] rounded-sm"
                style={{ height: '100%', animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
          <Pause size={16} className="text-[#fbbf24]" />
          <span className="font-marker text-[10px] leading-none text-[#fbbf24]">PAUSE</span>
        </button>
      ) : (
        /* The bomb — click to blow it up and play */
        <button
          onClick={blow}
          className={`relative z-20 ${bursting ? 'bomb-shake' : 'bomb-idle'}`}
          aria-label="Blow up the bomb to play music"
          title="Blow me up to play the soundtrack!"
        >
          <Grenade className="w-14 h-20" color="#dc2626" />
          {/* sparking fuse */}
          <span className="fuse-spark absolute -top-2 right-1 text-base">✨</span>
          {/* hint tag */}
          <span className="absolute -right-2 -bottom-3 translate-x-full whitespace-nowrap doodle-border-2 bg-[#fbbf24] text-[#1a1a1a] px-2 py-1 font-marker text-[10px] doodle-shadow tilt-2 hidden sm:block">
            {started ? '⏸ blow again!' : '💣 blow me → music!'}
          </span>
        </button>
      )}
    </div>
  );
}

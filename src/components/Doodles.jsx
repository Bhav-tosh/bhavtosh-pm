export const StickHero = ({ className = "" }) => (
  <svg viewBox="0 0 260 360" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Cartoonised photo head on the doodle body */}
    <image href="/me-head.png" x="56" y="34" width="148" height="148" />
    <circle cx="130" cy="108" r="73" fill="none" stroke="currentColor" strokeWidth="3.5" />

    {/* Neck */}
    <rect x="118" y="176" width="24" height="14" fill="#fde68a" stroke="#1a1a1a" strokeWidth="3"/>

    {/* Hoodie */}
    <path d="M 70 195 Q 60 200 58 235 L 55 280 Q 55 290 65 290 L 195 290 Q 205 290 205 280 L 202 235 Q 200 200 190 195 Q 165 185 130 185 Q 95 185 70 195 Z"
          fill="#dc2626" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round"/>

    {/* Hood */}
    <path d="M 95 195 Q 80 200 78 215 Q 110 200 130 200 Q 150 200 182 215 Q 180 200 165 195 Q 145 188 130 188 Q 115 188 95 195 Z"
          fill="#b91c1c" stroke="#1a1a1a" strokeWidth="3"/>

    {/* Strings */}
    <line x1="120" y1="200" x2="116" y2="225" stroke="#fde68a" strokeWidth="2.5"/>
    <line x1="140" y1="200" x2="144" y2="225" stroke="#fde68a" strokeWidth="2.5"/>
    <circle cx="116" cy="228" r="2.5" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
    <circle cx="144" cy="228" r="2.5" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>

    {/* Zipper & pockets */}
    <line x1="130" y1="205" x2="130" y2="285" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="3,2"/>
    <path d="M 80 245 L 100 235 L 100 260 Z" fill="#b91c1c" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M 180 245 L 160 235 L 160 260 Z" fill="#b91c1c" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>

    {/* PM badge */}
    <rect x="155" y="215" width="28" height="14" rx="2" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
    <text x="169" y="225" textAnchor="middle" fill="#1a1a1a" fontSize="9" fontWeight="bold" fontFamily="monospace">PM</text>

    {/* Arms */}
    <path d="M 60 215 Q 38 245 42 280 L 60 285 L 70 260 Z" fill="#dc2626" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round"/>
    <path d="M 200 215 Q 222 245 218 280 L 200 285 L 190 260 Z" fill="#dc2626" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round"/>

    {/* Hands */}
    <ellipse cx="50" cy="285" rx="10" ry="9" fill="#fde68a" stroke="#1a1a1a" strokeWidth="3"/>
    <ellipse cx="210" cy="285" rx="10" ry="9" fill="#fde68a" stroke="#1a1a1a" strokeWidth="3"/>

    {/* Laptop */}
    <rect x="42" y="268" width="176" height="48" rx="4" fill="#1a1a1a"/>
    <rect x="48" y="273" width="164" height="38" rx="2" fill="#0c4a6e" stroke="#1a1a1a" strokeWidth="2"/>
    <rect x="53" y="278" width="50" height="4" fill="#fbbf24" rx="1"/>
    <rect x="53" y="286" width="70" height="3" fill="white" opacity="0.6" rx="1"/>
    <rect x="53" y="292" width="55" height="3" fill="white" opacity="0.5" rx="1"/>
    <rect x="53" y="298" width="65" height="3" fill="white" opacity="0.5" rx="1"/>
    <rect x="135" y="295" width="6" height="12" fill="#65a30d"/>
    <rect x="143" y="290" width="6" height="17" fill="#65a30d"/>
    <rect x="151" y="285" width="6" height="22" fill="#65a30d"/>
    <rect x="165" y="280" width="42" height="14" rx="2" fill="#dc2626" stroke="white" strokeWidth="1.5"/>
    <text x="186" y="290" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">SHIP IT</text>
    <rect x="36" y="316" width="188" height="8" rx="2" fill="#1a1a1a"/>
    <ellipse cx="130" cy="320" rx="10" ry="2" fill="#525252"/>

    {/* Pants */}
    <path d="M 75 290 Q 70 295 70 305 L 80 348 Q 80 354 88 354 L 108 354 Q 115 354 115 348 L 125 295 Z"
          fill="#1e3a8a" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round"/>
    <path d="M 185 290 Q 190 295 190 305 L 180 348 Q 180 354 172 354 L 152 354 Q 145 354 145 348 L 135 295 Z"
          fill="#1e3a8a" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round"/>
    <ellipse cx="92" cy="325" rx="8" ry="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="2,1"/>
    <ellipse cx="168" cy="325" rx="8" ry="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="2,1"/>

    {/* Sneakers */}
    <path d="M 75 354 Q 70 365 90 366 L 115 366 Q 118 366 118 358 L 115 354 Z"
          fill="white" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M 185 354 Q 190 365 170 366 L 145 366 Q 142 366 142 358 L 145 354 Z"
          fill="white" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round"/>
    <line x1="80" y1="360" x2="113" y2="360" stroke="#dc2626" strokeWidth="2.5"/>
    <line x1="147" y1="360" x2="180" y2="360" stroke="#dc2626" strokeWidth="2.5"/>
    <circle cx="85" cy="362" r="1.5" fill="#1a1a1a"/>
    <circle cx="175" cy="362" r="1.5" fill="#1a1a1a"/>
  </svg>
);

export const Grenade = ({ className = "", color = "#65a30d" }) => (
  <svg viewBox="0 0 60 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="8" width="16" height="8" fill="#9ca3af" stroke="#1a1a1a" strokeWidth="2"/>
    <circle cx="45" cy="12" r="6" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
    <ellipse cx="30" cy="45" rx="20" ry="25" fill={color} stroke="#1a1a1a" strokeWidth="3"/>
    <path d="M 18 35 Q 22 33 26 36 M 35 38 Q 39 36 43 39 M 20 50 Q 24 48 28 51 M 36 55 Q 40 53 44 56" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Star = ({ className = "", color = "#fbbf24" }) => (
  <svg viewBox="0 0 50 50" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 25 5 L 30 18 L 44 20 L 33 30 L 36 44 L 25 37 L 14 44 L 17 30 L 6 20 L 20 18 Z" fill={color} stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

export const Crosshair = ({ className = "" }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="22" fill="none" stroke="#dc2626" strokeWidth="3"/>
    <circle cx="30" cy="30" r="10" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
    <line x1="30" y1="2" x2="30" y2="18" stroke="#dc2626" strokeWidth="3"/>
    <line x1="30" y1="42" x2="30" y2="58" stroke="#dc2626" strokeWidth="3"/>
    <line x1="2" y1="30" x2="18" y2="30" stroke="#dc2626" strokeWidth="3"/>
    <line x1="42" y1="30" x2="58" y2="30" stroke="#dc2626" strokeWidth="3"/>
    <circle cx="30" cy="30" r="2" fill="#dc2626"/>
  </svg>
);

export const Boom = ({ text = "BOOM!", className = "", rotate = -8 }) => (
  <div className={`relative inline-block ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
    <svg viewBox="0 0 180 100" className="w-full h-full">
      <path d="M 10 50 L 25 30 L 30 45 L 50 20 L 55 40 L 75 15 L 80 38 L 100 12 L 105 35 L 125 18 L 130 42 L 150 25 L 155 48 L 170 35 L 160 55 L 175 65 L 155 70 L 165 88 L 145 78 L 140 95 L 120 80 L 115 95 L 95 78 L 85 92 L 70 75 L 55 88 L 50 70 L 30 80 L 25 62 L 5 65 Z"
        fill="#fbbf24" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round"/>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center font-black text-2xl tracking-tight" style={{ fontFamily: "'Permanent Marker', cursive", color: '#dc2626' }}>{text}</span>
  </div>
);

export const Lamp = ({ on = true, className = "" }) => (
  <svg viewBox="0 0 60 96" className={`${className} ${on ? 'lamp-glow' : ''}`} xmlns="http://www.w3.org/2000/svg">
    {/* Glow halo when on */}
    {on && <circle cx="30" cy="52" r="26" fill="#fbbf24" opacity="0.25"/>}

    {/* Cord from ceiling */}
    <line x1="30" y1="0" x2="30" y2="20" stroke="currentColor" strokeWidth="3"/>

    {/* Lamp shade */}
    <path d="M 14 20 L 46 20 L 40 40 L 20 40 Z"
          fill={on ? '#dc2626' : '#6b7280'} stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
    <line x1="14" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>

    {/* Bulb */}
    <circle cx="30" cy="50" r="11"
            fill={on ? '#fde047' : '#4b5563'} stroke="currentColor" strokeWidth="2.5"/>
    {/* Filament */}
    <path d="M 26 50 Q 30 44 34 50" stroke={on ? '#dc2626' : '#1f2937'} strokeWidth="1.8" fill="none"/>
    {/* Bulb screw base */}
    <rect x="25" y="59" width="10" height="6" rx="1" fill="currentColor"/>

    {/* Light rays when on */}
    {on && (
      <g stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
        <line x1="11" y1="50" x2="4" y2="50"/>
        <line x1="49" y1="50" x2="56" y2="50"/>
        <line x1="16" y1="36" x2="10" y2="30"/>
        <line x1="44" y1="36" x2="50" y2="30"/>
      </g>
    )}

    {/* Pull chain + knob */}
    <line x1="40" y1="48" x2="46" y2="74" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2"/>
    <circle cx="46" cy="78" r="5" fill={on ? '#fbbf24' : '#9ca3af'} stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);

export const Medal = ({ className = "" }) => (
  <svg viewBox="0 0 60 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 5 L 30 35 L 40 5" fill="#dc2626" stroke="#1a1a1a" strokeWidth="2"/>
    <circle cx="30" cy="50" r="20" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="3"/>
    <circle cx="30" cy="50" r="14" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
    <path d="M 30 42 L 32 48 L 38 48 L 33 52 L 35 58 L 30 54 L 25 58 L 27 52 L 22 48 L 28 48 Z" fill="#dc2626" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

import { Crosshair } from './Doodles.jsx';

// "LOADING MISSION..." boot splash shown on first paint.
export default function LoadingScreen() {
  return (
    <div className="splash">
      <div className="w-16 h-16 spin-slow">
        <Crosshair className="w-full h-full" />
      </div>
      <div className="font-marker text-2xl md:text-3xl tracking-wider">
        LOADING MISSION<span className="splash-blink">...</span>
      </div>
      <div className="splash-track">
        <div className="splash-fill"></div>
      </div>
      <div className="font-hand text-sm opacity-70">Arming doodles · briefing the stick hero</div>
    </div>
  );
}

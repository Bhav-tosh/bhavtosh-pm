import { useState, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import CurrentWork from './components/CurrentWork.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import OtherProjects from './components/OtherProjects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ShootingRange from './components/ShootingRange.jsx';
import MissionHUD from './components/MissionHUD.jsx';
import AchievementToaster from './components/AchievementToaster.jsx';
import { Grenade, Star } from './components/Doodles.jsx';

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 1950);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {booting && <LoadingScreen />}
      <ShootingRange />
      <MissionHUD />
      <AchievementToaster />

      {/* Floating decorations */}
      <div className="absolute top-32 right-8 w-16 h-20 float-anim opacity-60 pointer-events-none">
        <Grenade />
      </div>
      <div className="absolute top-96 left-4 w-14 h-14 spin-slow opacity-50 pointer-events-none hidden md:block">
        <Star color="#fbbf24" />
      </div>

      <Navigation />
      <Hero />
      <CurrentWork />
      <CaseStudies />
      <OtherProjects />
      <Skills />
      <Contact />

      <footer className="border-t-[3px] border-[#1a1a1a] bg-[#1a1a1a] text-[#f5edd6] py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-marker text-lg">
            🎯 Mission Accomplished · Built by <span className="text-[#fbbf24]">Bhavtosh</span>
          </div>
          <div className="font-hand text-sm text-[#a3a3a3]">
            © 2026 · Drawn with caffeine, not pixels.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Phone } from 'lucide-react';
import { ElegantHero } from './components/ElegantHero.tsx';
import { WhyChoose } from './components/WhyChoose.tsx';
import { Treatments } from './components/Treatments.tsx';
import { MeetDentist } from './components/MeetDentist.tsx';
import { ContactMap } from './components/ContactMap.tsx';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="dental-shell min-h-screen bg-[#f4ede2]">
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[80] h-1.5 w-full origin-left bg-[linear-gradient(90deg,#7c9272,#d0b088)] shadow-[0_3px_10px_rgba(72,56,36,0.25)]"
        style={{ scaleX: scrollProgress }}
      />

      <div aria-hidden="true" className="modern-orb modern-orb-a" />
      <div aria-hidden="true" className="modern-orb modern-orb-b" />
      <div aria-hidden="true" className="modern-orb modern-orb-c" />

      <ElegantHero />
      <WhyChoose />
      <Treatments />
      <MeetDentist />
      <ContactMap />

      <div className="fixed bottom-5 right-4 z-[70] flex flex-col gap-2 sm:bottom-7 sm:right-7">
        <a
          href="tel:+15551234567"
          className="flashy-fab flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flashy-fab-alt flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#4b4035]"
        >
          <CalendarDays className="h-4 w-4" />
          Book Visit
        </a>
      </div>
    </div>
  );
}
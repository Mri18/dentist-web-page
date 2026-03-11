import { ElegantHero } from './components/ElegantHero.tsx';
import { WhyChoose } from './components/WhyChoose.tsx';
import { Treatments } from './components/Treatments.tsx';
import { MeetDentist } from './components/MeetDentist.tsx';
import { ContactMap } from './components/ContactMap.tsx';

export default function App() {
  return (
    <div className="dental-shell min-h-screen bg-[#f4ede2]">
      <ElegantHero />
      <WhyChoose />
      <Treatments />
      <MeetDentist />
      <ContactMap />
    </div>
  );
}
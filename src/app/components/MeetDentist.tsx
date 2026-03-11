import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';
import clinicWaitingRoomImg from '../../assets/clinic-waiting-room.png';
import dentistPortraitImg from '../../assets/dentist-portrait.png';

const reviews = [
  {
    quote: 'I had a very comfortable experience. The whole team made me feel relaxed from start to finish.',
    author: 'Amanda R.',
  },
  {
    quote: 'The clinic is calm, clean, and modern. Dr. Sarah explained every step clearly and gently.',
    author: 'Daniel K.',
  },
  {
    quote: 'Best dental visit I have ever had. Friendly staff, painless treatment, and excellent aftercare.',
    author: 'Priya M.',
  },
];

export function MeetDentist() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f7efe3] py-12 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(127,159,112,0.2),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(208,176,132,0.24),transparent_72%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-7 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-[1.8rem] border border-[#d8c8b2] bg-[#f7efe4] p-2 shadow-[0_14px_30px_rgba(76,56,32,0.15)]">
            <div
              className="h-[16.5rem] rounded-[1.3rem] bg-cover bg-center bg-no-repeat sm:h-[23rem] lg:h-[29rem]"
              style={{ backgroundImage: `url('${clinicWaitingRoomImg}')` }}
              role="img"
              aria-label="Clinic waiting room"
            />
          </div>

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8c8b2] bg-[#f8f1e6] px-4 py-1.5 text-sm text-[#6f6459]">
              <Sparkles className="h-4 w-4 text-[#7f946f]" />
              Trusted Family Care
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="dental-heading mb-4 text-4xl sm:text-5xl lg:text-[4rem]">
              Meet Your Dentist
            </h2>

            <article className="rounded-2xl border border-[#d8c8b2] bg-[linear-gradient(140deg,#fbf5ea,#f4eadb)] p-4 shadow-[0_14px_28px_rgba(76,56,32,0.14)]">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div
                  className="h-24 w-24 rounded-xl border border-[#d3c2ac] bg-cover bg-center bg-no-repeat shadow-md"
                  style={{ backgroundImage: `url('${dentistPortraitImg}')` }}
                  role="img"
                  aria-label="Dr Sarah Smith"
                />

                <div className="flex-1">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl leading-none text-[#443a31] sm:text-[2.15rem]">
                    Dr. Sarah Smith, <span className="text-[1.2rem]">BDS, MDS</span>
                  </h3>
                  <p className="mt-1 text-[0.95rem] text-[#6c6053]">10+ Years Experience</p>
                  <p className="text-[0.95rem] text-[#6c6053]">Cosmetic & Implant Specialist</p>

                  <button className="dental-primary-btn mt-3 px-7 py-2.5 text-sm">View Profile</button>
                </div>
              </div>
            </article>

            <article className="mt-4 rounded-2xl border border-[#dbcab3] bg-[#f8f1e6] px-5 py-4 shadow-[0_10px_22px_rgba(73,57,37,0.12)]">
              <div className="mb-2 flex items-center gap-1 text-[#d8ad57]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#d8ad57]" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="text-[0.95rem] text-[#5f5449]">{reviews[activeReview].quote}</p>
                  <p className="mt-2 text-sm font-medium text-[#776a5d]">{reviews[activeReview].author}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-3 flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    onClick={() => setActiveReview(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeReview === index ? 'w-7 bg-[#7e907c]' : 'w-2.5 bg-[#cdb9a1] hover:bg-[#bca78e]'
                    }`}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

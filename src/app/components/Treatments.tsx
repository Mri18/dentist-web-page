import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const treatments = [
  {
    title: 'Root Canal Treatment',
    description: 'Spa-like clinic with a soothing atmosphere.',
  },
  {
    title: 'Dental Implants',
    description: 'Warm, welcoming and attentive to your needs.',
  },
  {
    title: 'Teeth Whitening',
    description: 'Highly qualified experienced dental professionals.',
  },
];

export function Treatments() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f2e8d8] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center"
        >
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="dental-heading mb-3 text-4xl sm:text-5xl lg:text-[4rem]">
            Our Dental Treatments
          </h2>
          <p className="dental-copy mx-auto max-w-3xl text-[1.05rem]">
            Comprehensive dental care for the whole family. Explore our wide range of services
            tailored to meet your needs for effective care.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[#dbcab3] bg-[#f8f1e6] px-5 py-4 shadow-[0_7px_18px_rgba(66,53,36,0.1)]"
            >
              <div className="mb-2 flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8dcc8] text-[#7d6f5d]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[1.7rem] leading-none text-[#433830] sm:text-[2rem]">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] text-[#685e53]">{treatment.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

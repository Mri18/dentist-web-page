import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import dentistTreatmentImg from '../../assets/dentist-treatment.png';

const features = ['Painless care', 'Modern clinic', 'Certified experts'];

export function ElegantHero() {
  return (
    <section className="relative overflow-hidden bg-[#f3ecdf] pt-10 pb-10 sm:pt-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="z-10 lg:pl-4"
          >
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="dental-heading mb-4 text-[2.8rem] leading-[0.95] sm:text-6xl lg:text-[4.15rem]"
            >
              Gentle Dental Care,
              <br />
              Designed for Comfort
            </h1>

            <p className="dental-copy mb-6 max-w-xl text-base sm:text-[1.35rem]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Premium, painless & family-friendly dental care
              <br />
              to make your visit as calm and pleasant as possible.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+15551234567"
                className="dental-primary-btn min-w-40 text-center"
                aria-label="Call to book appointment"
              >
                Book Appointment
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="dental-secondary-btn min-w-40 text-center"
              >
                View Treatments
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#5f554a]">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.35, delay: 0.12 * index }}
                  className="flex items-center gap-2 text-[1rem]"
                >
                  <Check className="h-4 w-4 text-[#7c9073]" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="watercolor-frame relative overflow-hidden rounded-[1.75rem] border border-[#dacbb8] bg-[#f7efe5] p-2 shadow-[0_12px_30px_rgba(75,58,36,0.16)]"
          >
            <div
              className="h-[18rem] rounded-[1.35rem] bg-cover bg-center bg-no-repeat sm:h-[22rem] lg:h-[28.5rem]"
              style={{ backgroundImage: `url('${dentistTreatmentImg}')` }}
              role="img"
              aria-label="Dentist treatment"
            />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(236,226,211,0)_46%,rgba(236,226,211,0.82)_78%,#efe5d5_100%)]" />
    </section>
  );
}

export default ElegantHero;

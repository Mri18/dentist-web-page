import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-[#f2e9db] py-12 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(126,144,124,0.2),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(200,170,132,0.22),transparent_72%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center"
        >
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="dental-heading text-4xl sm:text-5xl lg:text-[4rem]">
            Book Your Visit
          </h2>
          <p className="dental-copy mt-2 text-[1.02rem]">Quick appointment form with clinic location.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-[#d8c8b2] bg-[#f8f1e6] p-5 shadow-[0_12px_28px_rgba(74,57,36,0.12)] sm:p-6"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-[#6e6255]">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#d8c8b2] bg-[#fffaf2] px-4 py-2.5 text-[#463b33] outline-none ring-[#93a587] transition focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm text-[#6e6255]">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +1 555 123 4567"
                  className="w-full rounded-xl border border-[#d8c8b2] bg-[#fffaf2] px-4 py-2.5 text-[#463b33] outline-none ring-[#93a587] transition focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-[#6e6255]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us your concern"
                  className="w-full resize-none rounded-xl border border-[#d8c8b2] bg-[#fffaf2] px-4 py-2.5 text-[#463b33] outline-none ring-[#93a587] transition focus:ring-2"
                />
              </div>

              <button type="submit" className="dental-primary-btn w-full sm:w-auto">
                Send Request
              </button>
            </form>

            <div className="mt-5 space-y-2 border-t border-[#decebb] pt-4 text-sm text-[#65594d]">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#7f946f]" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#7f946f]" /> hello@brightsmile.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#7f946f]" /> 123 Main Street, Anytown</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -3 }}
            className="overflow-hidden rounded-2xl border border-[#d8c8b2] bg-[#f8f1e6] p-2 shadow-[0_12px_28px_rgba(74,57,36,0.12)]"
          >
            <div className="watercolor-frame h-[20rem] overflow-hidden rounded-[1rem] sm:h-[24rem] lg:h-full">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps?q=123+Main+Street,+Anytown&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

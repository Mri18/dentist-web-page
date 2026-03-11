import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient since 2019',
    image: 'https://images.unsplash.com/photo-1762613875432-1b80b1682905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODU3OTIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Dr. Smith and his team are absolutely wonderful! They made me feel comfortable during my entire treatment. My smile has never looked better!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Patient since 2020',
    image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxlfGVufDF8fHx8MTc2ODUwMTMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'I used to be terrified of the dentist, but Bright Smile Dental changed that completely. The staff is caring, professional, and the facility is top-notch.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient since 2018',
    image: 'https://images.unsplash.com/photo-1758205307916-4d302e3819f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwdGVhbXxlbnwxfHx8fDE3Njg1NDgwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Best dental experience I have ever had! The cosmetic work they did exceeded my expectations. Highly recommend to anyone looking for quality dental care.',
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">What Our Patients Say</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy patients
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative"
          >
            <Quote className="absolute top-8 left-8 w-16 h-16 text-white/20" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <ImageWithFallback
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-6 text-white leading-relaxed"
                >
                  "{testimonials[activeIndex].text}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-xl mb-1">{testimonials[activeIndex].name}</h4>
                  <p className="text-white/70">{testimonials[activeIndex].role}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <span className="text-2xl text-white">←</span>
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <span className="text-2xl text-white">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Sparkles, Shield, Smile, Crown, Stethoscope, Baby } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter smile in just one visit.',
    price: 'From $299',
    image: 'https://images.unsplash.com/photo-1657313611122-ebd55f4b406a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZyUyMHJlc3VsdHxlbnwxfHx8fDE3Njg1NzY0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Regular check-ups and cleanings to maintain optimal oral health.',
    price: 'From $99',
    image: 'https://images.unsplash.com/photo-1588776814601-a454a8e3a940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGVhbmluZyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3Njg1ODAxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic procedures.',
    price: 'From $799',
    image: 'https://images.unsplash.com/photo-1699620373942-40932731f77f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGRlbnRpc3RyeSUyMHZlbmVlcnN8ZW58MXx8fHwxNzY4NTcxMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Crown,
    title: 'Restorative Care',
    description: 'Crowns, bridges, and implants to restore function and appearance.',
    price: 'From $1,199',
    image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzY4NTgwMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Care',
    description: 'Same-day appointments available for dental emergencies 24/7.',
    price: 'Call Us',
    image: 'https://images.unsplash.com/photo-1643660527078-743fc7c9f857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBkZW50YWwlMjBjYXJlfGVufDF8fHx8MTc2ODQ2NTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Gentle, compassionate care for children in a fun environment.',
    price: 'From $79',
    image: 'https://images.unsplash.com/photo-1758205308172-fc864545dcf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBjaGlsZCUyMGRlbnRpc3R8ZW58MXx8fHwxNzY4NTgwMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-teal-500',
  },
];

const timeFilters = ['Week', 'Month', 'Year'];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedFilter, setSelectedFilter] = useState('Month');

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-2">Our Services</h2>
            <p className="text-gray-600">Track your progress and compare with your peers</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex gap-2 mt-4 md:mt-0"
          >
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#4F5FDB] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40`}></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-[#4F5FDB]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl">{service.title}</h3>
                    <span className="text-[#4F5FDB] px-3 py-1 bg-[#4F5FDB]/10 rounded-lg text-sm">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#4F5FDB] text-white py-3 rounded-xl hover:bg-[#4050C7] transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
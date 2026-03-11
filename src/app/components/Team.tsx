import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Award, GraduationCap, Heart } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Dentist & Founder',
    image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTgwMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Cosmetic & Restorative Dentistry',
    experience: '25+ years',
  },
  {
    name: 'Dr. James Cooper',
    role: 'Senior Orthodontist',
    image: 'https://images.unsplash.com/photo-1612943733919-f9661f1331f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTQ4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Orthodontics & Smile Design',
    experience: '18+ years',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5pc3QlMjB3b21hbnxlbnwxfHx8fDE3Njg1ODAxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Preventive Care & Patient Education',
    experience: '12+ years',
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="py-12 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

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
            className="inline-block text-[#0EA5E9] mb-4 px-4 py-2 rounded-full bg-[#0EA5E9]/10"
          >
            Our Team
          </motion.span>
          <h2 className="text-4xl lg:text-5xl mb-4">Meet Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team is dedicated to providing you with the best dental care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl mb-1">{member.name}</h3>
                    <p className="text-[#0EA5E9] mb-3">{member.role}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{member.specialty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Award className="w-7 h-7 text-[#0EA5E9]" />
                  </motion.div>
                </div>

                {/* Experience Card */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Experience</div>
                        <div className="font-medium text-gray-900">{member.experience}</div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-lg hover:bg-[#0EA5E9] hover:text-white transition-colors text-sm"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="text-gray-700">Join our team of over 20 dental professionals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
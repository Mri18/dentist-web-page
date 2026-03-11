import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Clock, Award, Sparkles, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Insurance Accepted',
    description: 'We work with all major insurance providers',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency dental care',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in dentistry',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'Latest Technology',
    description: 'State-of-the-art dental equipment',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Patient Focused',
    description: 'Your comfort is our top priority',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Quick Appointments',
    description: 'Same-day appointments available',
    color: 'from-green-500 to-teal-500',
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl lg:text-5xl mb-4">What Makes Us Different</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience dental care that goes beyond expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Icon with Gradient */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                  </motion.div>

                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>

                  {/* Hover Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

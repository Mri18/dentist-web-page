import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Happy Patients',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Years Experience',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Emergency Care',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Heart,
    value: '98%',
    label: 'Satisfaction Rate',
    color: 'from-pink-500 to-pink-600',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
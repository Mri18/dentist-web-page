import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const topDentists = [
  { rank: 1, name: 'Dr. Sarah Mitchell', patients: 487, rating: 4.9, badge: '🥇' },
  { rank: 2, name: 'Dr. James Cooper', patients: 456, rating: 4.9, badge: '🥈' },
  { rank: 3, name: 'Dr. Emily Rodriguez', patients: 423, rating: 4.8, badge: '🥉' },
  { rank: 4, name: 'Dr. Michael Chen', patients: 398, rating: 4.8, badge: '' },
  { rank: 5, name: 'Dr. Lisa Anderson', patients: 367, rating: 4.7, badge: '' },
];

const locations = [
  { rank: 1, name: 'Downtown Clinic', patients: 1847, avgRating: '4.9 pts', badge: '🥇' },
  { rank: 2, name: 'Northside Office', patients: 1623, avgRating: '4.8 pts', badge: '🥈' },
  { rank: 3, name: 'Westend Branch', patients: 1456, avgRating: '4.8 pts', badge: '🥉' },
];

export function Leaderboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Top Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* My Score Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">MY SCORE</div>
                <div className="text-3xl">4.8</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+0.2 from last month</span>
            </div>
          </div>

          {/* My Rank Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">MY RANK</div>
                <div className="text-3xl">#4</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Top 10% in your region
            </div>
          </div>
        </motion.div>

        {/* Top 10 Performers Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Top 10 Performers</span>
        </motion.div>

        {/* Dentist Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl">Dentist Leaderboard</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#4F5FDB] text-white">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Name</th>
                  <th className="py-4 px-6 text-center">Patients</th>
                  <th className="py-4 px-6 text-center">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topDentists.map((dentist, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {dentist.badge && <span className="text-xl">{dentist.badge}</span>}
                        <span className="text-[#4F5FDB]">#{dentist.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{dentist.name}</td>
                    <td className="py-4 px-6 text-center">{dentist.patients}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm">{dentist.rating}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Location Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-xl">Location Leaderboard</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-[#4F5FDB] text-white rounded-lg flex items-center justify-center hover:bg-[#4050C7] transition-colors">
                1
              </button>
              <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                2
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#4F5FDB] text-white">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Location Name</th>
                  <th className="py-4 px-6 text-center">Total Patients</th>
                  <th className="py-4 px-6 text-center">Avg Rating</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {location.badge && <span className="text-xl">{location.badge}</span>}
                        <span className="text-[#4F5FDB]">#{location.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{location.name}</td>
                    <td className="py-4 px-6 text-center">{location.patients}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-orange-600">{location.avgRating}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

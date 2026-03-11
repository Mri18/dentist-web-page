import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, Trophy } from 'lucide-react';

const employeeData = [
  { rank: 1, name: 'Dr. Sarah Mitchell', score: '487 pts', medal: '🥇' },
  { rank: 2, name: 'Dr. James Cooper', score: '456 pts', medal: '🥈' },
  { rank: 3, name: 'Dr. Emily Rodriguez', score: '423 pts', medal: '🥉' },
  { rank: 4, name: 'Dr. Michael Chen', score: '398 pts', medal: '' },
  { rank: 5, name: 'Dr. Lisa Anderson', score: '367 pts', medal: '' },
];

const enterpriseData = [
  { rank: 1, name: 'Pune', employees: 67, avgScore: '0 pts', medal: '🥇' },
  { rank: 2, name: 'Baddi', employees: 270, avgScore: '0 pts', medal: '🥈' },
  { rank: 3, name: 'Bangalore', employees: 76, avgScore: '0 pts', medal: '🥉' },
];

const timeFilters = ['Week', 'Month', 'Year'];

export function PerformanceDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedFilter, setSelectedFilter] = useState('Week');
  const [activePage, setActivePage] = useState(1);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header with Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl text-[#5B6CDE] mb-1">Performance Dashboard</h2>
          <p className="text-sm text-gray-600">Track your progress and compare with your team 🚀</p>
        </motion.div>

        {/* Filters, Score Cards, and Enterprise Selector in One Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-6"
        >
          {/* Time Filter Buttons */}
          <div className="flex gap-2">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-lg text-sm transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#5B6CDE] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* My Score Card */}
          <div className="bg-white rounded-lg px-5 py-2 shadow-sm border border-gray-200 flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">My Score</div>
              <div className="text-xl">0</div>
            </div>
          </div>

          {/* My Rank Card */}
          <div className="bg-white rounded-lg px-5 py-2 shadow-sm border border-gray-200 flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">My Rank</div>
              <div className="text-xl">-</div>
            </div>
          </div>

          {/* Enterprise Selector */}
          <select className="ml-auto px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5B6CDE]">
            <option>Select Enterprise</option>
            <option>Pune</option>
            <option>Baddi</option>
            <option>Bangalore</option>
          </select>
        </motion.div>

        {/* Top 10 Performers Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Top 10 Performers</span>
        </motion.div>

        {/* Employee Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-base font-medium">Employee Leaderboard</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#5B6CDE] text-white">
                  <th className="py-3 px-6 text-left text-sm font-medium">Rank</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Name</th>
                  <th className="py-3 px-6 text-right text-sm font-medium">Score</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        {employee.medal && <span className="text-lg">{employee.medal}</span>}
                        <span className="text-[#5B6CDE] font-medium">{employee.rank}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-gray-800">{employee.name}</td>
                    <td className="py-3 px-6 text-right text-gray-800">{employee.score}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enterprise Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-medium">Enterprise Leaderboard</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setActivePage(1)}
                className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                  activePage === 1
                    ? 'bg-[#5B6CDE] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setActivePage(2)}
                className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                  activePage === 2
                    ? 'bg-[#5B6CDE] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                2
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#5B6CDE] text-white">
                  <th className="py-3 px-6 text-left text-sm font-medium">Rank</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Enterprise Name</th>
                  <th className="py-3 px-6 text-center text-sm font-medium">Total Employees</th>
                  <th className="py-3 px-6 text-right text-sm font-medium">Avg Score</th>
                </tr>
              </thead>
              <tbody>
                {enterpriseData.map((enterprise, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        {enterprise.medal && <span className="text-lg">{enterprise.medal}</span>}
                        <span className="text-[#5B6CDE] font-medium">{enterprise.rank}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-gray-800">{enterprise.name}</td>
                    <td className="py-3 px-6 text-center text-gray-800">{enterprise.employees}</td>
                    <td className="py-3 px-6 text-right text-orange-600 font-medium">{enterprise.avgScore}</td>
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

import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

function Practice() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [interviewType, setInterviewType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');

  // Mock data for previous results (replace with actual API data)
  const mockResults = [
    { id: 1, type: 'Technical', date: '2025-04-20', score: 85 },
    { id: 2, type: 'HR', date: '2025-04-15', score: 90 },
  ];

  const handleStartPractice = () => {
    setIsPopupOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ interviewType, difficulty, duration, experienceLevel });
    setIsPopupOpen(false);
    // Add logic to start practice session here
  };

  // Function to calculate dash offset for progress circle
  const getDashOffset = (score) => {
    const circumference = 2 * Math.PI * 45; // Radius of 45px
    return circumference - (score / 100) * circumference;
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <PageHeader
          title="Practice"
          description="Improve your skills through practice sessions"
        />

        {/* Start Practicing Card */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Practice?</h2>
            <button
              onClick={handleStartPractice}
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            >
              Start Practicing
            </button>
          </div>
        </div>

        {/* Previous Results Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Your Progress</h2>
          {mockResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockResults.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {result.type}
                    </span>
                    <span className="text-sm text-gray-500">{result.date}</span>
                  </div>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e0e0e0"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#4B5EFC"
                        strokeWidth="8"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={getDashOffset(result.score)}
                        style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                      />
                      <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dy="0.3em"
                        className="text-2xl font-bold text-indigo-600"
                      >
                        {result.score}%
                      </text>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No previous mock interview results yet.</p>
          )}
        </div>

        {/* Popup for Practice Details */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: 50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.9 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Configure Your Practice</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Interview Type</label>
                    <select
                      value={interviewType}
                      onChange={(e) => setInterviewType(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="technical">Technical</option>
                      <option value="hr">HR</option>
                      <option value="management">Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      required
                    >
                      <option value="">Select Difficulty</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      required
                    >
                      <option value="">Select Duration</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Experience Level</label>
                    <select
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="fresher">Fresher</option>
                      <option value="mid-level">Mid-level</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(false)}
                      className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Start
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
}

export default Practice;
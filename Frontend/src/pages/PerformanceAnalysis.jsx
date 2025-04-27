import React from 'react'
import PageHeader from '../components/shared/PageHeader'
import Layout from '../components/layout/Layout'
import { motion } from 'framer-motion'

function PerformanceAnalysis() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <PageHeader
          title="Performance Analysis"
          description="Track your interview performance and progress"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Score Overview Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Overall Performance</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Communication</span>
                  <span className="text-sm font-medium text-gray-900">85%</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Domain Knowledge</span>
                  <span className="text-sm font-medium text-gray-900">78%</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Problem Solving</span>
                  <span className="text-sm font-medium text-gray-900">92%</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Confidence</span>
                  <span className="text-sm font-medium text-gray-900">88%</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Improvement Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Areas for Improvement</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                <span className="ml-2 text-sm text-gray-500">Work on technical terminology usage</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                <span className="ml-2 text-sm text-gray-500">Improve response time for algorithmic questions</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                <span className="ml-2 text-sm text-gray-500">Practice system design explanations</span>
              </li>
            </ul>
          </div>

          {/* Interview History */}
          <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Interview History</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-01-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Technical</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-01-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HR</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default PerformanceAnalysis
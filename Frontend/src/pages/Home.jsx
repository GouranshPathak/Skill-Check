import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
  const { currentUser } = useAuth()
  const [recentInterviews] = useState([
    {
      id: 1,
      title: 'Software Engineering Interview',
      date: '2025-02-15',
      score: 85,
      domain: 'Technical'
    },
    {
      id: 2,
      title: 'HR Introduction Interview',
      date: '2025-02-10',
      score: 92,
      domain: 'HR'
    }
  ])

  const [recommendedPractice] = useState([
    {
      id: 1,
      title: 'Object-Oriented Programming',
      description: 'Practice fundamental OOP concepts and implementation',
      difficulty: 'Medium',
      questions: 15
    },
    {
      id: 2,
      title: 'System Design Basics',
      description: 'Learn how to approach and solve system design questions',
      difficulty: 'Hard',
      questions: 10
    },
    {
      id: 3,
      title: 'Behavioral Questions',
      description: 'Common behavioral questions for software roles',
      difficulty: 'Easy',
      questions: 20
    }
  ])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome back, {currentUser?.name || 'User'}!
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to improve your interview skills today? Start a new practice session or continue where you left off.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/interview" className="btn bg-white text-primary-600 hover:bg-neutral-100 py-3 px-8 text-base">
                Start New Interview
              </Link>
              <Link to="/practice" className="btn border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-base">
                Practice Questions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section 
        className="py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Overview */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Your Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Interviews Completed</p>
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">7</p>
                  </div>
                  <div className="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-4">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Practice Sessions</p>
                    <p className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">12</p>
                  </div>
                  <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Average Score</p>
                    <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">82%</p>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Recent Interviews</h3>
                {recentInterviews.length > 0 ? (
                  <div className="space-y-3">
                    {recentInterviews.map(interview => (
                      <div 
                        key={interview.id} 
                        className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium text-neutral-800 dark:text-neutral-200">{interview.title}</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{interview.date} · {interview.domain}</p>
                        </div>
                        <div className="flex items-center">
                          <div className={`text-sm font-medium px-2 py-1 rounded-md ${
                            interview.score >= 90 ? 'bg-success-100 dark:bg-success-900/20 text-success-800 dark:text-success-400' :
                            interview.score >= 70 ? 'bg-warning-100 dark:bg-warning-900/20 text-warning-800 dark:text-warning-400' :
                            'bg-error-100 dark:bg-error-900/20 text-error-800 dark:text-error-400'
                          }`}>
                            {interview.score}/100
                          </div>
                          <Link to={`/performance#interview-${interview.id}`} className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-neutral-500 dark:text-neutral-400">
                    <p>No interviews completed yet. Start your first interview!</p>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <Link to="/performance" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                    View all performance data
                    <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              {/* Profile Card */}
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xl font-semibold">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 dark:text-white">{currentUser?.name || 'User'}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{currentUser?.email || 'user@example.com'}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Profile Completion</span>
                    <span className="text-neutral-900 dark:text-white font-medium">40%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/profile" className="w-full btn-outline py-2 text-center block">
                    Complete Profile
                  </Link>
                </div>
              </div>

              {/* Tips Card */}
              <div className="card p-6 bg-accent-50 dark:bg-accent-900/10 border border-accent-100 dark:border-accent-900/20">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Interview Tip</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  When answering behavioral questions, use the STAR method: Situation, Task, Action, and Result to structure your response for maximum impact.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-sm text-accent-600 dark:text-accent-400 font-medium flex items-center hover:text-accent-700 dark:hover:text-accent-300">
                    Get more tips
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recommended Practice */}
          <motion.div variants={itemVariants} className="mt-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Recommended Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedPractice.map(practice => (
                <div 
                  key={practice.id} 
                  className="card hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-neutral-900 dark:text-white">{practice.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        practice.difficulty === 'Easy' ? 'bg-success-100 dark:bg-success-900/20 text-success-800 dark:text-success-400' :
                        practice.difficulty === 'Medium' ? 'bg-warning-100 dark:bg-warning-900/20 text-warning-800 dark:text-warning-400' :
                        'bg-error-100 dark:bg-error-900/20 text-error-800 dark:text-error-400'
                      }`}>
                        {practice.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {practice.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {practice.questions} questions
                      </span>
                      <Link 
                        to={`/practice/${practice.id}`} 
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                      >
                        Start practice
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/practice" className="btn-outline inline-block">
                View All Practice Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary-600 mr-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-bold text-xl text-primary-700">Skill Check</span>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-primary-600 text-sm">About</Link>
              <Link to="/help" className="text-gray-600 hover:text-primary-600 text-sm">Help</Link>
              <Link to="/signin" className="text-gray-600 hover:text-primary-600 text-sm">Sign In</Link>
              <Link to="/signup" className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 text-sm">Sign Up</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-4"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Ace Your Interviews with Skill Check
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            Practice with AI-driven mock interviews and get personalized feedback to level up your preparation.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
          >
            <Link 
              to="/signup" 
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Skill Check. All rights reserved.
      </footer>
    </div>
  )
}

export default LandingPage

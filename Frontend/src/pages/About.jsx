import PageHeader from '../components/shared/PageHeader';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          <PageHeader
            title="About Skill Check"
            description="Revolutionizing interview preparation with AI-powered mock interviews"
          />
        </motion.div>
        
        <div className="prose dark:prose-invert max-w-none">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="my-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At Skill Check, we believe everyone deserves the opportunity to showcase their true potential in job interviews. 
              Our AI-powered platform is designed to help candidates practice, refine, and master their interview skills 
              in a supportive, realistic environment.
            </p>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">How It Works</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Skill Check uses advanced artificial intelligence to conduct mock interviews that feel remarkably similar to real interviews. 
              Our system adapts to your responses in real-time, creating a dynamic conversation that helps you prepare for the 
              unpredictability of actual interviews.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 text-center overflow-hidden transform transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-100 to-transparent opacity-50"></div>
                <div className="relative h-16 w-16 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Personalized Preparation</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Customize your mock interviews based on industry, experience level, and specific roles.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 text-center overflow-hidden transform transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100 to-transparent opacity-50"></div>
                <div className="relative h-16 w-16 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Detailed Feedback</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Receive comprehensive feedback on your responses, including strengths and areas for improvement.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 text-center overflow-hidden transform transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-teal-100 to-transparent opacity-50"></div>
                <div className="relative h-16 w-16 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Progress Tracking</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Monitor your improvement over time with detailed analytics and performance metrics.
                </p>
              </motion.div>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Technology</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Skill Check combines natural language processing, machine learning, and behavioral analysis to create 
              a sophisticated AI interviewer. Our technology evaluates not just what you say, but how you communicate it, 
              providing insights into both technical knowledge and soft skills.
            </p>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-md transform transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Accessibility</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  We believe quality interview preparation should be available to everyone, regardless of background or resources.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-md transform transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Continuous Improvement</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  We're constantly refining our AI to provide more accurate, helpful feedback and more realistic interview experiences.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-md transform transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Privacy</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your data and practice sessions are confidential. We use advanced security measures to protect your information.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-md transform transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Diversity & Inclusion</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our platform is designed to eliminate bias and provide fair, objective feedback to all users.
                </p>
              </motion.div>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Skill Check was founded by a team of HR professionals, tech experts, and career coaches who recognized 
              the need for more accessible, comprehensive interview preparation tools. Our diverse backgrounds allow us 
              to approach interview training from multiple perspectives, creating a well-rounded platform.
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
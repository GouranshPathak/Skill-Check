import { useState } from 'react'
import PageHeader from '../components/shared/PageHeader'

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq')
  
  return (
    <div>
      <PageHeader
        title="Help & Support"
        description="Find answers to common questions and get the support you need"
      />
      
      <div className="container-narrow py-12">
        <div className="mb-10 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'faq'
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-b-2 border-primary-600'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-b border-neutral-200 dark:border-neutral-700'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'contact'
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-b-2 border-primary-600'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-b border-neutral-200 dark:border-neutral-700'
              }`}
            >
              Contact Support
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'resources'
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-b-2 border-primary-600'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-b border-neutral-200 dark:border-neutral-700'
              }`}
            >
              Resources
            </button>
          </nav>
        </div>
        
        {activeTab === 'faq' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  How does the AI interviewer work?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Our AI interviewer uses natural language processing to understand your responses to questions. 
                  It analyzes your answers for content, clarity, confidence, and relevance, then provides feedback 
                  based on industry standards and best practices for interviewing.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Can I customize the interview for specific roles?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Yes! When starting a new interview, you can select the job domain (e.g., Software Engineering, Marketing),
                  experience level, and even specify particular skills you want to focus on. The AI will then generate 
                  questions tailored to your selections.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Is my interview data secure?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  We take data privacy very seriously. All your interview sessions and personal information are encrypted 
                  and stored securely. We do not share your data with third parties, and you can delete your data at any time 
                  from your profile settings.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Can I access my previous interview recordings?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Yes, all your past interviews are stored in your account. You can access them from the Performance section, 
                  where you'll find the full transcript, feedback, and scores. This allows you to track your progress over time.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  How accurate is the AI feedback?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Our AI has been trained on thousands of real interview scenarios and responses. The feedback is designed 
                  to be constructive and actionable, focusing on both strengths and areas for improvement. While no AI can 
                  perfectly replicate human judgment, our system provides valuable insights that help users significantly 
                  improve their interview performance.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Do you offer any free trial options?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Yes, we offer a limited free tier that allows you to experience the core features of Skill Check. 
                  This includes access to basic practice questions and one full mock interview. To unlock all features, 
                  including unlimited interviews and detailed performance analytics, you can upgrade to our premium plan.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Contact Support</h2>
            
            <div className="card p-6 mb-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="input"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">For non-urgent inquiries</p>
                <a href="mailto:support@skillcheck.com" className="text-primary-600 dark:text-primary-400 font-medium">
                  support@skillcheck.com
                </a>
              </div>
              
              <div className="card p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center text-accent-600 dark:text-accent-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Available Monday-Friday, 9am-5pm ET</p>
                <button className="btn-accent">Start Chat</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="card overflow-hidden">
                <div className="h-40 bg-primary-600">
                  <div className="h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Interview Guides</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Comprehensive guides for different interview types and roles, including common questions and best practices.
                  </p>
                  <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                    Browse Guides
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="h-40 bg-secondary-600">
                  <div className="h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Tutorial Videos</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Video tutorials on using Skill Check features and improving your interview techniques.
                  </p>
                  <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                    Watch Videos
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Popular Articles</h3>
            <div className="space-y-3 mb-8">
              <a href="#" className="block card p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-neutral-900 dark:text-white font-medium">10 Tips for Answering Behavioral Questions</span>
                </div>
              </a>
              
              <a href="#" className="block card p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-neutral-900 dark:text-white font-medium">How to Prepare for Technical Interviews</span>
                </div>
              </a>
              
              <a href="#" className="block card p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-neutral-900 dark:text-white font-medium">Using Skill Check's Performance Analytics</span>
                </div>
              </a>
              
              <a href="#" className="block card p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-neutral-900 dark:text-white font-medium">Body Language Tips for Video Interviews</span>
                </div>
              </a>
              
              <a href="#" className="block card p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-neutral-900 dark:text-white font-medium">Questions to Ask Your Interviewer</span>
                </div>
              </a>
            </div>
            
            <div className="card p-6 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Can't find what you need?</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Our community forum is filled with helpful discussions and tips from other users.
              </p>
              <a href="#" className="btn-outline inline-block">Visit Community Forum</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Help
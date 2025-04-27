import PageHeader from '../components/shared/PageHeader'

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Skill Check"
        description="Revolutionizing interview preparation with AI-powered mock interviews"
      />
      
      <div className="container-narrow py-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p className="lead">
            At Skill Check, we believe everyone deserves the opportunity to showcase their true potential in job interviews. 
            Our AI-powered platform is designed to help candidates practice, refine, and master their interview skills 
            in a supportive, realistic environment.
          </p>
          
          <h2>How It Works</h2>
          <p>
            Skill Check uses advanced artificial intelligence to conduct mock interviews that feel remarkably similar to real interviews. 
            Our system adapts to your responses in real-time, creating a dynamic conversation that helps you prepare for the 
            unpredictability of actual interviews.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="card p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Personalized Preparation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Customize your mock interviews based on industry, experience level, and specific roles.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-secondary-100 dark:bg-secondary-900/40 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Detailed Feedback</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Receive comprehensive feedback on your responses, including strengths and areas for improvement.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center text-accent-600 dark:text-accent-400 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Progress Tracking</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Monitor your improvement over time with detailed analytics and performance metrics.
              </p>
            </div>
          </div>
          
          <h2>Our Technology</h2>
          <p>
            Skill Check combines natural language processing, machine learning, and behavioral analysis to create 
            a sophisticated AI interviewer. Our technology evaluates not just what you say, but how you communicate it, 
            providing insights into both technical knowledge and soft skills.
          </p>
          
          <h2>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We believe quality interview preparation should be available to everyone, regardless of background or resources.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We're constantly refining our AI to provide more accurate, helpful feedback and more realistic interview experiences.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Privacy</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Your data and practice sessions are confidential. We use advanced security measures to protect your information.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Diversity & Inclusion</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our platform is designed to eliminate bias and provide fair, objective feedback to all users.
              </p>
            </div>
          </div>
          
          <h2>Our Team</h2>
          <p>
            Skill Check was founded by a team of HR professionals, tech experts, and career coaches who recognized 
            the need for more accessible, comprehensive interview preparation tools. Our diverse backgrounds allow us 
            to approach interview training from multiple perspectives, creating a well-rounded platform.
          </p>
          
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-2">Join Us on Our Mission</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Ready to transform your interview performance? Start practicing with Skill Check today.
            </p>
            <a href="/signup" className="btn-primary inline-block">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import PageHeader from '../components/shared/PageHeader'
import Layout from '../components/layout/Layout'
import { motion } from 'framer-motion'

function Practice() {
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
        <div className="mt-8">
          {/* Practice page content will go here */}
          <p className="text-gray-600">Practice page content coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Practice
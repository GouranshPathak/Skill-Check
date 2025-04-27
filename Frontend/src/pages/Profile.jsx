import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/shared/PageHeader'

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <PageHeader title="Profile" />
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        {/* Profile content will go here */}
      </div>
    </motion.div>
  )
}

export default Profile
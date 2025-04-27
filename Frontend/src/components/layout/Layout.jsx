import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
        currentPath={location.pathname}
        navigate={navigate}
      />
      
      <main className="flex-grow pt-16">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="h-full"
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
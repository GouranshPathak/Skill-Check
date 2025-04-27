import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../../contexts/AuthContext'

const MobileMenu = ({ isOpen, onClose, currentPath, navigate }) => {
  const { currentUser, signOut } = useAuth()

  const handleNavigation = (path) => {
    navigate(path)
    onClose()
  }

  const handleSignOut = () => {
    signOut()
    onClose()
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
                    className="rounded-full p-1 text-neutral-400 hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-neutral-900 dark:text-neutral-100 mb-6"
                >
                  Menu
                </Dialog.Title>

                <div className="mt-4 space-y-6">
                  {currentUser ? (
                    <>
                      <div className="space-y-3">
                        <MenuLink 
                          text="Home" 
                          onClick={() => handleNavigation('/home')} 
                          isActive={currentPath === '/home'} 
                        />
                        <MenuLink 
                          text="Practice" 
                          onClick={() => handleNavigation('/practice')} 
                          isActive={currentPath === '/practice'} 
                        />
                        <MenuLink 
                          text="Interview" 
                          onClick={() => handleNavigation('/interview')} 
                          isActive={currentPath === '/interview'} 
                        />
                        <MenuLink 
                          text="Performance" 
                          onClick={() => handleNavigation('/performance')} 
                          isActive={currentPath === '/performance'} 
                        />
                        <MenuLink 
                          text="Profile" 
                          onClick={() => handleNavigation('/profile')} 
                          isActive={currentPath === '/profile'} 
                        />
                        <MenuLink 
                          text="About" 
                          onClick={() => handleNavigation('/about')} 
                          isActive={currentPath === '/about'} 
                        />
                        <MenuLink 
                          text="Help" 
                          onClick={() => handleNavigation('/help')} 
                          isActive={currentPath === '/help'} 
                        />
                      </div>
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <button
                          onClick={handleSignOut}
                          className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-medium text-sm text-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <MenuLink 
                        text="About" 
                        onClick={() => handleNavigation('/about')} 
                        isActive={currentPath === '/about'} 
                      />
                      <MenuLink 
                        text="Help" 
                        onClick={() => handleNavigation('/help')} 
                        isActive={currentPath === '/help'} 
                      />
                      <div className="pt-4 flex flex-col space-y-3">
                        <button
                          onClick={() => handleNavigation('/signin')}
                          className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-medium text-sm text-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          Sign In
                        </button>
                        <button
                          onClick={() => handleNavigation('/signup')}
                          className="py-3 px-4 rounded-lg bg-primary-600 text-white font-medium text-sm text-center hover:bg-primary-700 transition-colors"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const MenuLink = ({ text, onClick, isActive }) => (
  <motion.button
    onClick={onClick}
    className={`w-full text-left py-3 px-4 rounded-lg ${
      isActive 
      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium' 
      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
    }`}
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.button>
)

export default MobileMenu
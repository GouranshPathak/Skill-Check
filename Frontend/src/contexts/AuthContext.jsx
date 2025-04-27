import { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('skillCheckUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Mock sign in function
  const signIn = (email, password) => {
    // In a real app, this would make an API call to authenticate
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = {
            id: '123456',
            email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString()
          }
          
          setCurrentUser(user)
          localStorage.setItem('skillCheckUser', JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 800) // Simulate network delay
    })
  }

  // Mock sign up function
  const signUp = (email, password) => {
    // In a real app, this would make an API call to register
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && password.length >= 6) {
          const user = {
            id: '123456',
            email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString()
          }
          
          setCurrentUser(user)
          localStorage.setItem('skillCheckUser', JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error('Invalid registration data'))
        }
      }, 800) // Simulate network delay
    })
  }

  const signOut = () => {
    setCurrentUser(null)
    localStorage.removeItem('skillCheckUser')
    navigate('/')
  }

  const updateProfile = (userData) => {
    const updatedUser = { ...currentUser, ...userData }
    setCurrentUser(updatedUser)
    localStorage.setItem('skillCheckUser', JSON.stringify(updatedUser))
    return Promise.resolve(updatedUser)
  }

  const value = {
    currentUser,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
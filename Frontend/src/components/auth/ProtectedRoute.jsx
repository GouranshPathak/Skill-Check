import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Layout from '../layout/Layout'

const ProtectedRoute = () => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/signin" replace />
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default ProtectedRoute
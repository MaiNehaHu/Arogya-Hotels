import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import AdminLogin from './components/dashboard/login/Login'
import AdminProfile from './components/dashboard/login/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/profile' element={<AdminProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

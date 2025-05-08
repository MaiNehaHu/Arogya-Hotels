import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import AdminLogin from './components/dashboard/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/profile' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

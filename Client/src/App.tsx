import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/Login';
import AdminProfile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ErrorPage from './pages/ErrorPage';
import DeliveryPartners from './pages/DeliveryPartners';
import KOT from './pages/KOT';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivery-partners" element={<DeliveryPartners />} />
          <Route path="kot-management" element={<KOT />} />
          <Route path="settings" element={<Setting />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

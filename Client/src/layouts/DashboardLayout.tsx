// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from "../components/dashboard/NavBar"
import Sidebar from '../components/dashboard/SideBar'; // your actual sidebar path

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

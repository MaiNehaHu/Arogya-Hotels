// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from "../components/dashboard/NavBar"
import Sidebar from '../components/dashboard/SideBar'; // your actual sidebar path

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col w-[70%]">
                <Navbar />
                <main className="p-6 overflow-auto h-[90vh] pb-32 bg-slate-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

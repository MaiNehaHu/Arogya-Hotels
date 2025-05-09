// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from "./NavBar"
import Sidebar from './SideBar'; // your actual sidebar path

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

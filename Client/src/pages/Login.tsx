import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/banner.png'

const AdminLogin: React.FC = () => {
    const date = new Date();

    return (
        <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <div className="text-center mb-6">
                    <img
                        src={logo} 
                        alt="Sri Arogya Hotel Logo"
                        className="h-16 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">Sign in to your dashboard</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="admin@example.com"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
                    </div>

                    <Link to="/admin/dashboard">
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-orange-600 transition"
                        >
                            Sign In
                        </button>
                    </Link>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    © {date.getFullYear()} Sri Arogya Hotel. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

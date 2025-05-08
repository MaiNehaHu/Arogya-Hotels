import React from "react";
import { Link } from "react-router-dom";

const AdminLogin: React.FC = () => {
    const date = new Date();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
                    <p className="text-sm text-gray-500 my-2">Access the FoodDelivery CRM dashboard</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="admin@example.com"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <Link to="/admin/dashboard">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </Link>
                </form>

                <p className="text-center text-xs text-gray-400">
                    © {date.getFullYear()} FoodDelivery CRM. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

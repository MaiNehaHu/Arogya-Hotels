import React, { useState } from "react";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const AdminProfile: React.FC = () => {
    const [profile, setProfile] = useState({
        hotelName: "The Tasty Bites",
        address: "123 Street, Food City",
        phone: "9876543210",
        email: "admin@tastybites.com",
        password: "admin1234",
    });

    const [photo, setPhoto] = useState<File | null>(null);
    const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
    const [showPassword, setShowPassword] = useState(false);

    const toggleEdit = (field: string) => {
        setEditing(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (field: string, value: string) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
            setPhoto(file);
        } else {
            alert("Only PNG, JPG, and JPEG files are allowed.");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 bg-slate-100 p-10 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Profile</h1>

                <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-8">
                    {/* Left: Photo Upload (40%) */}
                    <div className="w-full md:w-2/5 flex flex-col items-center">
                        <div className="w-[70%] max-w-96 h-96 rounded-full overflow-hidden bg-gray-200 shadow">
                            {photo ? (
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt="Hotel"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <FaUserCircle className="w-full h-full text-gray-400" />
                            )}
                        </div>
                        <label className="mt-10 cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded-2xl p-3 px-6 text-sm">
                            Upload Hotel Photo
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                className="hidden"
                                onChange={handlePhotoChange}
                            />
                        </label>
                    </div>

                    {/* Right: Profile Details (60%) */}
                    <div className="w-full md:w-3/5 space-y-4">
                        {[
                            { label: "Hotel Name", key: "hotelName" },
                            { label: "Address", key: "address" },
                            { label: "Phone Number", key: "phone" },
                            { label: "Login Email", key: "email" },
                            { label: "Password", key: "password", isPassword: true },
                        ].map(({ label, key, isPassword }) => (
                            <div key={key} className="flex justify-between items-start bg-gray-50 rounded p-4 shadow-sm">
                                <div className="w-full">
                                    <p className="text-sm text-gray-500">{label}</p>
                                    {editing[key] ? (
                                        <div className="relative mt-1">
                                            <input
                                                type={isPassword && !showPassword ? "password" : "text"}
                                                value={profile[key as keyof typeof profile]}
                                                onChange={e => handleChange(key, e.target.value)}
                                                className="w-full px-3 py-2 border rounded-md text-sm"
                                            />
                                            {isPassword && (
                                                <span
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="mt-1 font-medium text-gray-800">
                                            {isPassword ? "•".repeat(profile.password.length) : profile[key as keyof typeof profile]}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => toggleEdit(key)}
                                    className="ml-4 cursor-pointer text-sm bg-blue-500 px-4 py-1 rounded-xl text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
                                >
                                    {editing[key] ? "Save" : "Edit"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminProfile;

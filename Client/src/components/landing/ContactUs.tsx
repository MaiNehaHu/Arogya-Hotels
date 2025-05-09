// components/ContactUs.tsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER
const emailAddress = import.meta.env.VITE_EMAIL

const ContactUs: React.FC = () => {
    return (
        <section className="bg-white py-32 px-4" id="contact">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h2>
                <p className="text-slate-600 mb-20">Have questions or feedback? We'd love to hear from you!</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* WhatsApp Card */}
                    <div className="bg-green-100 p-8 py-10 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex justify-center mb-10">
                            <div className="bg-green-300 p-4 rounded-full">
                                <FaWhatsapp className="text-green-600 text-3xl" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">WhatsApp</h3>
                        <p className="text-slate-600 mb-2">
                            The quickest way to reach us for orders and inquiries.
                        </p>
                        <p className="text-green-600 font-semibold">+91 {WhatsAppNumber}</p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-orange-100 p-8 py-10 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex justify-center mb-10">
                            <div className="bg-orange-300 p-4 rounded-full">
                                <FaPhoneAlt className="text-orange-600 text-3xl" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
                        <p className="text-slate-600 mb-2">
                            Call us during business hours for direct assistance.
                        </p>
                        <p className="text-orange-500 font-semibold">+91 {WhatsAppNumber}</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-gray-100 p-8 py-10 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex justify-center mb-10">
                            <div className="bg-gray-200 p-4 rounded-full">
                                <FaEnvelope className="text-slate-700 text-3xl" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
                        <p className="text-slate-600 mb-2">
                            Send us an email for business inquiries or feedback.
                        </p>
                        <p className="text-slate-800 font-semibold">{emailAddress}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs
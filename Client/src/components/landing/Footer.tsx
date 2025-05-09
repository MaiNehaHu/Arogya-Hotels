// components/Footer.tsx
import React from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";
import banner from '../../assets/banner.png'
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER
const streetAddress = import.meta.env.VITE_ADDRESS
const emailAddress = import.meta.env.VITE_EMAIL

export const Footer: React.FC = () => {
    const date = new Date();

    const thisYear = `${date.getFullYear()}`;

    return (
        <footer className="bg-slate-700 text-white px-4">
            <div className="max-w-7xl py-20 px-2 sm:px-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand & Social */}
                <div>
                    <img src={banner} alt="Arogya Hotel" className="h-12 mb-2" />
                    <p className="text-sm mb-4">
                        Bringing the authentic taste of freshly-cooked meals to your doorstep.
                        Order easily through WhatsApp!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#menu" className="hover:underline">Our Menu</a></li>
                        <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
                        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Contact Info</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><FaMapMarkerAlt className="min-w-3" /> {streetAddress}</li>
                        <li className="flex items-center gap-2"><FaPhoneAlt className="min-w-3" /> +91 {WhatsAppNumber}</li>
                        <li className="flex items-center gap-2"><FaEnvelope className="min-w-3" /> {emailAddress}</li>
                        <li className="flex items-center gap-2"><FaWhatsapp className="min-w-3" /> +91 {WhatsAppNumber}</li>
                    </ul>
                </div>

                {/* Business Hours */}
                {/* <div>
                    <h2 className="text-lg font-bold mb-2">Business Hours</h2>
                    <ul className="text-sm space-y-1">
                        <li className="flex justify-between"><span>Monday - Friday:</span> <span>7:00 AM - 9:00 PM</span></li>
                        <li className="flex justify-between"><span>Saturday:</span> <span>8:00 AM - 9:00 PM</span></li>
                        <li className="flex justify-between"><span>Sunday:</span> <span>8:00 AM - 8:00 PM</span></li>
                    </ul>
                    <div className="bg-slate-800 mt-4 p-3 rounded text-sm font-semibold">
                        Place your orders at least 2 hours in advance for best service!
                    </div>
                </div> */}
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-500 py-8 text-sm text-slate-300 flex flex-col sm:flex-row justify-between items-center">
                <p>© {thisYear} Arogya Hotel. All rights reserved.</p>
                <div className="sm:w-auto w-full flex flex-col items-center sm:items-start sm:flex-row space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Refund Policy</a>
                </div>
            </div>
        </footer>
    );
};

// components/Footer.tsx
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer: React.FC = () => {
    const date = new Date();

    const thisYear = `${date.getFullYear()}`;

    return (
        <footer className="bg-slate-700 text-white px-4">
            <div className="max-w-7xl pt-20 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand & Social */}
                <div>
                    <h2 className="text-xl font-bold mb-2">HomeMeal</h2>
                    <p className="text-sm mb-4">
                        Bringing the authentic taste of home-cooked meals to your doorstep.
                        Order easily through WhatsApp!
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#menu" className="hover:underline">Our Menu</a></li>
                        <li><a href="#how" className="hover:underline">How It Works</a></li>
                        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Contact Info</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><FaMapMarkerAlt /> 123 Main Street, City Name, State, 123456</li>
                        <li className="flex items-center gap-2"><FaPhoneAlt /> +91 12345 67890</li>
                        <li className="flex items-center gap-2"><FaEnvelope /> info@homemeal.com</li>
                        <li className="flex items-center gap-2"><FaWhatsapp /> +91 12345 67890</li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Business Hours</h2>
                    <ul className="text-sm space-y-1">
                        <li className="flex justify-between"><span>Monday - Friday:</span> <span>7:00 AM - 9:00 PM</span></li>
                        <li className="flex justify-between"><span>Saturday:</span> <span>8:00 AM - 9:00 PM</span></li>
                        <li className="flex justify-between"><span>Sunday:</span> <span>8:00 AM - 8:00 PM</span></li>
                    </ul>
                    <div className="bg-slate-800 mt-4 p-3 rounded text-sm font-semibold">
                        Place your orders at least 2 hours in advance for best service!
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-500 mt-8 py-8 text-sm text-slate-300 flex flex-col md:flex-row justify-between items-center">
                <p>© {thisYear} HomeMeal. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Refund Policy</a>
                </div>
            </div>
        </footer>
    );
};

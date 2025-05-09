import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import banner from '../../assets/banner.png'
import logo from '../../assets/icon.png'
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
                <img src={banner} alt="Arogya Hotel" className="h-10 hidden sm:block" />
                <img src={logo} alt="Arogya Hotel" className="h-10 block sm:hidden" />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
                <a href="#menu" className="hover:text-orange-500">Menu</a>
                <a href="#how-it-works" className="hover:text-orange-500">How It Works</a>
                <a href="#contact" className="hover:text-orange-500">Contact</a>
            </nav>

            {/* Order Button */}
            <a
                href={`https://wa.me/${WhatsAppNumber}?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%21`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
            >
                <FaWhatsapp className="text-xl" />
                Order Now
            </a>
        </header>
    );
};

export default Navbar;

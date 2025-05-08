import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[90dvh] flex items-center text-white"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000060] bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-24 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Home–Cooked Meals <br className="hidden md:block" />
                    Delivered to Your Doorstep
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
                    Fresh tiffin, lunch and dinner options prepared with love. Order easily through WhatsApp.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#menu"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
                    >
                        View Our Menu
                    </a>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition"
                    >
                        <FaWhatsapp className="text-lg" />
                        Order on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

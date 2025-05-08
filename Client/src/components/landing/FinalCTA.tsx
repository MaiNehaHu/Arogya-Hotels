// components/FinalCTA.tsx
import React from "react";
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER

export const FinalCTA: React.FC = () => {
    return (
        <section className="bg-orange-500 text-white py-16 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Enjoy Homemade Goodness?
            </h2>
            <p className="text-lg md:text-xl mb-8">
                Don't wait! Order your delicious, home-cooked meal now and experience the taste of tradition.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                    href={`https://wa.me/${WhatsAppNumber}?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%21`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2"
                >
                    <i className="fab fa-whatsapp text-xl"></i> Order on WhatsApp
                </a>
                <a
                    href="#menu" // Adjust this anchor link to your actual menu section ID or route
                    className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full"
                >
                    View Menu
                </a>
            </div>
        </section>
    );
};

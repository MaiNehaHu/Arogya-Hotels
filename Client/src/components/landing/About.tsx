// components/AboutArogya Hotel.tsx
// import React from "react";
import { BsChatHeart } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { PiBowlFoodBold } from "react-icons/pi";
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER

const AboutSection = () => {
    return (
        <section className="py-40 bg-slate-100">
            <div className="container h-full mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.ctfassets.net/trvmqu12jq2l/4FNjVN4XJh6lH0cJE2Pa1b/d058a5d3de9ebfdc04137a8480089f16/BestIndianChicago_Mild2Spicy_group_feature.jpg?q=70&w=1208&h=1080&f=faces&fit=fill"
                        alt="Delicious Arogya Hotel Dessert"
                        className="w-full rounded-xl shadow-lg object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">
                        About Arogya Hotel
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Arogya Hotel started with a simple vision: to bring the authentic taste of home-cooked food to busy
                        professionals and families who crave wholesome meals but lack the time to prepare them.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our team of experienced chefs prepares each meal with care, using locally sourced ingredients and
                        traditional recipes. We believe in quality, hygiene, and taste above everything else.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        With our convenient WhatsApp ordering system, getting delicious food delivered to your doorstep
                        has never been easier!
                    </p>

                    {/* Icons + Values */}
                    <div className="flex flex-wrap gap-6 my-12">
                        <div className="flex items-center gap-2">
                            <span className="inline-block text-xl bg-rose-100 text-rose-600 p-2 rounded-full">
                                <PiBowlFoodBold />
                            </span>
                            <span className="font-medium text-gray-800">Fresh Ingredients</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-block text-xl bg-rose-100 text-rose-600 p-2 rounded-full">
                                <IoMdTimer />
                            </span>
                            <span className="font-medium text-gray-800">Timely Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-block text-xl bg-rose-100 text-rose-600 p-2 rounded-full">
                                <BsChatHeart />
                            </span>
                            <span className="font-medium text-gray-800">Made with Love</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <a
                            href={`https://wa.me/${WhatsAppNumber}?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%21`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                        >
                            Order Now on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER

const Foods = [
    {
        name: "Morning Tiffin",
        price: 80,
        description:
            "Start your day with our nutritious and delicious tiffin options. Perfect for a quick breakfast.",
        image: "https://i.ytimg.com/vi/LQPm20CSLSg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA60DWr-kDAvVz6m-91-5jTXNuThA", // Put your image path here
    },
    {
        name: "Lunch Boxes",
        price: 120,
        description:
            "Our lunch boxes are packed with flavor and nutrition. Perfect for office or home.",
        image: "https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg",
    },
    {
        name: "Dinner Options",
        price: 150,
        description:
            "End your day with our satisfying dinner meals. Great variety for the whole family.",
        image: "https://myfancypantry.com/wp-content/uploads/2011/12/dsc03817.jpg?w=1024",
    },
];

const MenuCategories: React.FC = () => {
    return (
        <section className="py-32 bg-slate-200" id="menu">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Our Menu Categories</h2>
                <p className="text-gray-600 mb-20">
                    Choose from our wide range of meal options for every time of day. All made fresh with quality ingredients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Foods.map((food, index) => (
                        <div
                            key={index}
                            className="bg-white hover:scale-[1.01] hover:shadow-lg transition-transform rounded-xl shadow-md overflow-hidden flex flex-col"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                                <p className="text-gray-600 mb-4">{food.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-orange-500 font-semibold">
                                        Starting at ₹{food.price}
                                    </span>
                                    <a
                                        href={`https://wa.me/${WhatsAppNumber}?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%21`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-green-500 font-medium hover:underline"
                                    >
                                        <FaWhatsapp className="mr-1" />
                                        Order
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuCategories;

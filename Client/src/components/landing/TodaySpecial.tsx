import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER

console.log(WhatsAppNumber);


interface FoodItem {
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
}

const food: FoodItem[] = [
    {
        name: "Special Butter Chicken",
        description: "Creamy butter chicken served with jeera rice and fresh naan. A house favorite!",
        price: 180,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
        rating: 4.8,
        reviews: 42,
    },
    {
        name: "Masala Dosa",
        description: "Crispy dosa filled with spiced potato filling, served with sambar and chutneys.",
        price: 120,
        image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
        rating: 4.9,
        reviews: 37,
    },
    {
        name: "Special Butter Chicken",
        description: "Creamy butter chicken served with jeera rice and fresh naan. A house favorite!",
        price: 180,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
        rating: 4.8,
        reviews: 42,
    },
    {
        name: "Paneer Tikka Masala",
        description: "Grilled paneer chunks in a rich tomato gravy, served with pulao and laccha paratha.",
        price: 165,
        image: "https://kannanskitchen.com/wp-content/uploads/2023/01/DSC_4737-500x500.jpg",
        rating: 4.7,
        reviews: 28,
    },
    {
        name: "Chicken Biryani",
        description: "Fragrant basmati rice cooked with spiced chicken and herbs, served with raita.",
        price: 200,
        image: "https://mediavine-res.cloudinary.com/image/upload/s--wk7xV0NP--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1696598012/hempt6hyfcbyjuoknc3f.jpg",
        rating: 4.9,
        reviews: 55,
    },
    {
        name: "Chole Bhature",
        description: "Fluffy bhature served with spicy and tangy chickpea curry. A North Indian classic!",
        price: 110,
        image: "https://i.pinimg.com/736x/80/3f/f0/803ff029867e021b7b4193f58e1c4ad1.jpg",
        rating: 4.6,
        reviews: 33,
    },
];


const TodaySpecial: React.FC = () => {
    return (
        <section className="py-32 bg-orange-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-center mb-2">Today's Special</h2>
                <p className="text-center text-gray-600 mb-20">
                    Check out our chef's special meals for today. Order quickly before they run out!
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {food.map((item, index) => (
                        <div key={index} className="bg-white hover:scale-[1.01] hover:shadow-lg transition-transform  rounded-xl shadow-md overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <div className="flex justify-between items-center my-2">
                                    <span className="bg-yellow-300 text-black px-2 py-1 rounded font-semibold">₹{item.price}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                <div className="flex justify-between items-center text-sm text-gray-700">
                                    <span>⭐ {item.rating} ({item.reviews} reviews)</span>
                                    <a
                                        href={`https://wa.me/${WhatsAppNumber}`}
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

export default TodaySpecial;

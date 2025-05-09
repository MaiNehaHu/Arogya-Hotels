// components/HowItWorks.tsx
import React from "react";

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-32 px-4 bg-white text-center" id="how-it-works">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Ordering from Arogya Hotel is simple and convenient. Just follow these easy steps.
            </p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
                {[
                    {
                        number: 1,
                        title: "Choose Your Meal",
                        desc: "Browse our menu and select your favorite tiffin, lunch, or dinner options according to your preference.",
                    },
                    {
                        number: 2,
                        title: "Order via WhatsApp",
                        desc: "Send us your order details through WhatsApp. We'll confirm your order and provide payment instructions.",
                    },
                    {
                        number: 3,
                        title: "Enjoy Your Meal",
                        desc: "We'll deliver your freshly prepared meal to your location. Just heat and enjoy!",
                    },
                ].map((step) => (
                    <div key={step.number} className="flex flex-col bg-green-100 border-2 border-green-200 rounded-3xl shadow-md hover:scale-[1.01] hover:shadow-lg transition-transform px-10 py-14 items-center max-w-sm text-center">
                        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-10">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

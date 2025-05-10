import React, { useEffect, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import DropDown from '../DropDown';
import { Link } from 'react-router-dom';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { RiRefreshLine } from 'react-icons/ri';

const orderHeaders = [
    "Order ID",
    "Order Price",
    "Order Placed Time",
    "Assigned to",
    "Delivery Partner Contact",
    "Customer Name",
    "Customer Contact",
    "Customer Address",
    "Distance",
    "Status",
    ""
];

const sampleOrders = [
    {
        order_id: "ORD001",
        order_price: "$50",
        order_time: "2025-05-10 14:30",
        customer_name: "John Doe",
        customer_contact: "1234567890",
        customer_address: "123 Elm Street",
        distance: "5.2 km",
        status: "Preparing",
        assigned_to: "Alex Rider",
        delivery_contact: "1112223333"
    },
    {
        order_id: "ORD002",
        order_price: "$85",
        order_time: "2025-05-09 11:00",
        customer_name: "Jane Smith",
        customer_contact: "9876543210",
        customer_address: "456 Oak Avenue",
        distance: "3.8 km",
        status: "Out for Delivery"
        // intentionally missing assigned_to and delivery_contact
    }
];

const NewOrders = () => {
    const [status, setStatus] = useState("");
    const [showOptions, setShowOptions] = useState("");
    const orders = sampleOrders;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest(".options-dropdown") &&
                !target.closest(".options-button")
            ) {
                setShowOptions("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='border border-gray-300 rounded-2xl p-3 mt-6'>
            <header className="flex flex-row items-start justify-between p-1">
                <section className="flex flex-row items-center gap-4">
                    <h1 className="text-lg font-medium">New Orders</h1>

                    <button className="cursor-pointer p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                        <RiRefreshLine />
                    </button>
                </section>

                <section className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <p>Status:</p>
                        <DropDown ArrayObj={["All Orders", "Preparing", "Out for Delivery", "Delivered", "Cancelled"]} setValue={setStatus} />
                    </div>
                    <Link to="/admin/orders">
                        <button className='border border-gray-300 rounded-xl py-2.5 px-3 text-sm font-medium hover:text-white hover:bg-orange-500 cursor-pointer transition-colors'>
                            View All
                        </button>
                    </Link>
                </section>
            </header>

            <div className="overflow-x-auto w-full pb-4 mt-2">
                <div className="bg-white w-fit border border-gray-300 shadow rounded-xl">
                    <table className="min-w-full text-left">
                        <thead className="bg-gray-200 text-gray-700 border-b border-gray-300 text-sm font-semibold">
                            <tr>
                                {orderHeaders.map((title, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-10  text-nowrap font-medium ${idx === 0 ? "rounded-tl-xl" : idx === orderHeaders.length - 1 ? "rounded-tr-xl" : ""}`}
                                    >
                                        {title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.order_id}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.order_price}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.order_time}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.assigned_to ?? "Not assigned"}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.delivery_contact ?? "N/A"}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.customer_name}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.customer_contact}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.customer_address}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.distance}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{order.status}</td>
                                        <td className="py-3 px-4 text-sm text-nowrap text-gray-900 sticky right-0 bg-white z-10">
                                            <button
                                                onClick={() => setShowOptions(order.order_id)}
                                                disabled={!!order.assigned_to ? true : false}
                                                className="border cursor-pointer border-blue-400 bg-blue-600 hover:bg-blue-700 font-medium text-white px-4 py-1 rounded-full options-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            >
                                                <p className='text-sm'>Assign</p>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-3 px-4 text-sm text-gray-600" colSpan={orderHeaders.length}>
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewOrders;

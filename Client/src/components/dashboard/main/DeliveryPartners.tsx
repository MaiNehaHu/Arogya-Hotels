import React, { useEffect, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import DropDown from '../DropDown';
import { Link } from 'react-router-dom';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { RiRefreshLine } from 'react-icons/ri';

const deliveryPartnerHeaders = [
    "Partner ID",
    "Status",
    "Name",
    "Email",
    "Contact",
    "Region",
    "Total Deliveries",
    ""
];

const samplePartners = [
    {
        partner_id: "DP001",
        name: "Alex Rider",
        email: "alex.rider@example.com",
        contact: "1112223333",
        region: "Downtown",
        total_deliveries: 128,
        status: "Available"
    },
    {
        partner_id: "DP002",
        name: "Maria Hill",
        email: "maria.hill@example.com",
        contact: "4445556666",
        region: "Uptown",
        total_deliveries: 94,
        status: "Busy"
    }
];

const DeliveryPartners = () => {
    const [status, setStatus] = useState("");
    const [showOptions, setShowOptions] = useState("");

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
                    <h1 className="text-lg font-medium">Delivery Partners</h1>

                    {/* <button className="cursor-pointer p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                        <RiRefreshLine />
                    </button> */}
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
                                {deliveryPartnerHeaders.map((title, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-10  text-nowrap font-medium ${idx === 0 ? "rounded-tl-xl" : idx === deliveryPartnerHeaders.length - 1 ? "rounded-tr-xl" : ""}`}
                                    >
                                        {title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {samplePartners.length > 0 ? (
                                samplePartners.map((partner, index) => (
                                    <tr key={index}>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.partner_id}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">
                                            <div className={"px-3 py-1 rounded-full text-center text-white font-medium" + ` ${partner.status === "Available" ? "bg-green-500" : "bg-gray-500"}`}>{partner.status}</div>
                                        </td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.name}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.email}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.contact}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.region}</td>
                                        <td className="py-3 px-10 text-sm text-nowrap">{partner.total_deliveries}</td>
                                        <td className="py-3 px-4 text-sm text-nowrap text-gray-900 sticky right-0 bg-white z-0">
                                            <button onClick={() => setShowOptions(partner.partner_id)} className="cursor-pointer text-xl options-button">
                                                <PiDotsThreeOutlineVerticalFill />
                                            </button>
                                            {showOptions === partner.partner_id && (
                                                <div className={"absolute w-fit right-20 z-50 border border-gray-300 rounded-2xl flex flex-col items-start bg-white shadow options-dropdown" + ` ${samplePartners.length - 1 <= index ? "bottom-5 rounded-br-[0]" : "top-5 rounded-tr-[0]"}`}>
                                                    <button className={"text-sm text-nowrap p-3 px-4 pr-10 border-b border-gray-300 w-full text-left hover:bg-gray-100 cursor-pointer" + ` ${samplePartners.length - 1 <= index ? "rounded-t-2xl" : "rounded-tl-2xl"}`}>
                                                        Remove Partner
                                                    </button>
                                                    <button className={"text-sm text-nowrap p-3 px-4 pr-10 w-full text-left hover:bg-gray-100 cursor-pointer" + ` ${samplePartners.length - 1 <= index ? "rounded-bl-2xl" : "rounded-b-2xl"}`}>
                                                        Edit Details
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-3 px-4 text-sm text-gray-600" colSpan={deliveryPartnerHeaders.length}>
                                        No delivery partners found.
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

export default DeliveryPartners;

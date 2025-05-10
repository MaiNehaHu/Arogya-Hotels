import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { BsBagCheck, BsPeople } from "react-icons/bs";
import { PiTruckDuotone } from "react-icons/pi";
import { BiSolidDollarCircle } from "react-icons/bi";
import formatAmount from "../../../utils/formatAmount";

const Overview = () => {
    const cards = [
        {
            name: "Total Orders",
            value: 2,
            percentage: 12,
            icon: <BsBagCheck className="text-blue-500" size={24} />,
            bgColor: "bg-blue-100",
            subText: "From previous period",
        },
        {
            name: "Active Deliveries",
            value: 0,
            percentage: 8,
            icon: <PiTruckDuotone className="text-red-500" size={24} />,
            bgColor: "bg-red-100",
            subText: "From previous period",
        },
        {
            name: "Delivery Partners",
            value: 3,
            percentage: 2,
            icon: <BsPeople className="text-blue-500" size={24} />,
            bgColor: "bg-blue-100",
            subText: "Available now",
        },
        {
            name: "Revenue",
            value: formatAmount(980),
            percentage: 15,
            icon: <BiSolidDollarCircle className="text-green-500" size={24} />,
            bgColor: "bg-green-100",
            subText: "From previous period",
        },
    ];

    return (
        <div className="flex flex-row gap-4">
            {cards.map(({ name, value, percentage, icon, bgColor, subText }) => (
                <div
                    key={name}
                    className="flex flex-1 flex-col gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
                        {icon}
                    </div>
                    <h4 className="text-gray-700 text-base font-medium">{name}</h4>
                    <h1 className="text-3xl font-semibold">{value}</h1>
                    <p
                        className={`flex items-center gap-1 text-sm font-medium ${percentage >= 0 ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {percentage >= 0 ? <AiOutlineRise /> : <AiOutlineFall />}
                        {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}{" "}
                        <span className="text-gray-500 ml-1 font-normal">{subText}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Overview;

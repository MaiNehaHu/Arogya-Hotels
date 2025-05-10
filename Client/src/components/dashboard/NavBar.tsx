// import React from 'react'
import { LuBell, LuLogOut } from "react-icons/lu"
import icon from "../../assets/icon.png";
import { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiGear } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import Model from "../../layouts/Model";
import CreateOrder from "./main/CreateOrder";

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCreateOrderModal, setShowCreateOrderModal] = useState(false);
  const location = useLocation();

  const pathTitleMap: { [key: string]: string } = {
    '/admin/dashboard': 'Dashboard',
    '/admin/settings': 'Settings',
    '/admin/profile': 'Profile',
    '/admin/orders': 'Orders',
    '/admin/delivery-partners': 'Delivery Partners',
    '/admin/kot-management': 'KOT Management',
  };

  const currentTitle = pathTitleMap[location.pathname] || 'Dashboard';

  return (
    <div className="h-[10vh] border-b border-gray-300 flex items-center justify-between px-10">
      <h1 className="text-lg font-medium">{currentTitle}</h1>

      <div className="flex flex-row gap-x-4">
        <button onClick={() => setShowCreateOrderModal(true)} className="relative border border-orange-600 text-orange-500 font-semibold bg-orange-100 text-base py-2 px-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
          Create Order
        </button>

        {showCreateOrderModal &&
          <Model isOpen={showCreateOrderModal} onClose={() => setShowCreateOrderModal(false)}>
            <CreateOrder />
          </Model>
        }

        <button className="relative border border-gray-600 text-base p-3 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">
          <LuBell />

          <div className="w-2 h-2 absolute right-0.5 top-0.5 bg-red-500 rounded-full" />
        </button>

        <button onClick={() => setShowDropDown(!showDropDown)} className="flex flex-row items-center relative gap-2 cursor-pointer hover:border-black border border-gray-600 rounded-full">
          <img src={icon} alt="Admin" className="h-10 w-10" />

          {showDropDown && <DropDown setShowDropDown={setShowDropDown} />}
        </button>
      </div>
    </div>
  )
}

const DropDown = ({ setShowDropDown }: { setShowDropDown: (value: boolean) => void }) => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".options-dropdown") &&
        !target.closest(".options-button")
      ) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="options-dropdown flex flex-col rounded-xl rounded-tr-none shadow-2xl absolute top-12 z-10 bg-white right-4 border border-gray-200">
      <Link to={"/admin/profile"}>
        <button className="options-button w-full cursor-pointer flex flex-row gap-2 items-center py-2.5 px-4 pr-20 border-b border-gray-300 hover:bg-gray-100 transition-colors rounded-tl-xl" >
          <IoPersonCircleOutline className="text-base" />
          Profile
        </button>
      </Link>
      <Link to={"/admin/settings"}>
        <button className="options-button w-full cursor-pointer flex flex-row gap-2 items-center py-2.5 px-4 pr-20 border-b border-gray-300 hover:bg-gray-100 transition-colors" >
          <PiGear className="text-base" />
          Settings
        </button>
      </Link>
      <Link to={"/admin/login"}>
        <button className="options-button w-full cursor-pointer flex flex-row gap-2 items-center py-2.5 px-4 pr-20 hover:bg-gray-100 transition-colors rounded-b-xl" >
          <LuLogOut className="text-base" />
          SignOut
        </button>
      </Link>
    </div>
  )
}

export default NavBar
// import React from 'react'
import { FaClipboardList, FaCog, FaShoppingBag, FaThLarge, FaUsers } from "react-icons/fa"
import logo from "../../assets/banner.png"
import { NavLink } from "react-router-dom"

const SideBar = () => {

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${isActive ? "bg-orange-100 text-orange-600 font-semibold" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="h-screen border-r border-gray-300">
      <div className="border-b border-gray-300 h-[10vh] p-4 px-6">
        <img src={logo} alt="Sri Arogya Hotel" className="h-full w-fit object-contain" />
      </div>

      <nav className="flex flex-col px-4 py-4 space-y-2 text-[15px]">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <FaThLarge />
          Dashboard
        </NavLink>
        <NavLink to="/admin/orders" className={linkClass}>
          <FaShoppingBag />
          Orders
        </NavLink>
        <NavLink to="/admin/delivery-partners" className={linkClass}>
          <FaUsers />
          Delivery Partners
        </NavLink>
        <NavLink to="/admin/kot-management" className={linkClass}>
          <FaClipboardList />
          KOT Management
        </NavLink>
        {/* <NavLink to="/admin/whatsapp-integration" className={linkClass}>
          <FaWhatsapp />
          WhatsApp Integration
        </NavLink> */}
        <NavLink to="/admin/settings" className={linkClass}>
          <FaCog />
          Settings
        </NavLink>
      </nav>
    </div>
  )
}

export default SideBar
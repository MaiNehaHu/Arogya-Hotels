// import React from 'react'

import CreateOrder from "../components/dashboard/main/CreateOrder"
import DeliveryPartners from "../components/dashboard/main/DeliveryPartners"
import NewOrders from "../components/dashboard/main/NewOrders"
import Overview from "../components/dashboard/main/Overview"

const Dashboard = () => {

  return (
    <>
      <Overview />

      <NewOrders />
      <DeliveryPartners />

      <CreateOrder />
    </>
  )
}

export default Dashboard
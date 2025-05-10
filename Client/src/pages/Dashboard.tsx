// import React from 'react'

import CreateOrder from "../components/dashboard/main/CreateOrder"
import NewOrders from "../components/dashboard/main/NewOrders"
import Overview from "../components/dashboard/main/Overview"

const Dashboard = () => {
  return (
    <>
      <Overview />

      <NewOrders />

      <CreateOrder />
    </>
  )
}

export default Dashboard
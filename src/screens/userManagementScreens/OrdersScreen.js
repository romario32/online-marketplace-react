import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Orders from '../../components/managementPageComponents/Orders/Orders';
import Footer from '../../components/footerComponents/Footer';

const OrdersScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={4} />
            <Orders/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default OrdersScreen


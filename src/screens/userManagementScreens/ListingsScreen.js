import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Listings from '../../components/managementPageComponents/Listings/Listings';
import Footer from '../../components/footerComponents/Footer';

const ListingsScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={2} />
            <Listings/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default ListingsScreen

 
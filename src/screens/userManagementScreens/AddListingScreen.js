import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Footer from '../../components/footerComponents/Footer';
import AddListing from '../../components/managementPageComponents/AddListing/AddListing';
const AddListingScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={0} />
            <AddListing/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default AddListingScreen


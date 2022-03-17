import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Collections from '../../components/managementPageComponents/Collections/Collections';
import Footer from '../../components/footerComponents/Footer';

const CollectionScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={3} />
            <Collections/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default CollectionScreen


 
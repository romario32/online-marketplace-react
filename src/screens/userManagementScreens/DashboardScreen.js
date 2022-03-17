import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Dashboard from '../../components/managementPageComponents/Dashboard/Dashboard';
import Footer from '../../components/footerComponents/Footer';
 const DashboardScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={1} />
            <Dashboard/> 
        </div> 
        <Footer/> 
    </>
  )
}
export default DashboardScreen;
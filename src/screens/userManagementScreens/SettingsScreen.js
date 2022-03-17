import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Settings from '../../components/managementPageComponents/Settings/Settings';
import Footer from '../../components/footerComponents/Footer';

const SettingsScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={6} />
            <Settings/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default SettingsScreen
 
import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Messages from '../../components/managementPageComponents/Messages/Messages';
import Footer from '../../components/footerComponents/Footer';

const MessagesScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex mainSectionBlockHeight">
            <Sidebar activeTab={5} />
            <Messages/> 
        </div> 
        <Footer/> 
    </>
  )
}

export default MessagesScreen

 
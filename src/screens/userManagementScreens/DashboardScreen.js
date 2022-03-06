import React from 'react'
import Header from '../../components/managementPageComponents/Layout/Header';
import Sidebar from '../../components/managementPageComponents/Layout/Sidebar';
import Dashboard from '../../components/managementPageComponents/Dashboard/Dashboard';
 const DashboardScreen = () => {
  return (
    <>
        <Header/>
        <div className="flex">
            <Sidebar />
            <Dashboard/>
        </div> 
    </>
  )
}
export default DashboardScreen;
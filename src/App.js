import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ListingCollectionScreen from "./screens/ListingCollectionScreen";
import PropertyOverviewScreen from "./screens/PropertyOverviewScreen";
import SearchScreen from "./screens/SearchScreen";
import NavbarComponent from "./components/headerComponents/navbar/NavbarComponent";
import Footer from "./components/footerComponents/Footer";
import UserLogin from "./screens/UserLogin"; 
import DashboardScreen from "./screens/userManagementScreens/DashboardScreen";
function App() {
  return ( 
    <> 
      <Routes> 
          <Route path="/" element={<HomeScreen />}/> 
            <Route path="collection" element={<ListingCollectionScreen />} />
            <Route path="overviewPage" element={<PropertyOverviewScreen />} />
            <Route path="searchPage" element={<SearchScreen />} /> 
            <Route path="userLogin" element={<UserLogin />} />  
            <Route path="accountManagent" element={<DashboardScreen />} />  
          <Route/> 
          
      </Routes> 
    </>
  );
} 
export default App;

          // <Route index element={<ListingCollectionScreen />} />


 
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ListingCollectionScreen from "./screens/ListingCollectionScreen";
import PropertyOverviewScreen from "./screens/PropertyOverviewScreen";
import SearchScreen from "./screens/SearchScreen"; 
import UserLogin from "./screens/UserLogin"; 
import ProfileScreen from "./screens/ProfileScreen";

import DashboardScreen from "./screens/userManagementScreens/DashboardScreen";
import CollectionScreen from "./screens/userManagementScreens/CollectionScreen";
import ListingsScreen from "./screens/userManagementScreens/ListingsScreen";
import MessagesScreen from "./screens/userManagementScreens/MessagesScreen";
import OrdersScreen from "./screens/userManagementScreens/OrdersScreen";
import SettingsScreen from "./screens/userManagementScreens/SettingsScreen";
import AddListingScreen from "./screens/userManagementScreens/AddListingScreen";
function App() {
  return ( 
    <> 
      <Routes> 
          <Route path="/" element={<HomeScreen />}/> 
            {/* main page links */}
            <Route path="collection" element={<ListingCollectionScreen />} />
            <Route path="overviewPage" element={<PropertyOverviewScreen />} />
            <Route path="searchPage" element={<SearchScreen />} /> 
            <Route path="userLogin" element={<UserLogin />} />  
            <Route path="profilePage" element={<ProfileScreen />} />  
            
            {/* management links */}
            <Route path="management/dashboard" element={<DashboardScreen />} />
            <Route path="management/listings" element={<ListingsScreen />} />
            <Route path="management/collection" element={<CollectionScreen />} /> 
            <Route path="management/orders" element={<OrdersScreen />} />  
            <Route path="management/message" element={<MessagesScreen />} />
            <Route path="management/settings" element={<SettingsScreen />} /> 
            <Route path="management/addListing" element={<AddListingScreen />} /> 
          <Route/>  
      </Routes> 
    </>
  );
} 
export default App;

 
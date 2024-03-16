import React from 'react';
import ProfileHeader from '../components/bodyComponents/profilePageComponents/ProfileHeader';
import Footer from '../components/footerComponents/Footer';
import NavbarComponent from '../components/headerComponents/navbar/NavbarComponent';
const ProfileScreen = () => {
  return (
    <>
        <NavbarComponent/>
        <ProfileHeader/>
        <Footer/>
    </>
  )
}

export default ProfileScreen
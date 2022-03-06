import React from 'react';
import NavbarComponent from '../components/headerComponents/navbar/NavbarComponent';
import CardSlider from '../components/bodyComponents/CardSlider';
import InfoPanel from '../components/bodyComponents/infoPanels/InfoPanel';
import Footer from '../components/footerComponents/Footer';
const HomeScreen = () => {
  return (
    <> 
        <NavbarComponent/>
        <InfoPanel/>
        <CardSlider/>
        <Footer/>
    </>
  );
};

export default HomeScreen;

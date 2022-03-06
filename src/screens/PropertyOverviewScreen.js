import React from 'react';
import NavbarComponent from '../components/headerComponents/navbar/NavbarComponent';
import CardSlider from '../components/bodyComponents/CardSlider';
import ProductOverview from '../components/bodyComponents/productOverview/ProductOverview';
import Footer from '../components/footerComponents/Footer';
const PropertyOverviewScreen = () => {
  return (
    <> 
        <NavbarComponent/>
          <ProductOverview/>
          <CardSlider/> 
        <Footer/>
    </>
  );
};

export default PropertyOverviewScreen;

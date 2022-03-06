import React from 'react';
import NavbarComponent from '../components/headerComponents/navbar/NavbarComponent'; 
import CardSlider from '../components/bodyComponents/CardSlider';
import Footer from '../components/footerComponents/Footer';
import ListingCard from '../components/bodyComponents/ListingCard';
 
const products = [
  {
    id: 1,
    name: 'Basic Tee boots name lame same game duwane fefccccc',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    } 
]


const ListingCollectionScreen = () => {
  return (
    <> 
        <NavbarComponent/>
          <CardSlider/>
          <div className="grid custom-mxxs-grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product)=>(
              <ListingCard product={product} key={product.id}/>
            ))} 
          </div> 
        <Footer/>
    </>
  );
};

export default ListingCollectionScreen;

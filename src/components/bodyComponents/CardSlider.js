import React from 'react'

import {useState, useEffect} from 'react' 
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ListingCard from './ListingCard';
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
  

export default function CardSlider(){
    const [isSaved, setIsSaved] = useState(false);
    function changeStatus(){
      setIsSaved(prevIsOpen => !prevIsOpen);
      
    } 

    useEffect( () => {
        console.log("Save state:"+isSaved);
    }, [isSaved]);
     
    var settings = { 
        infinite: false,
        speed: 300,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            } 
        ]
    };
  return (
    <>
        <div className="mx-auto py-6 px-4 sm:px-6 max-w-7xl lg:px-8">
        <a href="#"><h2 className="text-xl text-gray-900 w-fit"> <FontAwesomeIcon icon={solid('shirt')} className="h-5 px-2 "/> <span>Clothes</span> | <span className="font-light text-lg">See More <FontAwesomeIcon icon={solid('arrow-right-long')} className="h-4 px-2 "/> </span> </h2></a>
            <Slider {...settings} className="max-w-7xl mx-auto px-4 my-5">
                {products.map((product) => (
                   <ListingCard product={product} key={product.id}/>
                ))}
            </Slider>
        </div>
    </>
  )
}








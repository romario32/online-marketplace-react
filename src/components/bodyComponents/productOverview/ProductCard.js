import React from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function ProductCard(){
    var settings = { 
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
   };
    return (
        <>
            <div className="mx-auto py-6 px-4 sm:px-6 max-w-7xl lg:px-8">
                <Slider {...settings} className="max-w-7xl mx-auto px-4 my-5">
                    {products.map((product) => (
                        <div key={product.id} className="p-3 relative">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <a href={product.href}>
                                    <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-48 h-48 m-auto object-center object-cover"
                                    />
                                </a>
                                <button className="h-5 px-2 absolute right-4 top-4" onClick={()=>{changeStatus()}}>
                                {isSaved?<FontAwesomeIcon icon={solid('heart')} className="text-red-600"/>:<FontAwesomeIcon icon={regular('heart')} />}
                                </button>
                            </div>  
                        </div>
                    ))}
                </Slider>
            </div>
        </>
  )
}

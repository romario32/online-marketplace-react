import { Fragment, useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Popover, Transition } from '@headlessui/react'
import Slider from "react-slick";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
  
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
 

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [ 
    { id: 1, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
//const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductOverview() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

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
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <>
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                        <li key={breadcrumb.id}>
                            <div className="flex items-center">
                            <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                {breadcrumb.name}
                            </a>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-4 h-5 text-gray-300"
                            >
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                            </div>
                        </li>
                        ))}
                        <li className="text-sm">
                        <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                            {product.name}
                        </a>
                        </li>
                    </ol>
                </nav> 
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        selector='.item'
                        >
                        {/* Image gallery */}
                        <div className="hidden mt-6 max-w-md mx-auto sm:px-6 sm:max-w-7xl lg:px-8 sm:grid sm:grid-cols-3 sm:gap-x-2">
                            <div className="cmax-w-34rem col-span-2 rounded-lg overflow-hidden">
                                <a className="item" href={product.images[0].src}>
                                    <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-center object-cover"
                                    />
                                </a>
                            </div>
                            <div className="sm:grid sm:grid-rows-3 sm:gap-y-2">
                                <div className="row-span-1 max-h-44 rounded-lg overflow-hidden">
                                <a className="item" href={product.images[1].src}>
                                    <img
                                        src={product.images[1].src}
                                        alt={product.images[1].alt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </a>
                                </div>
                                <div className="row-span-1 max-h-44 rounded-lg overflow-hidden">
                                    <a className="item" href={product.images[2].src}>
                                        <img
                                            src={product.images[2].src}
                                            alt={product.images[2].alt}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </a>
                                </div>
                                <div className="relative row-span-1 max-h-44 rounded-lg overflow-hidden">
                                    <a className="item" href={product.images[3].src}>
                                        <img
                                            src={product.images[3].src}
                                            alt={product.images[3].alt}
                                            className="w-full h-full object-center object-cover"
                                        />
                                  
                                        <div className="absolute top-0 z-10 w-full h-full bg-slate-900 bg-opacity-30">
                                            <p className="flex justify-center text-lg font-medium pt-20 text-white">
                                                All Photos({product.images.length})
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </LightGallery>
                    <div className="sm:hidden mt-6">
                        <div className="mx-auto py-2 px-4 sm:px-6 lg:px-8">
                        <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        selector='.mobile-items'
                        >
                            <Slider {...settings} className=" px-4 my-5">
                            {product.images.map((image) => (
                                <div className="p-3 relative w-full h-96">
                                    <div className=" bg-gray-200 rounded-lg overflow-hidden">
                                        <a className="mobile-items" href={image.src}>
                                            <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-fit m-auto object-center object-cover"
                                            />  
                                            <button className="absolute px-2 text-center right-4 top-4 hover:text-gray-600" >
                                                {/* <div className="bg-slate-200 px-2 rounded-md"> */}
                                                    <FontAwesomeIcon className="text-sm" icon={solid('up-right-and-down-left-from-center')}/>
                                                {/* </div> */}
                                            </button> 
                                        </a> 
                                      </div> 
                                </div>
                            ))}
                            </Slider>
                        </LightGallery>
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name} 
                                <button className="p-2 text-xl" onClick={()=>{changeStatus()}}>
                                    {isSaved?<FontAwesomeIcon icon={solid('heart')} className="text-red-600"/>:<FontAwesomeIcon icon={regular('heart')} />}
                                </button>
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <div className="flex my-2 py-2 border-b-2 border-slate-100">
                                <div className="h-16 w-16 rounded-md bg-red-600">

                                </div>
                                <div className="block mx-3">
                                    <div><span className="text-2xl">Rohan Bedward</span></div>

                                    <Popover className="relative">
                                        {({ open }) => (
                                        <>
                                            <Popover.Button >
                                            <div><span className="text-lg text-slate-500 hover:text-slate-300">Verified Business</span><FontAwesomeIcon className="px-1 text-sm" icon={solid('circle-info')} /></div>
                                            </Popover.Button>
                                            <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                            >
                                            <Popover.Panel className="absolute z-10 w-80 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative block gap-8 bg-white p-7">
                                                        <div className="border-b-2 border-slate-200">
                                                            <p className="text-lg font-medium">Verified Business</p>
                                                        </div>
                                                        <div className="my-2">
                                                            <h4>This user has a registered business and we can verify this information.</h4>
                                                        </div>
                                                </div> 
                                                </div>
                                            </Popover.Panel>
                                            </Transition>
                                        </>
                                        )}
                                    </Popover>
    
                                </div>
                            </div>
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">{product.price}</p>
    
                            <form className="mt-4">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                <div className="flex items-center space-x-3">
                                    {product.colors.map((color) => (
                                    <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={({ active, checked }) =>
                                        classNames(
                                            color.selectedClass,
                                            active && checked ? 'ring ring-offset-1' : '',
                                            !active && checked ? 'ring-2' : '',
                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                        )
                                        }
                                    >
                                        <RadioGroup.Label as="p" className="sr-only">
                                        {color.name}
                                        </RadioGroup.Label>
                                        <span
                                        aria-hidden="true"
                                        className={classNames(
                                            color.class,
                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                        )}
                                        />
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                                </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10"> 
                                <div className="flex items-center justify-between">
                                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                <Popover className="relative">
                                    {({ open }) => (
                                    <>
                                        <Popover.Button >
                                            <div>
                                                <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size Guide</span>
                                                <FontAwesomeIcon className="px-1 text-sm" icon={solid('circle-info')} />
                                            </div>
                                        </Popover.Button>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-20 w-96 px-4 mt-3 sm:px-0 top-5 right-0 lg:max-w-3xl">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative block gap-8 bg-white p-7">
                                                            <div className="border-b-2 border-slate-200">
                                                                <p className="text-lg text-slate-500">Size Guide</p>
                                                            </div>
                                                            <div className="my-2">
                                                                <h4>This user has a registered business and we can verify this information.</h4>
                                                                <table className="table-fixed my-2">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="px-3 bg-slate-300 border-b-2 border-slate-200">sm</td>
                                                                            <td className="px-3  border-b-2 border-slate-200">10 cm</td> 
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="px-3 bg-slate-300 border-b-2 border-slate-200">lg</td>
                                                                            <td className="px-3 border-b-2 border-slate-200">20 cm</td> 
                                                                        </tr> 
                                                                        <tr>
                                                                            <td className="px-3 bg-slate-300 border-b-2 border-slate-200">xl</td>
                                                                            <td className="px-3 border-b-2 border-slate-200">20 cm</td> 
                                                                        </tr> 
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                    </div> 
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                    )}
                                </Popover> 
                                </div>

                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    {product.sizes.map((size) => (
                                    <RadioGroup.Option
                                        key={size.name}
                                        value={size}
                                        disabled={!size.inStock}
                                        className={({ active }) =>
                                        classNames(
                                            size.inStock
                                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                            active ? 'ring-2 ring-indigo-500' : '',
                                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                        )
                                        }
                                    >
                                        {({ active, checked }) => (
                                        <>
                                            <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                            {size.inStock ? (
                                            <div
                                                className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'absolute -inset-px rounded-md pointer-events-none'
                                                )}
                                                aria-hidden="true"
                                            />
                                            ) : (
                                            <div
                                                aria-hidden="true"
                                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                            >
                                                <svg
                                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                                >
                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                </svg>
                                            </div>
                                            )}
                                        </>
                                        )}
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                                </RadioGroup>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save item
                            </button>
                            </form>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            {/* Description and details */}
                            <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                            </div>

                            <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight} className="text-gray-400">
                                    <span className="text-gray-600">{highlight}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>

                            <div className="mt-10">
                            <h2 className="text-lg font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
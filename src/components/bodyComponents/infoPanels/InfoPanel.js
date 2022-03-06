import React from 'react'
//import onlineShopping from 'images/onlineShopping.jpeg'
const InfoPanel = () => {
  return (
    <div className="flex text-center md:text-left md:justify-between  bg-colour-info-column rounded-md mx-5 my-5 max-w-7xl">
        <div className="m-5">
          <h4 className="text-xl font-medium tracking-tight text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h4>
          <p className="py-2 text-lg font-sans tracking-tight text-gray-900">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</p>
          <div className="text-center inline-grid grid-cols-2 sm:grid-cols-4 md:gap-4">
            <div className="p-4 block">
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 block">
              <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4">
              <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
              <p className="leading-relaxed">Sellers</p>
            </div>
            <div className="p-4">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
        <div className="h-64">
                <img
                    src='images/onlineShopping.jpeg'
                    className="sm-none w-full h-full object-center object-cover lg:w-full lg:h-full rounded-md z-10"
                />
        </div> 
    </div>
  )
}

export default InfoPanel;
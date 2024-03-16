import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
  return (
    <div className="md:flex bg-white relative md:justify-between border-t-2 border-gray-100 p-4 mx-2 my-auto ">
        <div className="block text-center md:inline-block md:left pr-1">
            <div className="flex justify-center md:justify-start">
                <div><FontAwesomeIcon className="px-1 text-xl" icon={brands('instagram')} /></div>
                <div><FontAwesomeIcon className="px-1 text-xl" icon={brands('facebook')} /></div>
                <div><FontAwesomeIcon className="px-1 text-xl" icon={brands('paypal')} /> </div>
                <div><FontAwesomeIcon className="px-1 text-xl" icon={brands('twitter')} /></div>
            </div> 
        </div >
        <div className="flex justify-center md:justify-end">
          <p className="text-base sm:text-right">© 2022 JaMarketPlace, Inc.</p>
        </div>
    </div>
  )
}
export default Footer;
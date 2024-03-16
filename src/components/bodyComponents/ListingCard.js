import {useState, useEffect} from 'react' 
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom"; 

const ListingCard = ({ product }) => {
    const [isSaved, setIsSaved] = useState(false);
    function changeStatus(){
      setIsSaved(prevIsOpen => !prevIsOpen);
      
    } 

    useEffect( () => {
        console.log("Save state:"+isSaved);
    }, [isSaved]);
  return (
      <div key={product.id} className="p-3 relative">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              {/* <a href={product.href}> */}
              <Link to="/overviewPage">
                  <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-48 h-48 m-auto object-center object-cover"
                  />
              </Link>
              <button className="px-2 text-xl absolute right-4 top-4" onClick={()=>{changeStatus()}}>
              {isSaved?<FontAwesomeIcon icon={solid('heart')} className="text-red-600"/>:<FontAwesomeIcon icon={regular('heart')} />} 
              </button>
          </div> 
          {/* <a href={product.href}>*/} 
          <Link to="/overviewPage">
            <div className="flex justify-center">
                <div className="rounded-full bg-slate-600 h-2 w-2 mx-1 mt-1"></div>
                <div className="rounded-full bg-red-600 h-2 w-2 mx-1 mt-1"></div>
                <div className="rounded-full bg-green-600 h-2 w-2 mx-1 mt-1"></div>
            </div> 

            <div className="mt-1 "> 
                <div className="w-full text-left">
                    <div className="flex justify-between">
                        <h3 className="w-1/2 text-sm text-gray-900 truncate"> 
                            {product.name} 
                        </h3>
                        <span className="w-1/2 truncate">
                            boss store vbgvgfbvrgfvtrgfctrgfvctrgfctrgfc
                        </span>
                    </div> 
                    <div className="flex justify-between">
                        <p className="text-left w-1/2 text-sm font-medium text-gray-900 ">{product.price}</p>
                        <span className="w-1/2 rounded-md p-1 font-bold text-center text-xs bg-amber-300">
                            PREMIUM SELLER
                        </span>
                    </div>
                </div> 
            </div>
          </Link> 
      </div>
  )
}
export default ListingCard;






function SolidFire({color}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class={`${color} h-5 w-5`} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
        </svg>
    );
}
 


function OutlineFire(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
    );
}
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
                    <h3 className="text-sm text-gray-900 truncate"> 
                        {/* <span aria-hidden="true" className="absolute inset-0 " /> */}
                        {product.name} 
                    </h3>
                    <p className="text-left w-6/12 text-sm font-medium text-gray-900 ">{product.price}</p>
                </div> 
            </div>
          </Link> 
      </div>
  )
}
export default ListingCard;
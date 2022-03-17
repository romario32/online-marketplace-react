import React from 'react' 
import { 
  HomeIcon,
  SaveIcon,
  ArchiveIcon,
  ChatAlt2Icon,
  CogIcon,
  CollectionIcon
} from '@heroicons/react/outline' 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {PlusIcon} from '@heroicons/react/solid'
import { Link } from "react-router-dom";

const Sidebar = ({activeTab}) => {
  return (
    <div className="hidden sm:block sectionBlockHeight py-5 sm:px-1 m-3 overflow-y-scroll">
      <div className="grid gap-3 text-center"> 
        <div className="block"><Link to="/management/addListing"> <button className="flex hover:bg-slate-400 bg-slate-500 text-white text-md font-semibold p-3 rounded-full mr-auto truncate"> Make Post <PlusIcon className="pl-2 h-6 my-auto"/> </button></Link></div>
        <div className="block"><Link to="/management/dashboard"><button className={`${activeTab === 1 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <HomeIcon className="h-6 pr-2"/> Dashboard</span></button></Link></div>
        <div className="block"><Link to="/management/listings"><button className={`${activeTab === 2 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <CollectionIcon className="h-6 pr-2"/> Advert Listings</span></button></Link></div>
        <div className="block"><Link to="/management/collection"><button className={`${activeTab === 3 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <SaveIcon className="h-6 pr-2"/> Saved Items</span></button></Link></div>
        <div className="block"><Link to="/management/orders"><button className={`${activeTab === 4 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <ArchiveIcon className="h-6 pr-2"/> Orders</span><span className="px-1 rounded-full text-white bg-red-500 text-xs">4</span></button></Link></div>
        <div className="block"><Link to="/management/message"><button className={`${activeTab === 5 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <ChatAlt2Icon className="h-6 pr-2"/> Message</span><span className="px-1 rounded-full text-white bg-red-500 text-xs">4</span> </button></Link></div>
        <div className="block"><Link to="/management/settings"><button className={`${activeTab === 6 ? 'border-r-2 border-slate-300':''} flex p-1 hover:border-r-2 hover:border-slate-300`}> <span className="hidden sm:flex text-lg"> <CogIcon className="h-6 pr-2"/> Settings</span></button></Link></div>
      </div>
      <div className="adsectionBlockHeight mr-24 pt-4">
        <div className="sm:flex rounded-xl bg-slate-200 mx-auto h-32 sm:w-44 md:w-48 p-2">
          <span className="text-lg max-w-min font-bold text-right text-gray-500">PREMIUM MEMBERSHIP COMING <br/> SOON</span>
          <LazyLoadImage
              src='/images/managementPage/leaning2.png'
              className=" h-28 w-11"
              effect="blur"
          />
        </div>
      </div>
    </div>
  )
}
export default Sidebar

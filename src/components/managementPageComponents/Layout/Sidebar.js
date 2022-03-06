import React from 'react' 
import { 
  HomeIcon,
  SaveIcon,
  ArchiveIcon,
  ChatAlt2Icon
} from '@heroicons/react/outline'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-10 sm:w-60 py-5 sm:px-1 sm:m-4 md:m-3  overflow-y-scroll">
      <div className="grid gap-5 text-center"> 
        <div className="block"><button className="flex">  <span className="hidden sm:block">Dashboard</span></button></div>
        <div className="block"><button className="flex"> <span className="hidden sm:block">Saved Items</span></button></div>
        <div className="block"><button className="flex">  <span className="hidden sm:block">Orders</span></button></div>
        <div className="block"><button className="flex">  <span className="hidden sm:block">Message</span></button></div>
        <div className="block"><button className="flex">  <span className="hidden sm:block">Settings</span></button></div>
      </div>
      <div className="hidden sm:flex absolute bottom-4 rounded-xl bg-slate-200  h-32 sm:w-44 md:w-48 p-4">
        <span className="text-md font-bold text-right text-gray-500">PREMIUM MEMBERSHIP COMING <br/> SOON</span>
        <LazyLoadImage
            src="images/managementPage/leaning2.png"
            className=" h-28 w-20"
            effect="blur"
        />
      </div>
    </div>
  )
}

export default Sidebar

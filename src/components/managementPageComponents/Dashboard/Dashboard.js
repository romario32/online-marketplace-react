import React from 'react'
import Graph from './Graph'
import {ArrowNarrowUpIcon, ArrowNarrowDownIcon, UserCircleIcon} from '@heroicons/react/solid'
import {UserIcon, UserGroupIcon, HeartIcon, SaveIcon} from '@heroicons/react/outline'

const Dashboard = () => {
  return (
    <div className="block bg-slate-100 w-screen m-3 px-5 py-7 rounded-2xl overflow-y-scroll">
        <div className="grid grid-cols-1 mb-4">
          <h6 className="text-3xl font-semibold">Dashboard</h6>
          <span className="block text-sm font-bold text-slate-500">Information on Products that you posted</span>
        </div>
        <div className="grid grid-cols-2 sm:flex mx-auto h-28">
            <div className="sm:col-span-1 col-span-2 bg-white border-2 border-slate-200 p-5 mx-2 my-2 rounded-lg sm:w-1/2 h-fit">
                <div className="py-2">
                  <span className="flex text-lg font-semibold"><UserGroupIcon className="h-5 w-5 my-auto pr-1"/>Subscribers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xl font-medium">13,000</span>
                  <span className="flex text-green-500 text-lg font-medium"><ArrowNarrowUpIcon className="h-4 m-auto pr-1"/> 10% </span>
                </div>
            </div>
            <div className="sm:col-span-1 col-span-2 bg-white border-2 border-slate-200 p-5 mx-2 my-2 rounded-lg sm:w-1/2 h-fit">
                <div className="py-2">
                  <span className="flex text-lg font-semibold"><HeartIcon className="h-5 w-5 my-auto pr-1"/>Likes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xl font-medium">13,000</span>
                  <span className="flex text-red-500 text-lg font-medium"><ArrowNarrowDownIcon className="h-4 m-auto pr-1"/> 10% </span>
                </div>
            </div>
        </div>
        <div className="grid col-span-1 mt-36 sm:mt-10">
           <div className="col-span-2 bg-white p-5 mx-2 my-5 rounded-lg">
             Ad
           </div>
        </div> 
        <div className="grid col-span-1">
            <Graph/>
        </div> 
        <div className="grid col-span-1 sm:mt-20">
           <div className="col-span-2 bg-white p-5 mx-2 my-5 rounded-lg">
             Ad
           </div>
        </div> 
    </div>
  )
}

export default Dashboard
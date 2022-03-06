import React from 'react'
import Graph from './Graph'
const Dashboard = () => {
  return (
    <div className="bg-slate-100 w-screen sectionBlockHeight m-5 px-5 py-8 rounded-2xl overflow-y-scroll">
        <div className="block ml-3">
          <h6 className="text-3xl font-semibold">Dashboard</h6>
        </div>
        <div className="block sm:flex mx-auto h-20 my-5">
            <div className="bg-red-100 p-5 m-2 rounded-lg sm:w-1/2">r</div>
            <div className="bg-red-100 p-5 m-2 rounded-lg sm:w-1/2">f</div>
        </div>
        <div className="block mt-16 sm:mt-0">
            <Graph/>
        </div> 
    </div>
  )
}

export default Dashboard
import React from 'react'
import {MenuAlt3Icon, ArrowRightIcon} from '@heroicons/react/outline'
const Header = () => {
  return ( 
    <div className="flex justify-between bg-slate-100">
        <div className="m-3">
          <a to="/">
            <span className="sr-only">Workflow</span>
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <button className="sm-none sm:absolute top-3/4 right-0 sm:top-3 sm:right-36 p-2 bg-slate-100 border-2 border-blue-200 rounded-xl hover:bg-blue-100">
          <span className="flex font-medium">Main Screen  <ArrowRightIcon className="pl-1 h-5 my-auto"/></span>
        </button>
        <button className="sm:hidden p-1 m-3 h-fit border-2 border-slate-300 rounded-lg hover:bg-slate-200"><MenuAlt3Icon className="h-7"/></button>
    </div>
  )
}

export default Header
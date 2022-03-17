import {Fragment} from 'react'
import {MenuAlt3Icon, ArrowRightIcon} from '@heroicons/react/outline'
import { 
  LogoutIcon, CogIcon, HomeIcon
} from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react';



    // icon: IconOne,
const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##'
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##' 
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##' 
  },
]

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
        <div className="flex sm-none">
          <button className="p-2 m-3 mr-0 bg-slate-100 border-2 border-blue-200 rounded-xl hover:bg-blue-100">
            <span className="flex font-medium">Main Screen  <LogoutIcon className="pl-1 h-5 my-auto"/></span>
          </button>

            <Popover className="relative my-auto">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="mx-4 rounded-full bg-slate-300 w-10 h-10"
                  > 
                  
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
                    <Popover.Panel className="absolute w-48 z-10 px-1 mt-1 transform right-1 sm:px-0 max-w-md">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-2 bg-gray-50">
                          <a
                              href="#"
                              className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex justify-between"> 
                              <HomeIcon className="pl-2 h-5 my-auto"/>
                              <span className="text-sm font-medium text-right text-gray-900">
                                Management Dashboard
                              </span>  
                            </span> 
                          </a>
                          <hr/>
                          <a
                              href="#"
                              className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex  justify-between"> 
                              <CogIcon className="pl-2 h-5 my-auto"/>
                              <span className="text-sm font-medium text-gray-900">
                                Settings
                              </span> 
                            </span> 
                          </a>
                          <hr/>
                          <a
                            href="#"
                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex justify-between"> 
                              <LogoutIcon className="pl-2 h-5 my-auto"/>
                              <span className="text-sm font-medium text-gray-900">
                                Logout
                              </span>  
                            </span> 
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> 
 
        </div>
        <button className="sm:hidden p-1 m-3 h-fit border-2 border-slate-300 rounded-lg hover:bg-slate-200"><MenuAlt3Icon className="h-7"/></button>
    </div>
  )
}

export default Header
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { 
  InboxInIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import SearchBar from '../searchBar/SearchBar';
import Collection from '../collection/Collection';
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function DesktopNavbar(props){
    return(
          <>
            <div className="w-full mx-auto">
                <SearchBar categoryDropdownPosition={"right-88"}/>
            </div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group py-1 text-gray-400 hover:bg-gray-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span classNames="truncate">Todays Deals</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-7 w-12 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
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
                    <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {props.Deals.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                             {props.RecentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* <a href="#" className="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <InboxInIcon className="h-6 w-6"/>
            </a>
            <Collection/> */} 
            <Link to="/userLogin" className=" border-l-2 pl-4 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link> 
            <Link to="/userLogin" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </Link>  
            </>
        );
    }
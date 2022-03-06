import {React, Fragment, useState} from "react";
import { Listbox, Popover, Transition } from '@headlessui/react';
import {
    SearchIcon,
    AdjustmentsIcon,
    CheckIcon
  } from '@heroicons/react/outline';
  import { ChevronDownIcon } from '@heroicons/react/solid';
  import FilterPopup from "../filter/FilterPopup";
  import SearchPopup from "./SearchPopup";
  import { Link } from "react-router-dom";
  const categories = [
    { name: 'All Categories' },
    { name: 'Electonics' },
    { name: 'Clothes' },
    { name: 'Cosmetics' },
    { name: 'Furniture' },
    { name: 'Household Products' },
  ]
export default function SearchBar(props){
  const [selected, setSelected] = useState(categories[0])
  return(
        <div className="py-2 ">
          <div className="flex p-2 rounded-xl bg-slate-100 ">
           {/* Mobile search bar */}
            <Popover>
              <Popover.Button className="md:hidden p-2 rounded-md items-center flex justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span className="sr-only">filter</span>
                <AdjustmentsIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
              <Popover.Panel focus className="absolute z-10 top-48 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <FilterPopup /> 
              </Popover.Panel>  
            </Popover>
            
            {/* Desktop search bar */}
            <div className="inline-flex items-center w-full bg-white rounded-md border-2">
              <input type="text" className="w-full rounded-l-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-r-2" placeholder="SEARCH"/>
              <Popover>
                <Link to="/searchPage">
                <Popover.Button className="p-2 rounded-r-sm items-center flex justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </Link>
                <Popover.Panel focus className="absolute z-10 top-48 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                  <SearchPopup/>
                </Popover.Panel> 
              </Popover>
            </div> 
            <Listbox value={selected} onChange={setSelected}>
              <div className="md-none">
              <Listbox.Button className="rounded p-2 ml-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
                <span className="truncate">{selected.name}</span>
                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
              </Listbox.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                  <Listbox.Options className={`${props.categoryDropdownPosition} absolute w-48 mt-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                      {categories.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                              active ? 'text-slate-900 bg-slate-100' : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
              </Transition>
            </Listbox>
          </div> 
        </div>
  );
}







import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
const FilterBar = () => {
  return (
    <>
    <div className="py-4 px-auto md-none flex justify-around">
      <div className="flex p-2 rounded-xl bg-slate-100">
        <Menu>
          <div className="md-none">
          <Menu.Button className="rounded p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
            <span >Category</span>
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
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
              <Menu.Items className={`${"right-80"} absolute w-24 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                    >
                      Electonics
                    </button>
                </Menu.Item> 
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200">
                      Clothes
                    </button>
                </Menu.Item>
              </Menu.Items>
          </Transition>
        </Menu>
        <Menu>
          <div className="md-none">
          <Menu.Button className="rounded p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
            <span >Category</span>
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
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
              <Menu.Items className={`${"right-80"} absolute w-24 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                    >
                      Electonics
                    </button>
                </Menu.Item> 
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200">
                      Clothes
                    </button>
                </Menu.Item>
              </Menu.Items>
          </Transition>
        </Menu>
        <Menu>
          <div className="md-none">
          <Menu.Button className="rounded p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
            <span >Category</span>
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
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
              <Menu.Items className={`${"right-80"} absolute w-24 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                    >
                      Electonics
                    </button>
                </Menu.Item> 
                <Menu.Item> 
                    <button
                      className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200">
                      Clothes
                    </button>
                </Menu.Item>
              </Menu.Items>
          </Transition>
        </Menu>
      </div> 
    </div>
    </>
  );
};

export default FilterBar;

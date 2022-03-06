import React from 'react';
import { Popover } from '@headlessui/react';
import {
    XIcon,
  } from '@heroicons/react/outline'
const SearchPopup = () => {
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-end">
            <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
        </div>
        <div className="mt-6">
            <nav className="grid gap-y-8">

            </nav>
        </div>
        </div>
        <div className="py-6 px-5 space-y-6">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Pricing
            </a>

            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Docs
            </a>
        </div>
        <div>
            <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
            Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
            </a>
            </p>
        </div>
        </div>
    </div>      
  );
};

export default SearchPopup;

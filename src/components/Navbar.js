/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon, 
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  AdjustmentsIcon,
  MenuAlt3Icon,
  SearchIcon 

} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> 
        
          <Popover.Group as="nav" className="items-center hidden md:flex justify-end space-x-6 flex-auto">

            <div className="w-full mx-auto">
              <div className="py-2">
                <div className="flex p-2 rounded-xl bg-slate-100">
                  <div className="inline-flex items-center w-full bg-white rounded-md border-2">
                    <input type="text" className="w-full rounded-l-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-r-2" placeholder="SEARCH"/>
                    <Popover className="relative">
                      <Popover.Button className="p-2 items-center flex justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">filter</span>
                        <SearchIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                      <Popover.Panel focus className="absolute top-25 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <>
                        search result
                        </>
                      </Popover.Panel>
                    </Popover>
                  </div> 
                  <Menu>
                    <div>
                    <Menu.Button className="rounded p-2 ml-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
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
                        <Menu.Items className="absolute right-88 w-24 mt-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Electonics
                              </button>
                          </Menu.Item> 
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Clothes
                              </button>
                          </Menu.Item>
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Beauty or personal care
                              </button>
                          </Menu.Item>
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Household products
                              </button>
                          </Menu.Item>
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Furniture
                              </button>
                          </Menu.Item>
                          <Menu.Item> 
                              <button
                                className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                              >
                                Automobile parts
                              </button>
                          </Menu.Item>
                        </Menu.Items>
                    </Transition>
                  </Menu>
                </div> 
              </div>
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
                    <span>Todays Deals</span>
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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
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
                              {recentPosts.map((post) => (
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
            <a href="#" className=" border-l-2 pl-4 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </Popover.Group>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
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
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
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
        </Popover.Panel>
      </Transition>
    
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-4">
        <div className="py-2">
          <div className="flex p-2 rounded-xl bg-slate-100">
            <div className="inline-flex items-center w-full bg-white rounded-md border-2">
              <input type="text" className="w-full rounded-l-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-r-2" placeholder="SEARCH"/>
              <Popover>
                <Popover.Button className="p-2 items-center flex justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">filter</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                <Popover.Panel focus className="absolute top-25 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                  <>
                  search result
                  </>
                </Popover.Panel>
              </Popover>
            </div> 
            <Menu>
              <div>
              <Menu.Button className="rounded p-2 ml-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200">
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
                  <Menu.Items className="absolute right-7 w-24 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Electonics
                        </button>
                    </Menu.Item> 
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Clothes
                        </button>
                    </Menu.Item>
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Beauty or personal care
                        </button>
                    </Menu.Item>
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Household products
                        </button>
                    </Menu.Item>
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Furniture
                        </button>
                    </Menu.Item>
                    <Menu.Item> 
                        <button
                          className="group flex items-center w-full px-2 py-2 text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                        >
                          Automobile parts
                        </button>
                    </Menu.Item>
                  </Menu.Items>
              </Transition>
            </Menu>
          </div> 
        </div>
      </div>
    </Popover>
  )
}
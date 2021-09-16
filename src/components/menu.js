/* This example requires Tailwind CSS v2.0+ */
import * as React from "react"

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const TitleMenu = ({title, href}) => (
    <a
      href={href}
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      {title}
    </a>
);

const TitlePanelMenu = ({title, href}) => (
  <a
    href={href}
    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
  >
    {title}
  </a>
);

export default function MenuComponent() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <TitleMenu title="Home" href="/"/>
                  <TitleMenu title="Projects" href="/projects"/>
                  <TitleMenu title="Papers" href="/papers"/>
                  <TitleMenu title="Team" href="/team"/>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <TitlePanelMenu title="Home" href="/"/>
              <TitlePanelMenu title="Projects" href="/projects"/>
              <TitlePanelMenu title="Papers" href="/papers"/>
              <TitlePanelMenu title="Team" href="/team"/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



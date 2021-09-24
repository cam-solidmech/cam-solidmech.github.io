import * as React from "react"
import { PageProps, Link } from "gatsby"
import { MailIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import picture_Vikram_Deshpande from  "../images/picture_Vikram_Deshpande.jpg"


const ListItem = ({children}) => {
	return (
			<li className="py-2 flex">
			  <div className="ml-3">
				<p className="text-sm font-medium text-gray-900">{children}</p>
			  </div>
			</li>
    );
};

const IndexPage  = ({ data }) => {
  return (<Layout>
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 text-center lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
              <span className="block xl:inline">Cambridge Solid Mechanics Group</span>
            </h2>
            <h2 className="mt-6 text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
              <span className="block text-indigo-600 xl:inline">Prof. Vikram Sudhir Deshpande (FRS)</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
Vikram Deshpande is an engineer who has made significant contributions in fields ranging from the design of micro-architectured materials to modelling soft and active materials. His innovations have helped define the modern frontiers of solid mechanics. 
            </p>
    <ul role="list" className="divide-y divide-gray-200">
        <ListItem>Invention of a new class of architected materials for diverse applications including lightweight structures, energy absorption and shock mitigation</ListItem>
        <ListItem>Development of theories to exploit fluid-structure interaction effects to enhance the blast resistance of land and sea vehicles</ListItem>
        <ListItem>Creation of computational tools for interrogating the high-temperature performance of alloys used in engines</ListItem>
        <ListItem>Unravelling the role of entropic forces in mechano-transduction within living cells</ListItem>
        <ListItem>Analysing the failure of solid electrolyte lithium ion batteries</ListItem>
    </ul>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="/CV_Deshpande2021.pdf" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" >
                  Curriculum Vitae
                </a>
              </div>
              <div className="ml-6 items-center justify-center flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>vsd20@cam.ac.uk</p>
                </div>
			  </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img 
            className="absolute inset-0 w-full h-full object-cover"
            src={picture_Vikram_Deshpande}
            alt=""
          />
        </div>
      </main>
  </Layout>);
};

export default IndexPage

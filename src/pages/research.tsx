import * as React from "react"

import Layout from "../components/layout"

/*
const IndexPage  = ({ data }) => {
  return (<Layout>
    <article className='prose'>
        Our projects
    </article>
  </Layout>);
};

export default IndexPage
*/


import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Solids',
    features: [
      {
        name: 'Micro-architected solids',
        description:
		  'Micro-architectured solids are an emerging new class of engineering materials, ranging from gyroid foams on the nanoscale to 3D composites at the micron scale and above. They offer the opportunity for design at the microstructural level and can lead to new combinations of properties, such as high thermal resistance, high toughness and high strength at low weight. The group has invented several such materials long with new manufacturing and test techniques including in-situ 3D X-ray tomography methods for ceramic/metal composites (cermets).',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Materials',
    features: [
      {
        name: 'Structural materials under high rate loading',
        description:
'The scope of this work is very broad: it encompasses fluid-structure interaction effects between blast waves and structures to the invention of new structural materials for blast-resistant sandwich panels. An important element of the work has been the development of laboratory- based simulators of blast loading dynamic events. This provides the ability to make critical scientific measurements and observations which are not possible in field tests. These simulators include: (i) firing of foam projectiles to exert controlled and known dynamic loads on structures; (ii) development of a water shock tube to study fluid-structure interaction without the need to detonate an explosive charge and (iii) loading of structures by high velocity granular and fluid sprays. This experimental work has been accompanied by the development of new simulation tools to perform large-scale computations of these dynamic events, e.g. coupled discrete particle/finite element methods to simulate granular loading of structures.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Plasticity',
    features: [
      {
        name: 'Plasticity on the micron scale',
        description:
		'How do dislocations collectively dictate the high temperature creep behaviour of engineering alloys? We have developed computational mechanics methodology for the motion of discrete dislocations (both climb and glide) coupled to vacancy diffusion. This explains, for the first time, the origins of the continually increasing creep strain rates in superalloys and the role of particle size effects in metallic composites at high temperatures. In doing so we have taken discrete dislocation theory from a primitive state of modelling of a small number of dislocations in the 2D small strain context to complex multi-physics high temperature applications. The theory now includes non-linear effects such as lattice rotation, geometrical non-linearities and coupling of plasticity and dislocation motion to vacancy and interfacial diffusion in complex alloys.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
  {
    name: 'Mechano-biology',
    features: [
      {
        name: "Mechano-biology of cells and tissues",
        description:
'We have pioneered the development modelling frameworks for the mechano-sensitive response of eukaryotic cells with a focus on the role of the cytoskeleton and focal adhesions. A key insight was to develop an ensemble for the homeostatic equilibrium of cells even though from a conventional thermodynamics viewpoint, living cells are ultimate examples of non- equilibrium systems. This has led to the development of a statistical mechanics framework for living cells, on par with conventional statistical thermodynamics but yet accounting for the non-thermal fluctuations of cells and their subcellular components. The entropic forces associated with these non-thermal fluctuations help explain numerous non-intuitive phenomena including the alignment of cells in anisotropic environments and their mechano- sensitive spreading behaviour.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (<Layout>
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="pt-8 max-w-3xl">
            <h2 className="mt-6 text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
              Cambridge Solid Mechanics Group
            </h2>
			{/*
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
			*/}
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                        {/*
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                        </div>
                      </div>
                          */}
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  </Layout>)
}


import * as React from "react"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MailIcon } from '@heroicons/react/outline'

const getPeople = (data) => {
    return [
  {
    name: 'Prof. Vikram Sudhir Deshpande (FRS)',
    role: 'Group Leader',
    imageUrl: getImage(data.picture_Vikram_Deshpande),
    bio:
      'Vikram is an engineer who has made significant contributions in fields ranging from the design of micro-architectured materials to modelling soft and active materials. His innovations have helped define the modern frontiers of solid mechanics.',
    email: 'vsd20@cam.ac.uk',
  },
  {
    name: 'Dr. Shuvrangsu Das',
    role: 'Research Associate',
    imageUrl: getImage(data. picture_Shuvrangsu_Das),
    bio:
      'Shuvra works as a Research Associate in the Division C of CUED. He completed his Ph.D. from the University of Pennsylvania with Professor Pedro Ponte Castañeda and worked on homogenization of nonlinear composites. Currently, he is working to develop statistical mechanics framework for tissue morphogenesis',
    email: 'd909@cam.ac.uk',
  },
  {
    name: 'Dr. Padmeya P. Indurkar',
    role: 'Research Associate',
    imageUrl: getImage(data.picture_Padmeya_Indurkar),
    bio:
    'Padmeya works as a Research Associate in the Division C of CUED. He joined the Deshpande group in September 2020. He completed his Ph.D. from National University of Singapore (NUS) where he worked on continuum and crystal plasticity based approaches for modelling large strain deformation and ductile damage in advanced HCP Mg alloys. He is currently working on design of multiphase metamaterial systems with an aim of concurrent optimization of strength and fracture toughness. He is also exploring data-driven deep learning based approaches like graph neural networks for predicting properties of lattice architected materials.',
    email: 'pp522@cam.ac.uk',
  },
  {
    name: 'Dr. Dipayan Mukherjee',
    role: 'Research Associate',
    imageUrl: getImage(data.picture_Dipayan_Mukherjee),
    bio:
    'Dipayan works as a Research Associate in the Division C of CUED. He joined the Deshpande group in December 2020. He is presently working on the coupled electro-chemo-mechanical modeling of the dendrite and crack propagation in the all-solid-state Li-ion batteries. Dipayan has completed his Ph.D. from Ecole Polytechnique, France in October 2020 prior joining the group. His doctoral research focused on the coupled magneto-mechanical modeling of hard magnetorheological elastomers and coupled electro- mechanical modeling of the instabilities in twisted liquid-crystal bilayers.', 
    email: 'dm914@cam.ac.uk',
  },
  {
    name: 'Angkur Jyoti Dipanka Shaikeea',
    role: 'PhD Student',
    imageUrl: getImage(data.picture_Angkur_Shaikeea),
    bio:
    'Angkur is a PhD student that joined the Deshpande group in October 2017. His research includes the fracture toughness characterisation of micro- architected metamaterial and data driven deep learning methods. He enjoys poetry, music and photography and is soon going to be the inaugural Ashby fellow at Pembroke College.',
    email: 'ajds3@cam.ac.uk',
  },
  {
    name: 'Alberto Ippolito',
    role: 'PhD Student',
    imageUrl: getImage(data.picture_Alberto_Ippolito),
    bio:
    'Alberto is a PhD student that joined the Deshpande group in October 2017. His research includes statistical thermodynamic modelling and stochastic non-equilibrium physics methods for the characterisation of cell response. He also passed the Italian Engineering Chartership Exam in 2021.',
    email: 'ai318@cam.ac.uk',
  },
  {
    name: 'Ivan Grega',
    role: 'PhD Student',
    imageUrl: getImage(data.picture_Ivan_Grega),
    bio:
    'Ivan is a PhD student that joined the Deshpande group in September 2021. He has recently completed his Engineering Tripos with a distinction from Pembroke College.',
    email: 'ig348@cam.ac.uk',
  },
  ];
};


export default function Example({data}) {
    const people = getPeople(data);
    return (<Layout>
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-500">
              Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
              vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <GatsbyImage className="object-cover shadow-lg rounded-lg" image={person.imageUrl} alt="" />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      <li>
                          <div className="items-center justify-center flex">
                            <div className="flex-shrink-0">
                              <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                              <p>{person.email}</p>
                            </div>
                          </div>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Layout>)
}

export const query = graphql`
  fragment gatsbyImage on File {
    childImageSharp {
        gatsbyImageData(
            layout: FULL_WIDTH
        )
      }
  }
  query {
    picture_Vikram_Deshpande: file(relativePath: { eq: "picture_Vikram_Deshpande.jpg" }) {
        ...gatsbyImage
    },
    picture_Alberto_Ippolito: file(relativePath: { eq: "picture_Alberto_Ippolito.jpg" }) {
        ...gatsbyImage
    },
    picture_Angkur_Shaikeea: file(relativePath: { eq: "picture_Angkur_Shaikeea.png" }) {
        ...gatsbyImage
    },
    picture_Dipayan_Mukherjee: file(relativePath: { eq: "picture_Dipayan_Mukherjee.jpg" }) {
        ...gatsbyImage
    },
    picture_Ivan_Grega: file(relativePath: { eq: "picture_Ivan_Grega.png" }) {
        ...gatsbyImage
    },
    picture_Padmeya_Indurkar: file(relativePath: { eq: "picture_Padmeya_Indurkar.png" }) {
        ...gatsbyImage
    },
    picture_Shuvrangsu_Das: file(relativePath: { eq: "picture_Shuvrangsu_Das.jpg" }) {
        ...gatsbyImage
    },
  }
`;

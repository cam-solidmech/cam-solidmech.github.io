import * as React from "react"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MailIcon } from '@heroicons/react/outline'

const getPeople = (data) => {
    return [
  {
    name: 'Vikram Deshpande',
    role: 'Group Leader',
    imageUrl: getImage(data.vikram),
    bio:
      'Vikram Deshpande is an engineer who has made significant contributions in fields ranging from the design of micro-architectured materials to modelling soft and active materials. His innovations have helped define the modern frontiers of solid mechanics.',
    email: 'vsd20@cam.ac.uk',
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
    vikram: file(relativePath: { eq: "picture_Vikram_Deshpande.jpg" }) {
        ...gatsbyImage
        }
  }
`;

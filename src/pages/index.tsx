import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage  = ({ data }) => {
    const image = getImage(data.astronaut);
  return (<Layout>
    <article className='prose'>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <GatsbyImage image={image} />
    </article>
  </Layout>);
};

export const query = graphql`
  fragment gatsbyImage on File {
    childImageSharp {
        gatsbyImageData(
            width: 200, 
            height: 200,
            layout: FIXED
        )
      }
  }
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        ...gatsbyImage
        }
  }
`;

export default IndexPage

import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Menu from "../components/menu"

const IndexPage  = ({ data }) => (
  <Layout>
    <article className='prose'>
        <Menu/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img className={`float-right mx-8 z-0`} fixed={data.astronaut.childImageSharp.fixed} />
    </article>
  </Layout>
)

export const query = graphql`
  fragment gatsbyImage on File {
    childImageSharp {
        fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
        }
      }
  }
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        ...gatsbyImage
        }
  }
`;

export default IndexPage

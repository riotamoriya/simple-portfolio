// index.jsx
import React from 'react'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'


import ADDIN from './addin'

const RootIndex = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allContentfulProjectPost(sort: { publishDate: DESC }) {
        nodes {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 424
              height: 212
            )
          }
          description {
            raw
          }
        }
      }
      allContentfulPerson(
        filter: { contentful_id: { eq: "1Cl0YP2dl7hvh980h6d6go" } }
      ) {
        nodes {
          name
          shortBio {
            raw
          }
          title
          heroImage: image {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
          }
        }
      }
    }
  `)

  const author = get(data, 'allContentfulPerson.nodes[0]')
  return (
    <Layout>
      <Hero
        image={author.heroImage.gatsbyImage}
        title={author.name}
        content={author.shortBio}
      />
    {/* <Container> */}
      <ADDIN />
    {/* </Container> */}
    </Layout>
  )
}

export default RootIndex

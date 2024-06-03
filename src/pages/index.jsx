import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import RenderNotion from '../components/render-notion'
import Container from '../components/container'


const IndexPage = ({ data }) => {
  const author = get(data, 'allContentfulPerson.nodes[0]')
  const notion_aboutme_page = get(data, 'notionAboutme.nodes[0]')
  const notion_contact_page = get(data, 'notionContact.nodes[0]')

  
  return (
    <Layout>
      <Hero
        image={author.heroImage.gatsbyImage}
        title={author.name}
        content={author.shortBio}
      />
      <Container>
        <RenderNotion MarkdownRemark={notion_aboutme_page} background_color="" />
      </Container>
      <Container>
        <RenderNotion title={notion_contact_page.frontmatter.title}  MarkdownRemark={notion_contact_page} background_color="#ddf50608" />
      </Container>

    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
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
    
    notionAboutme: allMarkdownRemark(filter: { frontmatter: { Slug: { eq: "about-me" } } }) {
      nodes {
        frontmatter {
          title
          Published
          UpdatedAt
          Icon
          CreatedAt
          Slug
        }
        html
      }
    }
    
    notionContact: allMarkdownRemark(filter: { frontmatter: { Slug: { eq: "contact" } } }) {
      nodes {
        frontmatter {
          title
          Published
          UpdatedAt
          Icon
          CreatedAt
          Slug
        }
        html
      }
    }

    
  
  
}
  
`

export default IndexPage

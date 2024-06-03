import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import RenderNotion from '../components/render-notion'
import Container from '../components/container'


const IndexPage = ({ data }) => {
  const notion_privacy_policy_page = get(data, 'notionPrivacyPolicy.nodes[0]')
  
  return (
    <Layout>
      <Hero
        // image={author.heroImage.gatsbyImage}
        title="プライバシーポリシー"
        // content={author.shortBio}
      />
      <Container>
        <RenderNotion  MarkdownRemark={notion_privacy_policy_page} />
      </Container>

    </Layout>
  )
}

export const pageQuery = graphql`
query {
    notionPrivacyPolicy: allMarkdownRemark(filter: { frontmatter: { Slug: { eq: "privacy-policy" } } }) {
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

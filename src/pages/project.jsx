import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class ProjectIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulProjectPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Project" />
        <Hero title="Project" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allContentfulProjectPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        techTags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 222
          )
        }
        description {
          raw
        }
      }
    }
  }
`

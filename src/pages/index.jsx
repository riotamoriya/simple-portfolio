import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
// import RenderNotion from '../components/render-notion'
import Container from '../components/container'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import { FaFile, FaFileAlt, FaFileArchive, FaFilePdf, FaFileExcel } from 'react-icons/fa';


// import FormComponent from '../components/form';

const IndexPage = ({ data }) => {
  const author = get(data, 'allContentfulPerson.nodes[0]')
  // const notion_aboutme_page = get(data, 'notionAboutme.nodes[0]')
  // const notion_contact_page = get(data, 'notionContact.nodes[0]')
  
  return (
    <Layout>
      <Hero
        image={author.heroImage.gatsbyImage}
        title={author.name}
        content={author.shortBio}
      />
      <Container>
        <a href={author.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }} >
          <FaLinkedin style={{ width: '2rem', height: '2rem', marginRight: '0.2rem' }} />
          linkedin.com/in/ryota-moriya
        </a>
        <a href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }} >
          <FaEnvelope style={{ width: '2rem', height: '2rem', marginRight: '0.2rem' }} />
          {author.email}
        </a>
        {/* <a href={author.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }} >
          <FaFileAlt style={{ width: '2rem', height: '2rem', marginRight: '0.2rem' }} />
          職務経歴書(日本式)
        </a> */}
      </Container>

      {/* <Container>
        <RenderNotion MarkdownRemark={notion_aboutme_page} background_color="" />
      </Container> */}
      {/* <Container>
        <RenderNotion title={notion_contact_page.frontmatter.title}  MarkdownRemark={notion_contact_page} background_color="" />
      </Container> */}

      {/* <Container>
        <FormComponent title="連絡フォーム" />
      </Container> */}


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
        linkedin
        email
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
  
}
  
`

export default IndexPage

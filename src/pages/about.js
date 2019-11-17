import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { content, featured_media } = data.allWordpressPage.edges[0].node

  return (
    <Layout>
      <About
        content={content}
        heroImage={featured_media.localFile.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPage(filter: {title: {eq: "About"}}) {
      edges {
        node {
          content
          featured_media {
 					 localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

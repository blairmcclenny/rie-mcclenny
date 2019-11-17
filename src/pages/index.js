import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Home from '../components/Home'

export default ({ data }) => {
  const { fluid } = data.allWordpressPage.edges[0].node.featured_media.localFile.childImageSharp

  return (
    <Layout>
      <Home heroImage={fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq: "home"}}) {
      edges {
        node {
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

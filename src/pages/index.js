import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Home from '../components/Home'

export default ({ data }) => {
  const { featured_media } = data.allWordpressPage.edges[0].node

  return (
    <Layout title='The Dessert Snob'>
      <Home featuredMedia={featured_media} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq: "home"}}) {
      edges {
        node {
          featured_media {
            alt_text
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

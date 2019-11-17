import React from 'react'
import Layout from '../components/Layout'
import Work from '../components/Work'

export default ({ data }) => (
  <Layout>
    <Work work={data.allWordpressWpWork.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allWordpressWpWork(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          slug
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

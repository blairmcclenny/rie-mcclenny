import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Work from '../components/Work'

export default ({ data }) => {
  return (
    <Layout path='/work/' title='Work'>
      <Work work={data.allWordpressWpWork.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressWpWork(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          slug
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

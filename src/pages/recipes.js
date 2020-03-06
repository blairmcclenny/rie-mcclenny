import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Recipes from '../components/Recipes'

export default ({ data }) => {
  return (
    <Layout path='/recipes/' title='Recipes'>
      <Recipes recipes={data.allWordpressWpRecipe.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressWpRecipe(sort: {fields: date, order: DESC}) {
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

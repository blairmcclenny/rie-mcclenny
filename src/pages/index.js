import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styles from './index.module.scss'

export default ({ data }) => {
  const { fluid } = data.allWordpressPage.edges[0].node.featured_media.localFile.childImageSharp

  return (
    <Layout>
      <main className={styles.main}>
        <Img fluid={fluid} />
      </main>
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

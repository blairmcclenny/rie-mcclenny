import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './about.module.scss'

export default ({ data }) => {
  const { content, featured_media } = data.allWordpressPage.edges[0].node

  return (
    <Layout>
      <div className={styles.aboutGrid}>
        <Img fluid={featured_media.localFile.childImageSharp.fluid} />
        <div>
          <h2>Hello!</h2>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
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

import React from 'react'
import Layout from '../components/layout/layout.js'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './work.module.scss'

export default ({ data }) => (
  <Layout>
    <div className={styles.workGrid}>
      {
        data.allWordpressWpWork.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/work/${node.slug}`}>
              <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allWordpressWpWork(sort: {fields: date}) {
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

import React from 'react'
import Layout from '../components/layout/layout.js'
import { graphql, Link } from 'gatsby'
import styles from './work.module.scss'

export default ({ data, pageContext }) => {
  const { title, acf } = data.allWordpressWpWork.edges[0].node

  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.hidden}>{title}</h2>
        <div
          className={`${styles.embedResponsive} ${styles.embedResponsiveYoutube}`}
          dangerouslySetInnerHTML={{__html: acf.youtube_video_embed}}
        />
        {
          pageContext.previous
            ? <Link className={styles.hidden} to={`/work/${pageContext.previous}`}>Previous</Link>
            : null
        }
        {
          pageContext.next
            ? <Link className={styles.hidden} to={`/work/${pageContext.next}`}>Next</Link>
            : null
        }
        <Link className={styles.hidden} to="/work">Back to Work</Link>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allWordpressWpWork(filter: {id: {eq: $id}}) {
      edges {
        node {
          title
          acf {
            youtube_video_embed
          }
        }
      }
    }
  }
`

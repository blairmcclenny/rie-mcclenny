import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { Main } from './work.style.js'

export default ({ data, pageContext }) => {
  const { title, acf } = data.allWordpressWpWork.edges[0].node

  return (
    <Layout>
      <Main>
        <h2 className='hidden'>{title}</h2>
        <div
          className={`embed-responsive embed-responsive-youtube`}
          dangerouslySetInnerHTML={{__html: acf.youtube_video_embed}}
        />
        {
          pageContext.previous
            ? <Link className='hidden' to={`/work/${pageContext.previous}`}>Previous</Link>
            : null
        }
        {
          pageContext.next
            ? <Link className='hidden' to={`/work/${pageContext.next}`}>Next</Link>
            : null
        }
        <Link className='hidden' to="/work">Back to Work</Link>
      </Main>
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

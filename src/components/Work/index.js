import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { WorkGrid } from './style'

const Work = ({ work }) => (
  <WorkGrid>
    {
      work.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/work/${node.slug}`}>
            <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
          </Link>
        </div>
      ))
    }
  </WorkGrid>
)

export default Work

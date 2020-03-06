import React from 'react'
import Img from 'gatsby-image'
import { AboutGrid } from './style'

const About = ({ content, featuredMedia }) => (
  <AboutGrid>
    <Img
      fluid={featuredMedia.localFile.childImageSharp.fluid}
      alt={featuredMedia.alt_text}
    />
    <div>
      <h2>Hello!</h2>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  </AboutGrid>
)

export default About

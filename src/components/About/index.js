import React from 'react'
import Img from 'gatsby-image'
import { AboutGrid } from './style'

const About = ({ content, heroImage }) => (
  <AboutGrid>
    <Img fluid={heroImage} />
    <div>
      <h2>Hello!</h2>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  </AboutGrid>
)

export default About

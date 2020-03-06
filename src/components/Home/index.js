import React from 'react'
import Img from 'gatsby-image'
import { StyledHome } from './style'

const Home = ({ featuredMedia }) => (
  <StyledHome>
    <Img
      fluid={featuredMedia.localFile.childImageSharp.fluid}
      alt={featuredMedia.alt_text}
    />
  </StyledHome>
)

export default Home

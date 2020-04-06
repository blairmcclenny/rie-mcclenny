import React from 'react'
import Img from 'gatsby-image'
import { StyledHome, StyledCaption } from './style'

const Home = ({ featuredMedia }) => (
  <StyledHome>
    <Img
      fluid={featuredMedia.localFile.childImageSharp.fluid}
      alt={featuredMedia.alt_text}
    />
    <StyledCaption>Photo by: Adam Bianchi</StyledCaption>
  </StyledHome>
)

export default Home

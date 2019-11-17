import React from 'react'
import Img from 'gatsby-image'
import { StyledHome } from './style'

const Home = ({ heroImage }) => (
  <StyledHome>
    <Img fluid={heroImage} />
  </StyledHome>
)

export default Home

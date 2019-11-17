import React from 'react'
import GlobalStyle from '../GlobalStyle'
import SEO from '../SEO'
import Header from '../Header'
import Footer from '../Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { StyledLayout } from './style'

library.add(fab)

const Layout = ({ children }) => (
  <StyledLayout>
    <GlobalStyle />
    <SEO />
    <Header />
      {children}
    <Footer />
  </StyledLayout>
)

export default Layout

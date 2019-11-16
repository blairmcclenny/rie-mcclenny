import React from 'react'
import SEO from '../SEO'
import Header from '../Header'
import Footer from '../Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styles from './layout.module.scss'

library.add(fab)

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <SEO />
    <Header />
      {children}
    <Footer />
  </div>
)

export default Layout

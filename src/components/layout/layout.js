import React from 'react'
import SEO from '../seo/SEO'
import Header from '../header/header'
import Footer from '../footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styles from './layout.module.scss'

library.add(fab)

export default ({ children }) => (
  <div className={styles.wrapper}>
    <SEO />
    <Header />
      {children}
    <Footer />
  </div>
)

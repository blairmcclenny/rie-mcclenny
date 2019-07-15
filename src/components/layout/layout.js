import React from 'react'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styles from './layout.module.scss'

library.add(fab)

export default ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
)

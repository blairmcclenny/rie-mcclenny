import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './header.module.scss'

const sections = ['Work', /*'Instagram',*/ 'About', 'Contact']

function Logo(props) {
  return (
    <h1 className={styles.logo}>
      <Link to="/">
        {
          props.name.toUpperCase().split(' ').map((word, i) => (
              <span key={i}>
                {
                  word
                    .split('')
                    .map((letter, i, word) => (
                      i === word.indexOf('C') && word.join('') === 'MCCLENNY' ? letter.toLowerCase() : letter
                    ))
                    .join('')
                }
              </span>
            ))
        }
      </Link>
    </h1>
  )
}

function NavLink(props) {
  return (
    <li className={styles.link}>
      <Link to={`/${props.section.toLowerCase().split(' ').join('-')}/`}>
        {props.section}
      </Link>
    </li>
  )
}

export default ({ data }) => {
  const { allWordpressSiteMetadata } = useStaticQuery(
    graphql`
      query {
        allWordpressSiteMetadata {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )
  const { name } = allWordpressSiteMetadata.edges[0].node

  return (
    <header className={styles.header}>
      <Logo name={name} />
      <nav className={styles.navMain}>
        <ul>
          {
            sections.map((section, i) => (
              <NavLink key={i} section={section} />
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

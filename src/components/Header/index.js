import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StyledHeader, StyledLogo, StyledNav, StyledNavLink } from './style'

const sections = [
  'Recipes',
  'Work',
  // 'Instagram',
  'About',
  // 'Contact',
]

const Logo = ({ name }) => (
  <StyledLogo>
    <Link to="/">
      {
        name.toUpperCase().split(' ').map((word, i) => (
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
  </StyledLogo>
)

const NavLink = ({ section }) => (
  <StyledNavLink className='link'>
    <Link to={`/${section.toLowerCase().split(' ').join('-')}/`}>
      {section}
    </Link>
  </StyledNavLink>
)

const Header = ({ data }) => {
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
    <StyledHeader>
      <Logo name={name} />
      <StyledNav>
        <ul>
          {
            sections.map((section, i) => (
              <NavLink key={i} section={section} />
            ))
          }
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

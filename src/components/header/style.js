import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 1rem;
`

export const StyledLogo = styled.h1`
  a {
    font-weight: 800;

    &:link,
    &:hover,
    &:visited,
    &:active {
      text-decoration: none;
      color: ${colors.text.black};
    }

    span {
      display: block;
      font-size: 4rem;
      line-height: .9;
    }
  }
`

export const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
  }
`

export const StyledNavLink = styled.li`
  margin-left: 1.25rem;

  a:link,
  a:hover,
  a:visited {
    text-decoration: none;
    color: gray;
  }
`

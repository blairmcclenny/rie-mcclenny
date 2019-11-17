import styled from 'styled-components'
import { colors, sizes } from '../../styles/theme'

export const StyledHeader = styled.header`
  @media (min-width: ${sizes.medium.min}) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1rem;
  }
`

export const StyledLogo = styled.h1`
  margin-bottom: 0;

  @media (max-width: ${sizes.small.max}) {
    a {
      span {
        font-size: 4rem;
      }
    }
  }

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
      font-size: 3.5rem;
      line-height: .9;
    }
  }
`

export const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    padding-left: 0;
  }
`

export const StyledNavLink = styled.li`
  & ~ & {
    margin-left: 1.25rem;
  }

  a:link,
  a:hover,
  a:visited {
    text-decoration: none;
    color: gray;
  }
`

import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const StyledFooter = styled.footer`
  margin-bottom: 2rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-left: .625rem;
    }
  }

  a:link,
  a:hover,
  a:active,
  a:visited {
    font-size: 1rem;
    color: ${colors.text.black};
    padding: .625rem;
    border: 1px solid ${colors.text.black};
    border-radius: 50%;
  }
`

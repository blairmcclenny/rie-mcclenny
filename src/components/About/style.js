import styled from 'styled-components'
import { sizes } from '../../styles/theme'

export const AboutGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.25rem;
  margin: 2rem 0;

  h2:first-child {
    margin-top: .5rem;
  }

  @media (min-width: ${sizes.medium.min}) {
    grid-template-columns: 2fr 3fr;

    h2:first-child {
      margin-top: 2rem;
    }
  }
`

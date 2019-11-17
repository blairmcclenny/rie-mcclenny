import styled from 'styled-components'
import { sizes } from '../../styles/theme'

export const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 1.25rem;

  @media (min-width: ${sizes.medium.min}) {
    padding: 0 2.5rem;
  }
`

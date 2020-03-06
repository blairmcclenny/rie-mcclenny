import styled from 'styled-components'
import { sizes } from '../../styles/theme'

export const RecipesGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.25rem;
  margin: 2rem 0;

  @media (min-width: ${sizes.small.min}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${sizes.medium.min}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${sizes.large.min}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

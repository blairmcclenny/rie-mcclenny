import styled from 'styled-components'
import { sizes } from '../styles/theme'

export const Main = styled.main`
  margin: 3.75rem auto;
`

export const Recipe = styled.article`
  ol {
    padding-left: 1rem;
    list-style: decimal outside none;

    li ~ li {
      margin-top: .625rem;
    }
  }
`

export const Hero = styled.div`
  @media (min-width: ${sizes.medium.min}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
`

export const Title = styled.h2`

`

export const Description = styled.p`

`

export const StyledMetrics = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .25rem;
`

export const StyledMetricsItem = styled.li`
  background: #eee;
  padding: 1.25rem;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
`

export const StyledMetricsItemHeader = styled.span`
  display: block;
  font-size: .875rem;
  font-weight: 700;
`

export const Directions = styled.div`
  margin: 1.875rem 0;

  @media (min-width: ${sizes.medium.min}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
`

export const Ingredients = styled.div`

`

export const Preparation = styled.div`

`
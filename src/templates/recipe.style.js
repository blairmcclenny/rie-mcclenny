import styled from 'styled-components'
import { sizes, colors } from '../styles/theme'

export const Main = styled.main`
  margin: 2rem auto;
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

export const HeroContent = styled.div``

export const Title = styled.h2``

export const Description = styled.div``

export const StyledMetrics = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .5rem;
  margin-top: 1.75rem;
`

export const StyledMetricsItem = styled.li`
  border: 1px solid ${colors.primary.black};
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
  margin: 0 0 1.875rem;

  @media (min-width: ${sizes.medium.min}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
`

export const Ingredients = styled.div``

export const Preparation = styled.div``

export const AdHorizontal = styled.div`
  padding: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin: 0;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  display: flex;
  justify-content: center;

  .adsbygoogle {
    display: block;
    background: #eee;
    width: 300px;
    height: 250px;
  }

  @media (min-width: ${sizes.large.min}) {
    .adsbygoogle {
      width: 728px;
      height: 90px;
    }
  }
`

export const AdSquare = styled.div``

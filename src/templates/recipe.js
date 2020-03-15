import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
// import { useCurrentWitdh } from '../hooks/UseCurrentWidth'
import {
  Main,
  Recipe,
  Hero,
  HeroContent,
  Title,
  Description,
  StyledMetrics,
  StyledMetricsItem,
  StyledMetricsItemHeader,
  AdHorizontal,
  Directions,
  Ingredients,
  Preparation
} from './recipe.style.js'

const Metrics = ({ metrics }) => {
  const {
    prepTime,
    cookTime,
    serves,
    optionalMetric01,
    optionalMetric02
  } = metrics

  const isPlural = (num) => num > 1 ? 's' : ''

  const displayTime = (hrs, mins) => {
    const hours = hrs ? `${hrs} hr${isPlural(hrs)} ` : ''
    const minutes = mins ? `${mins} min${isPlural(mins)}` : ''

    return `${hours}${minutes}`
  }

  const totalTime = () => {
    const totalPrepTime = Number(prepTime.hours) * 60 + Number(prepTime.minutes)
    const totalCookTime = Number(cookTime.hours) * 60 + Number(cookTime.minutes)
    const totalTime = totalPrepTime + totalCookTime

    if (totalTime >= 60) {
      const hours = Math.trunc(totalTime / 60)
      const minutes = totalTime % 60

      return `${hours !== 0 ? `${hours} hr${isPlural(hours)}` : ''}${minutes !== 0 ? ` ${minutes} min${isPlural(minutes)}` : ''}`
    } else {
      const minutes = totalTime

      return `${minutes} min${isPlural(minutes)}`
    }
  }

  return (
    <StyledMetrics>
      {
        (prepTime.minutes || prepTime.hours) &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>Prep Time</StyledMetricsItemHeader>
          {displayTime(prepTime.hours, prepTime.minutes)}
        </StyledMetricsItem>
      }
      {
        (cookTime.minutes || cookTime.hours) &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>Cook Time</StyledMetricsItemHeader>
          {displayTime(cookTime.hours, cookTime.minutes)}
        </StyledMetricsItem>
      }
      {
        (prepTime.minutes || prepTime.hours) &&
        (cookTime.minutes || cookTime.hours) &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>Total Time</StyledMetricsItemHeader>
          {totalTime()}
        </StyledMetricsItem>
      }
      {
        serves &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>Serves</StyledMetricsItemHeader>
          {serves}
        </StyledMetricsItem>
      }
      {
        optionalMetric01.header &&
        optionalMetric01.metric &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>{optionalMetric01.header}</StyledMetricsItemHeader>
          {optionalMetric01.metric}
        </StyledMetricsItem>
      }
      {
        optionalMetric02.header &&
        optionalMetric02.metric &&
        <StyledMetricsItem>
          <StyledMetricsItemHeader>{optionalMetric02.header}</StyledMetricsItemHeader>
          {optionalMetric02.metric}
        </StyledMetricsItem>
      }
    </StyledMetrics>
  )
}

export default ({ data, pageContext }) => {
  const {
    title,
    path,
    date,
    modified,
    featured_media,
    acf: {
      metrics,
      description,
      ingredients,
      preparation,
      youtube_video_embed,
    }
  } = data.allWordpressWpRecipe.edges[0].node

  useEffect(() => {
    let adsbygoogle

    if (window) {
      (adsbygoogle = window.adsbygoogle || []).push({})
    }
  })

  // let width = useCurrentWitdh()

  return (
    <Layout
      title={title}
      description={description}
      path={path}
      type='article'
      publishedTime={date}
      modifiedTime={modified}
    >
      <Main>
        <Recipe>
          <Hero>
            <Img
              fluid={featured_media.localFile.childImageSharp.fluid}
              alt={featured_media.alt_text}
            />
            <HeroContent>
              <Title>{title}</Title>
              {
                description &&
                <Description dangerouslySetInnerHTML={{__html: description}} />
              }
              <Metrics metrics={metrics} />
            </HeroContent>
          </Hero>
          <AdHorizontal>
            <ins
              className="adsbygoogle"
              data-ad-client="ca-pub-6645443580483867"
              data-ad-slot="1455147089"
            />
          </AdHorizontal>
          <Directions>
            <Ingredients>
              <h3>Ingredients</h3>
              <div dangerouslySetInnerHTML={{__html: ingredients}} />
            </Ingredients>
            <Preparation>
              <h3>Preparation</h3>
              <div dangerouslySetInnerHTML={{__html: preparation}} />
            </Preparation>
          </Directions>
          {
            youtube_video_embed &&
            <div
              className={`embed-responsive embed-responsive-youtube`}
              dangerouslySetInnerHTML={{__html: youtube_video_embed}}
            />
          }
        </Recipe>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allWordpressWpRecipe(filter: {id: {eq: $id}}) {
      edges {
        node {
          featured_media {
           alt_text
 					 localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          path
          date
          modified
          acf {
            description
            metrics {
              prepTime {
                hours
                minutes
              }
              cookTime {
                hours
                minutes
              }
              serves
              optionalMetric01 {
                header
                metric
              }
              optionalMetric02 {
                header
                metric
              }
            }
            ingredients
            preparation
            youtube_video_embed
          }
        }
      }
    }
  }
`

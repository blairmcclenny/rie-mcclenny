import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {
  Main,
  Recipe,
  Hero,
  Title,
  Description,
  StyledMetrics,
  StyledMetricsItem,
  StyledMetricsItemHeader,
  Directions,
  Ingredients,
  Preparation
} from './recipe.style.js'

// data-ad-format="auto"
// data-full-width-responsive="true"

const Metrics = ({ metrics }) => {
  const {
    prepTime,
    cookTime,
    serves
  } = metrics

  const pluralSingularHours = (num) => num > 1 ? 'hrs' : 'hr'
  const pluralSingularMinutes = (num) => num > 1 ? 'mins' : 'min'

  const displayTime = (hrs, mins) => {
    const hours = hrs ? `${hrs} ${pluralSingularHours(hrs)} ` : ''
    const minutes = mins ? `${mins} ${pluralSingularMinutes(mins)}` : ''

    return `${hours}${minutes}`
  }

  const totalTime = () => {
    const totalPrepTime = Number(prepTime.hours) * 60 + Number(prepTime.minutes)
    const totalCookTime = Number(cookTime.hours) * 60 + Number(cookTime.minutes)
    const totalTime = totalPrepTime + totalCookTime

    if (totalTime > 60) {
      const hours = `${Math.trunc(totalTime / 60)} ${pluralSingularHours(Math.trunc(totalTime / 60))}`
      const minutes = ` ${totalTime % 60} ${pluralSingularMinutes(totalTime % 60)}`

      return `${hours}${minutes !== 0 ? minutes : null}`
    } else {
      const minutes = totalTime % 60

      return `${minutes} ${pluralSingularMinutes(minutes)}`
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
    </StyledMetrics>
  )
}

export default ({ data, pageContext }) => {
  const {
    title,
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

  return (
    <Layout>
      <Main>
        <Recipe>
          <Hero>
            <Img fluid={featured_media.localFile.childImageSharp.fluid} />
            <div>
              <Title>{title}</Title>
              {
                description &&
                <Description>{description}</Description>
              }
              <Metrics metrics={metrics} />
            </div>
          </Hero>
          <div>
            <ins
              className="adsbygoogle"
              style={{
                display:'block',
                width: '728px',
                height: '90px'
              }}
              data-ad-client="ca-pub-6645443580483867"
              data-ad-slot="1455147089"
            />
          </div>
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
 					 localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
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

import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {
  Recipe,
  Title,
  Description,
  Metrics,
  MetricsItem,
  Ingredients,
  Preparation
} from './recipe.style.js'

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

  return (
    <Layout>
      <main>
        <Recipe>
          <Img fluid={featured_media.localFile.childImageSharp.fluid} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Metrics>
            <MetricsItem>Prep Time {metrics.prep_time}</MetricsItem>
            <MetricsItem>Cook Time {metrics.cook_time}</MetricsItem>
            <MetricsItem>Total Time {Number(metrics.prep_time) + Number(metrics.cook_time)}</MetricsItem>
            <MetricsItem>Serves {metrics.serves}</MetricsItem>
          </Metrics>
          <Ingredients>
            <h3>Ingredients</h3>
            <div dangerouslySetInnerHTML={{__html: ingredients}} />
          </Ingredients>
          <Preparation>
            <h3>Preparation</h3>
            <div dangerouslySetInnerHTML={{__html: preparation}} />
          </Preparation>
          <div
            className={`embed-responsive embed-responsive-youtube`}
            dangerouslySetInnerHTML={{__html: youtube_video_embed}}
          />
        </Recipe>
      </main>
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
              prep_time
              cook_time
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

import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
// import styles from './work.module.scss'

export default ({ data, pageContext }) => {
  const {
    title,
    acf: {
      details,
      description,
      ingredients,
      preparation,
    }
  } = data.allWordpressWpRecipe.edges[0].node

  return (
    <Layout>
      <main>
        <h2>{title}</h2>
        <div>
          {description}
        </div>
        <div>
          <div>Prep Time {details.prep_time}</div>
          <div>Cook Time {details.cook_time}</div>
          <div>Total Time {Number(details.prep_time) + Number(details.cook_time)}</div>
          <div>Serves {details.serves}</div>
        </div>
        <h3>Ingredients</h3>
        <div dangerouslySetInnerHTML={{__html: ingredients}} />
        <h3>Preparation</h3>
        <div dangerouslySetInnerHTML={{__html: preparation}} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allWordpressWpRecipe(filter: {id: {eq: $id}}) {
      edges {
        node {
          title
          acf {
            description
            details {
              prep_time
              cook_time
              serves
            }
            ingredients
            preparation
          }
        }
      }
    }
  }
`

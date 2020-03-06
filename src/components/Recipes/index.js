import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { RecipesGrid } from './style'

const Recipes = ({ recipes }) => (
  <RecipesGrid>
    {
      recipes.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/recipe/${node.slug}`}>
            <Img
              fluid={node.featured_media.localFile.childImageSharp.fluid}
              alt={node.featured_media.alt_text}
            />
          </Link>
        </div>
      ))
    }
  </RecipesGrid>
)

export default Recipes

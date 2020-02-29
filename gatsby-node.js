const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`./src/templates/work.js`)
  const recipeTemplate = path.resolve(`./src/templates/recipe.js`)

  return graphql(`
    query {
      allWordpressWpWork {
        edges {
          node {
            slug
            id
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
      allWordpressWpRecipe {
        edges {
          node {
            slug
            id
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
    	}
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWordpressWpWork.edges.forEach(({ node, previous, next }) => {
      createPage({
        path: `/work/${node.slug}`,
        component: workTemplate,
        context: {
          id: node.id,
          previous: previous ? previous.slug : null,
          next: next ? next.slug : null,
        },
      })
    })

    result.data.allWordpressWpRecipe.edges.forEach(({ node, previous, next }) => {
      createPage({
        path: `/recipe/${node.slug}`,
        component: recipeTemplate,
        context: {
          id: node.id,
          previous: previous ? previous.slug : null,
          next: next ? next.slug : null,
        },
      })
    })
  })
}

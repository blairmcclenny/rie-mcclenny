import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, path, article }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${path || "/"}`,
        }

        return (
          <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>
              <html lang="en" />
              <script
                data-ad-client="ca-pub-6645443580483867"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {
                seo.url &&
                <meta property="og:url" content={seo.url} />
              }
              {
                article ? true : null &&
                <meta property="og:type" content="article" />
              }
              {
                seo.title &&
                <meta property="og:title" content={seo.title} />
              }
              {
                seo.description &&
                <meta property="og:description" content={seo.description} />
              }
              {
                seo.image &&
                <meta property="og:image" content={seo.image} />
              }
              <meta name="twitter:card" content="summary_large_image" />
              {
                seo.title &&
                <meta name="twitter:title" content={seo.title} />
              }
              {
                seo.description &&
                <meta name="twitter:description" content={seo.description} />
              }
              {
                seo.image &&
                <meta name="twitter:image" content={seo.image} />
              }
            </Helmet>
          </>
        )
      }}
    />
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  article: false,
}

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  description,
  image,
  path,
  type,
  publishedTime,
  modifiedTime,
  publisher,
  section
}) => {
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
          type: type,
          publishedTime: publishedTime,
          modifiedTime: modifiedTime,
          publisher: publisher,
          section: section,
        }

        return (
          <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>
              <html lang="en" />
              {
                seo.url &&
                <link rel="canonical" href={seo.url} />
              }
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {
                seo.title &&
                <meta property="og:title" content={seo.title} />
              }
              {
                seo.type &&
                <meta property="og:type" content={seo.type} />
              }
              {
                seo.type === 'article' &&
                seo.publishedTime &&
                <meta property="article:published_time" content={seo.publishedTime} />
              }
              {
                seo.type === 'article' &&
                seo.modifiedTime &&
                <meta property="article:modified_time" content={seo.modifiedTime} />
              }
              {
                seo.type === 'article' &&
                seo.publisher &&
                <meta property="article:publisher" content={seo.publisher} />
              }
              {
                seo.type === 'article' &&
                seo.section &&
                <meta property="article:section" content={seo.section} />
              }
              {
                seo.url &&
                <meta property="og:url" content={seo.url} />
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
  type: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  publisher: PropTypes.string,
  section: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  type: 'website',
  publishedTime: null,
  modifiedTime: null,
  publisher: 'https://www.facebook.com/Rie-McClenny-2125130754437486/',
  section: 'Food',
}

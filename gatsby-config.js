module.exports = {
  siteMetadata: {
    title: `Rie McClenny`,
    titleTemplate: "%s · The Dessert Snob",
    description: `Rie McClenny is a food media producer based in Los Angeles`,
    url: "https://www.riemcclenny.com",
    image: "/images/rie_og.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "wp.rie.blairmcclenny.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/group",
          "**/work",
          "**/pages",
          "**/media",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rie McClenny`,
        short_name: `Rie McClenny`,
        start_url: `/`,
        background_color: `#2b2b2b`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

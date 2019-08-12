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
        baseUrl: "wp.tangerineandtangelo.com",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

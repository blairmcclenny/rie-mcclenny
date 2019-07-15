module.exports = {
  siteMetadata: {
    title: `Rie McClenny`,
    description: `Rie McClenny is a food media producer based in Los Angeles`,
  },
  plugins: [
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

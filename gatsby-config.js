const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Sealms`,
    siteUrl: `https://et.mk`,
    description: `Digital agency from Ireland `,
    author: `Sealms Limited`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sealms Limited`,
        short_name: `sealms`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#004156`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        cookieDomain: "et.mk",
      },
    },
  ],
}

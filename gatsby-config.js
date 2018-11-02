module.exports = {
  siteMetadata: {
    title: "ANNEXI-STRAYLINE Blog",
    siteUrl: "https://www.annexi-strayline.com",
    description: "ANNEXI-STRAYLINE Blog"
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    }
  ]
}
require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MmM2ZmVjYmYtYzIyMi00ZWUxLTkzNWMtNjhiNGM4Zjg5Y2UzNjM3MjE0NDU2NTc0OTEwNDEy',
        autopop: true
      }
    },
  ],
}

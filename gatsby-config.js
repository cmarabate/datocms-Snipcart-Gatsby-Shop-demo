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
        apiKey: 'ST_MTEyMmMxOWQtYTRmNC00NGQ2LThiYzgtOWNlYmQ5MzhiYTQyNjM3MjI1NjAxNjE0ODg2NzU0',
        autopop: true
      }
    },
  ],
}

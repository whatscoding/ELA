/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Entry Level Analyst',
      author: 'ELA Media',
      year: '2020'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
    },
    'gatsby-transformer-remark'
  ]
}

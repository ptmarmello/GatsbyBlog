module.exports = {
  siteMetadata: {
    title: `My CheatSheet Blog`,
    description: `The Best CheatSheet you'll ever see`,
    author: `@AmanhaEuPedro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-cheatsheet-blog`,
        short_name: `chblog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `content`,
        path: `${__dirname}/src/data/content`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options:{
    //     name: `posts`,
    //     path: `${__dirname}/src/data/content/posts`
    //   },
    // },
    // {
    //   resolve:`gatsby-source-filesystem`,
    //   options:{
    //     name: `cheatsheets`,
    //     path: `${__dirname}/src/data/content/cheatsheets`
    //   },
    // },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-catch-links',
    // 'gatsby-transformer-remark',
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-slug`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options:{
        extensions: [`.mdx`, `.md`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

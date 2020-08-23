module.exports = {
    siteMetadata:{
        title: 'My First Coding Blog with Gatsby',
        description: 'Coding should be fun'
    },
    plugins: [
        "gatsby-plugin-catch-links",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: "posts",
            path: `${__dirname}/content/posts`
          }
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-sitemap",

{
  resolve: "gatsby-plugin-google-analytics",
//   options: {
//     trackingId: config.googleAnalyticsID,
//   },
},
{
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ "content:encoded": edge.node.html }],
            })
          })
        },
        query: `
          {
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [frontmatter___date] },
              filter: {frontmatter: { draft: { ne: true } }}
            ) {
              edges {
                node {
                  excerpt
                  html
                  fields { slug }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
        output: "/rss.xml",
        title: "Gatsby RSS Feed",
      },
    ],
  },
},
      ]
}
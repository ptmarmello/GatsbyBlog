/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require("lodash");
const db = require('./src/data/folders_db.json');

const {
    createFilePath
} = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slugBlog = createFilePath({ node, getNode, basePath: `posts` });
    const slugCheat = createFilePath({ node, getNode, basePath: `cheatsheets`});
    createNodeField({
      node,
      name: `slugBlog`,
      value: slugBlog,
    });
    createNodeField({
      node,
      name: `slugCheat`,
      value: slugCheat,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    
    const { createPage } = actions;
    const foldersTemplate = path.resolve("./src/templates/folders/foldersLayout.js");

    const allMajorData = await db.majors.map((major) => {
        return major;
    })
    const majorData = allMajorData.map((major) => {return major});

    const allMinorData = await db.minors.map((minor) => {
        return minor;
    })
    const minorData = allMinorData.map((minor) => {return minor});

    const allSubjectsData = await db.subjects.map((subjs) => {
        return subjs;
    })
    const subjectData = allSubjectsData.map((subject) => {return subject});

    // Cria a página que mostra todos os Majors
    createPage({
        path:`/majors/`,
        component: require.resolve('./src/templates/majorTemplate.js'), 
        context: { majorData },
      })

    // Cria a página que mostra todos os Minors
    createPage({
        path:`/minors/`,
        component: require.resolve('./src/templates/minorTemplate.js'), 
        context: { minorData },
    })

    // Cria a página que mostra todos os Subjects
    createPage({
        path:`/subjects/`,
        component: require.resolve('./src/templates/subjectTemplate.js'), 
        context: { subjectData },
    })

      // // Cria páginas para cada Major usando Json
      allMajorData.forEach( major => {
        const pageData = major;
        createPage({
            path: `/majors/${major.title}`,
            component: foldersTemplate,
            context: {
                pageData
            },
        })
    })

    // Cria páginas para cada Minor usando Json
    allMinorData.forEach( minor => {
      const pageData = minor;
        createPage({
            path: `/minors/${minor.title}`,
            component: foldersTemplate,
            context: {
                pageData
            },
        })
    })

    // Cria páginas para cada Subject usando Json
    allSubjectsData.forEach( subject => {
      const pageData = subject;
        createPage({
            path: `/subjects/${subject.title}`,
            component: foldersTemplate,
            context: { pageData }
        })
    })
//
    return new Promise((resolve, reject) => {
        const postTemplate = path.resolve("./src/templates/blog/postTemplate.js");
        const tagTemplate = path.resolve("./src/templates/blog/tagsTemplate.js");
        const cheatsheetTemplate = path.resolve("./src/templates/forcs/cheatsheetTemplate.js");
        const foldersTemplate = path.resolve("./src/templates/folders/foldersLayout.js");
        resolve(
          graphql(
            `
              {
                allMdx(sort: {fields: frontmatter___title, order: DESC}) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        ads
                        category
                        date
                        description
                        majors
                        slug
                        tags
                        title
                        type
                      }
                      timeToRead
                      mdxAST
                      wordCount {
                        words
                      }
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
            }
    
            const items = result.data.allMdx.edges;
//     
// 
//             
            /* Cria um lista de tags */
            const tagSet = new Set();
            items.forEach(edge => {
              const {
                node: {
                  frontmatter: { tags }
                }
              } = edge;
    
              if (tags && tags !== null) {
                tags.forEach(tag => tagSet.add(tag));
              }
            });
            
            /* Cria as páginas de tag */
            const tagList = Array.from(tagSet);
            tagList.forEach(tag => {
              createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                  tag
                }
              });
            });
//           
// 
//             
//             /*Cria a lista de Majors*/
//             const majorSet = new Set();
//             items.forEach(edge => {
//               const {
//                 node: {
//                   frontmatter: { majors }
//                 }
//               } = edge;
    
//               if (majors && majors !== null) {
//                 majors.forEach(major => majorSet.add(major));
//               }
//             });

//             /* Cria as páginas de Majors */
//             const majorList = Array.from(majorSet);
//             majorList.forEach(major => {
//               createPage({
//                 path: `/majors/${_.kebabCase(major)}/`,
//                 component: foldersTemplate,
//                 context: {
//                   majorData,
                  
//                 }
//               });
//             });
// // 
// // 
// //             
//             /*Cria a lista de Minors */
//             const minorSet = new Set();
//             items.forEach(edge => {
//               const {
//                 node: {
//                   frontmatter: { minors }
//                 }
//               } = edge;
    
//               if (minors && minors !== null) {
//                 minors.forEach(minor => minorSet.add(minor));
//               }
//             });

//             /* Cria as páginas de minors */
//             const minorList = Array.from(minorSet);
//             minorList.forEach(minor => {
//               createPage({
//                 path: `/minors/${_.kebabCase(minor)}/`,
//                 component: foldersTemplate,
//                 context: {
//                   minor
//                 }
//               });
//             });
// // 
// // 
// //             
//             /*Cria a lista de Subjects */
//             const subjectSet = new Set();
//             items.forEach(edge => {
//               const {
//                 node: {
//                   frontmatter: { subjects }
//                 }
//               } = edge;
    
//               if (subjects && subjects !== null) {
//                 subjects.forEach(subject => subjectSet.add(subject));
//               }
//             });
        
//             /* Cria as páginas de subjects */
//             const subjectList = Array.from(subjectSet);
//             subjectList.forEach(subject => {
//               createPage({
//                 path: `/subjects/${_.kebabCase(subject)}/`,
//                 component: foldersTemplate,
//                 context: {
//                   subject
//                 }
//               });
//             });
// 
// 
//     
            /* Cria a página de posts */
            const posts = items.filter(item => item.node.frontmatter.type === "blog");
            posts.forEach(({ node }) => {
              createPage({
                path: `/blog${node.fields.slug}`,
                component: postTemplate,
                context: {
                  slug: node.fields.slug,
                }
              });
            });

            /* Cria a página de cheatsheets */
            const chposts = items.filter(item => item.node.frontmatter.type === "cheatsheet");
            chposts.forEach(({ node }) => {
              createPage({
                path: `/ch${node.fields.slug}`,
                component: cheatsheetTemplate,
                context: {
                  slug: node.fields.slug,
                }
              });
            });

          })
        );
      });


}
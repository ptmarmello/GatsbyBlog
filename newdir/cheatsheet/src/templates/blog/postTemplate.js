import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';

// export default function PostTemplate({ data }) {
//   const usingData = data.mdx;
//   console.log(usingData);
//     return(
//         <div>
//           <Helmet title={`Cheatsheet | ${usingData.fields.slug}`} defer={false} />
//           <MDXProvider>
//             <MDXRenderer>
//               {usingData.body}
//             </MDXRenderer>
//           </MDXProvider>
//         </div>
//     )
// }


import Layout from '../layouts/layout';
import Article from '../../components/Article';
import ArticleHeader from '../../components/ArticleHeader';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
// import FeaturedImage from '../../components/FeaturedImage';
import PageNav from '../../components/PageNav';
// import Share from '../../components/Share';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    // const author = get(this.props, 'data.site.siteMetadata.author');
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <Container>
          <Helmet
            title={`${post.frontmatter.title} `}
            htmlAttributes={{ lang: 'pt-br' }}
          >
            <meta
              name="description"
              content={`Blog | Cheatsheet`}
            />
          </Helmet>
          <Card>
            <ArticleHeader>
              {/* {post.frontmatter.featuredImage && (
                <FeaturedImage
                  sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                />
              )} */}
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <span />
            </ArticleHeader>
            <Article>
              <MDXProvider>
                <MDXRenderer>
                  {post.body}
                </MDXRenderer>
              </MDXProvider>

              {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
            </Article>
            {/* {userConfig.showShareButtons && (
              <Share url={url} title={post.frontmatter.title} />
            )} */}
          </Card>

          <PageNav>
            {previous && (
              <Button to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Button>
            )}

            {next && (
              <Button to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Button>
            )}
          </PageNav>
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;




export const pageQuery = graphql`
query($slug: String) {
  mdx(fields: {slug: {eq: $slug}}) {
    fields {
      slug
    }
    frontmatter {
      title
      tags
      majors
      description
      category
      date(formatString: "DD/MM/YYYY")
    }
    timeToRead
    body
    wordCount {
      words
    }
  }
}
`
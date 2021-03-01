import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';

export default function PostTemplate({ data }) {
  const usingData = data.mdx;
  console.log(usingData);
    return(
        <div>
          <Helmet title={`Cheatsheet | ${usingData.fields.slug}`} defer={false} />
          <MDXProvider>
            <MDXRenderer>
              {usingData.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
    )
}

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
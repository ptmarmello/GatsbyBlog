import React from 'react';
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

export default function TagsTemplate({ data }) {
    const usingData = data.allMdx.edges;
    console.log(usingData);
    return(
        <div>
          <Helmet title="Cheatsheet | Tags" defer={false} />
            {usingData.map(items => {
                const usingItem = items.node.frontmatter;
                return(
                    <div>
                    { usingItem.type === "blog" &&
                        <Link to={`/blog/${usingItem.slug}`}>
                            {usingItem.title}
                        </Link>
                    }
                       { usingItem.type !== "blog" &&
                        <Link to={`/ch/${usingItem.slug}`}>
                            {usingItem.title}
                        </Link>
                    }
                    </div>
                    

                );


            })}
        </div>
    )
}

export const pageQuery = graphql`
query ($tag: String){
    allMdx(limit: 200, sort: {fields: [frontmatter___title], order: DESC}, filter: {frontmatter: {tags: {eq: $tag}}}) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
            majors
            ads
            category
            type
            slug
          }
          body
        }
      }
    }
  }
`;

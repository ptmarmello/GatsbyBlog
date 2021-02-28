import React from 'react';
// import Markdown from 'react-markdown';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';
// import Layout from '../layouts/layout';
// import Divider from '../../components/divider';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import '../../styles/cheatsheet.css';
import Navbar from '../../components/navbar';
// import styled from 'styled-components';

// const TagButton = styled(Link)`
//     box-sizing: border-box;
//     min-width: 64px;
//     width: 100px;
//     height: 40px;
//     padding: 3px;
//     border: 2px solid palevioletred;
//     color: palevioletred;
//     text-align: center;
//     text-decoration: none;
//     font-weight: 500;
//     background-color: #fff;
//     text-transform: capitalize;
// `;


export default function CheatSheetTemplate({data}) {
    const usingData = data.mdx;
    const {title, tags} = usingData.frontmatter;
    const htmlData = usingData.body;
    // console.log(htmlData);

    return(
      <div className="App">
        <Navbar />
        <div className="ch-div-header">
          <div className="ch-header-div">
            <h1 className="ch-header">
              {title}
            </h1>
            {/* <div className="ch-tag-list">
              <ul style={{display:"flex", width:'100%'}}>
                  {tags.map(tag => (
                    <li className="tag-list">
                      <TagButton
                          key={tag}
                          to={`/tags/${tag}`} 
                          >
                          {tag}
                      </TagButton>
                    </li>
                  ))}
              </ul>
            </div> */}
          </div>
        </div>
      
      <div className="ch-content">
        <MDXProvider >
          <MDXRenderer>{htmlData}</MDXRenderer>
        </MDXProvider>
      </div>
        
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
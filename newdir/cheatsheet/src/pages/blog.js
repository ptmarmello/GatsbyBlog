import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Navbar from '../components/navbar';
import '../styles/blog.css';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const BlogPost = styled.div`
    box-sizing: border-box;
    
    box-shadow: 0 1.25px 0 0;
    &:hover{
        transform: scale(1.0125);
    }
`;

export default function Blog({data}) {
    const usingData = data.allMdx.edges;
    return(
        <div className="App-Blog">
            <Helmet title="Cheatsheet | Blog" defer={false} />
            <Navbar />
            <div className="Blog-header">
                <h1 style={{marginLeft:'5vw'}}>Blog</h1>
            </div>
            <div className="Blog-main-content">
                <ul style={{display:'block', width:'70%',height:'max-content',margin:'0 auto'}}>
                    {usingData.map((item, index) => {
                        const usingItem = item.node.frontmatter;
                        return(
                            <BlogPost key={index}>
                                <Link to={`/blog/${usingItem.slug}`} >
                                    <h2 style={{textTransform:'capitalize', margin:'6px auto'}}>{usingItem.title}</h2>
                                </Link>
                                <p style={{textTransform:'capitalize', margin:'auto auto'}}>{usingItem.description}</p>

                                <div style={{display:'flex'}}>
                                    <ul style={{display: 'flex', justifyContent:'space-between', alignItems:'center', margin:'0'}}>
                                        {usingItem.tags.map((tag,item) => (
                                            <Link key={item} to={`/tags/${tag}`}>
                                                <p style={{textTransform:'capitalize', margin: '0', paddingRight:'15px'}}>
                                                    {tag}
                                                </p>
                                            </Link>
                                        ))}
                                    </ul>
                                    <p style={{margin:'0 auto'}}>{`L.U em ${usingItem.date}`}</p>
                                </div>

                            </BlogPost>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query{
        allMdx(limit: 2000, sort: {fields: [frontmatter___title], order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
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

`
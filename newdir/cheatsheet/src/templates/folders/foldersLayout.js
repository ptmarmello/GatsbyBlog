import React from 'react';
import { Link } from 'gatsby';
import Divider from '../../components/divider';
import Layout from '../layouts/layout';
import styled from 'styled-components';
import '../../styles/folders.css';
// import { graphql } from 'gatsby';

const Paper = styled.div`
    box-sizing: border-box;
    width: 260px;
    max-width: fit-content;
    height: max-content;
    max-height: 360px;

    justify-content: center;
    align-content: center;
    text-align: center;

    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 1px 1px 7px 4px palegreen;

    cursor: pointer;
    border-radius: 8px;
    transition: 0.25s ease-in-out;

    :hover{
        transform: scale(1.025);
    }

    :active{
        transform: scale(1.0125);
    }


`

const FolderBut = styled(Link)`
    display: flex;
    width: 100px;
    height: 48px;

    margin: 0 auto;
    padding: 0;
    margin-right: 14px;

    box-sizing: border-box;
    border: 3px solid paleturquoise;
    border-radius: 8px 8px 8px 0;
    background-color: transparent;

    text-decoration: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;

    cursor: pointer;
    transition: 0.25s ease-in-out;
    outline: none;

    :hover{
        transform: scale(1.05);
    }

    :active{
        transform: scale(1.00);
    }

`

export default function FolderLayout({ pageContext: { pageData } }){
    // const dataSubs = pageData.subjects;
    const dataContent = pageData.content;
    const dataTypes = pageData.types;

    console.log(dataTypes);
    return(
        <Layout pageTitle={pageData.title}>
            <div className="header">
                <h1>
                    {pageData.title}
                </h1>
                <div className="header-ad"></div>
                {pageData.description !== null && 
                <h4 style={{margin:'0', padding:'0',textDecoration: 'none', textDecorationStyle:'none', fontWeight:'500'}}>
                    {pageData.description}
                </h4>
                }
            </div>
            <div style={{margin:'0 auto', padding: '0', justifyContent: 'center', alignItems: 'center'}} >
                <Divider type="Astro" />
            </div>

            {dataContent !== null &&
                <>
                    <h2 style={{justifySelf: 'center', margin: '0 auto', padding: '0', textAlign: 'center', marginBottom: '5px', marginTop:'15px'}}>
                        Acesso Rápido
                    </h2>
                    <div className="folder-contentGrid" style={{maxWidth:'80%'}}>
                        { dataContent.map( content => {
                            return(
                                <FolderBut to={`/`}>
                                    {content.title}
                                </FolderBut>
                            );
                        }) }
                    </div>
                </>
            }
            
            { dataTypes !== null &&
                <>
                <Divider type="Normal" /> 
                <div className="folder-contentGrid">
                    { dataTypes.map( content => {
                        return(
                            <Paper>
                                <h4 style={{marginBottom:'8px'}} > {content.title} </h4>
                                <p style={{marginTop:'0'}} >
                                    {content.description}
                                </p>
                            </Paper>
                            
                        );
                    }) }
                </div>
                </>
            }
            
        </Layout>
    );
}

// export const query = graphql`
// query ParaFolder($major: [String]) {
//     allMarkdownRemark(sort: {fields: id, order: DESC}, filter: {frontmatter: {majors: {in: $major}}}) {
//       edges {
//         node {
//           frontmatter {
//             majors
//             tags
//             description
//             category
//             ads
//             type
//             title
//           }
//         }
//       }
//     }
//   }
  
// `
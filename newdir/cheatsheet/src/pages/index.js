import React from "react";
// import { Link } from 'gatsby';
import Layout from "../templates/layouts/layout";
import {graphql, Link} from 'gatsby';
import FoldersGrid from '../components/foldersgrid';
import Header from '../components/header';
import Searchbar from '../components/searchbar';
import Divider from "../components/divider";
import '../styles/global.css';
import '../styles/home.css';
// import Divider from "../components/divider";
import styled from 'styled-components';
import Helmet from 'react-helmet';

const HeaderHeader = styled.h1`
  font-weight: 500;
  margin-block-end: 0.2em;

  @media screen and (min-width: 600px){
    font-size: calc(18vw - 90px);
  }
  
  @media screen and (min-width: 1000px){
    font-size: calc(18vw - 110px);
  }
  
  @media screen and (min-width: 1300px){
    font-size: calc(18vw - 150px);
  }

`


export default function Home({data}) {
  const usingData = data.allMdx.edges;
  const ChList = <section className="home-grid">
      {usingData.map( (things, index) => {
        console.log(index);
        return (
          <li>
            <Link key={index} to={`ch${things.node.fields.slug}/`}>
              {things.node.frontmatter.title}
            </Link>
          </li>
        );
      })}
    
  </section>;
  return (
    <Layout pageTitle="Home">
      <Helmet title="Cheatsheet | Home" defer={false} />
      <div style={{margin:'0 auto', padding:'0'}}>
          <Header pageTitle="Home">  
              <section style={{display:"block", margin:'0 auto', width: '100%', height: '100%', alignContent: 'center', position: 'relative', justifyContent: 'center', textAlign: 'center'}}>
                  <HeaderHeader>CheatSheet Blog</HeaderHeader>
                  <div className="header-paragraph">
                    <h3 style={{marginBottom: 0 , paddingBottom: 0}} >Pensou que não teria CheatSheet de universitário?</h3>
                    <p style={{marginTop: '4px'}}>Pensou errado. Otário.</p>
                  </div>
                  <Searchbar />

                  <Divider type="Astro"/>

                  <div style={{display:"block", margin:'0 auto'}}>
                    <FoldersGrid type="Majors" />               
                    <FoldersGrid type="Minors" />
                    <FoldersGrid type="Subjects"/>
                  </div>
              </section>
            {ChList}
          </Header>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "cheatsheet"}}}, sort: {fields: frontmatter___title, order: ASC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          type
        }
        timeToRead
      }
    }
  }
}

`
import React from "react";
// import { Link } from 'gatsby';
import Layout from "../templates/layouts/layout";
import {graphql, Link} from 'gatsby';
import db from '../data/folders_db.json';
import Header from '../components/header';
import Searchbar from '../components/searchbar';
import Divider from "../components/divider";
import '../styles/global.css';
import '../styles/home.css';

import styled, { css } from 'styled-components';
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
const Folders = styled.button`
    display: flex;
    width: min-content;
    max-width: 120px;
    min-width: 90px;
    height: 24px;
    
    margin: 0 auto;
    margin-right: .25rem;
    padding: 10px;

    border-radius: 8px;

    outline: none;
    text-decoration: none;
    text-align: center;
    text-transform: capitalize;

    justify-content: center;
    align-items: center;
    align-self: center;

    ${props => props.major && css`
        margin-top: 1.75rem;
        margin-bottom: .25rem;
        background: transparent;
        border: 2px solid palevioletred;
        color: palevioletred;
        &:hover{
            background: palevioletred;
            color: white;
        }
    `}

    ${props => props.minor && css`
        margin-bottom: .25rem;
        background: transparent;
        border: 2px solid paleturquoise;
        color: paleturquoise;
        &:hover{
            background: paleturquoise;
            color: white;
        }
    `}
    ${props => props.subject && css`
        margin-bottom: .25rem;
        background: transparent;
        border: 2px solid palegreen;
        color: palegreen;
        &:hover{
            background: palegreen;
            color: white;
        }
    `}
`;

function FoldersGrid(props) {
  return(
    <div className="App-Foldersgrid">
        {props.type === 'Majors' &&
            db.majors.map((major, majorIndex) => {
                const majorId = `major__${majorIndex}`;
                return (
                  <Folders
                    as={Link}
                    to={`/majors/${major.title}`}
                    htmlFor={majorId}
                    major
                  >
                    {major.title}
                  </Folders>
                );
            })
        }

        {props.type === 'Minors' &&
            db.minors.map((minor, minorIndex) => {
                const minorId = `minor__${minorIndex}`;
                return (
                  <Folders
                    as={Link}
                    to={`/minors/${minor.title}`}
                    htmlFor={minorId}
                    minor
                  >
                    {minor.title}
                  </Folders>
                );
            })
        }

        {props.type === 'Subjects' &&
            db.subjects.map( (subjects, subjectsIndex) => {
                const subjectsId = `subjects__${subjectsIndex}`;
                return (
                  <Folders as={Link} to={`/subjects/${subjects.title}`} key={subjectsId} subject >
                    {subjects.title}
                  </Folders>
                );
            }
          )
        }
    </div>
  );
}

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
import React, {useState} from "react";
// import { Link } from 'gatsby';
import Layout from "../templates/layouts/layout";
import {graphql, Link} from 'gatsby';

import Header from '../components/header';
// import Searchbar from '../components/searchbar';
import Divider from "../components/divider";
import '../styles/global.css';
import '../styles/home.css';
import '../styles/searchbar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Helmet from 'react-helmet';
// import HomeSlides from "../components/HomeSlides";

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
// const SearchButton = styled.button`
//     margin: 0 auto;
//     margin-left: 4px;
//     min-width: 102px;
//     height: 42px;
//     border: 2px solid #ccc;
//     background-color: transparent;
//     border-radius: 4px 12px 12px 4px;
//     outline: none;
    

//     transition: width 0.4s ease-in-out;

//     /* @media screen and (max-width: 700px){
//         width: 20px;
//     } */

//     &:enabled{
//         border-color: gray;
//         cursor: pointer;
//     }

//     &:active{
//         border: 3px solid;
//         border-color: green;
//         transform: scale(0.98);
//     }

// `;

const ListLink = styled(Link)`
  padding: 5px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;

  min-width: max-content;
  max-width: 40%;
  height: fit-content;

  box-sizing: border-box;
  border: 2px solid palevioletred;
  border-radius: 8px;
  color: palevioletred;

  background: transparent;
  transition: 0.367s ease-in-out;

  &:hover{
    transform: scale(1.25);
    background: palevioletred;
    color: white;
  }

  &:active{
    transform: scale(1.00);
    background: paleturquoise;
    border-color: paleturquoise;
  }
`;

function Searchbar() {
  const [search, setSearch] = useState(String);
  return(
      <form id="searchbar" onSubmit={function (event) {
          event.preventDefault();
          // router.push(`/${search}`);
        }} >
          <input type='text' onChange={(event) => {
              setSearch(event.target.value);
          }}
          placeholder="Pesquisar por..."
          value={search}
          />

          {/* <SearchButton disabled={search.length === 0} type="submit">
              {`Searching for ${search}`}
          </SearchButton> */}

      </form>
  );
}

export default function Home({data}) {
  const usingData = data.allMdx.edges;
  const ChList = <section className="home-grid">
      {usingData.map( (things, index) => {
        console.log(index);
        return (
          <li>
            <ListLink key={index} to={`ch${things.node.fields.slug}/`}>
              {things.node.frontmatter.title}
            </ListLink>
          </li>
        );
      })}
    
  </section>;
  return (
    <Layout pageTitle="Home">
      <Helmet title="Home | CheatsheetBlog" defer={false} />
      <div style={{margin:'0 auto', padding:'0'}}>
          <Header> 
              <section style={{display:"block", margin:'0 auto', width: '100%', height: '100%', alignContent: 'center', position: 'relative', justifyContent: 'center', textAlign: 'center'}}>
                <div className="Home-main-container">
                  <div className="Home-container">
                    <HeaderHeader>CheatSheet Blog</HeaderHeader>
                    <div className="header-paragraph">
                      <h3 style={{marginBottom: 0 , paddingBottom: 0}} >Pensou que não teria CheatSheet de universitário?</h3>
                      <p style={{marginTop: '4px'}}>Pensou errado. Otário.</p>
                    </div>
                    <Searchbar />

                    <Divider type="Astro"/>
                  </div>
                </div>

                  {/* <HomeSlides /> */}
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
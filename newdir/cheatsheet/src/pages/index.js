import React, {useState} from "react";
import localData from '../data/folders_db.json';
import Layout from "../templates/layouts/layout";
import {graphql, Link} from 'gatsby';

import Divider from "../components/divider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Helmet from 'react-helmet';
import '../styles/global.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/searchbar.css';
import Navbar from "../components/navbar";

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

  background: white;
  transition: 0.367s ease-in-out;

  &:hover{
    transform: scale(1.05);
    background: palevioletred;
    color: white;
  }

  &:active{
    transform: scale(1.00);
    background: paleturquoise;
    border-color: paleturquoise;
  }
`;

const MainLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 36px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.367s ease-in-out;
  color: palevioletred;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background: white;

  :hover{
    transform: scale(1.05);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
  }
  :active{
    transform: scale(0.997);
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
  }
`;

// const NavButton = styled(Link)`
//     margin: 0 auto;
//     margin-right: 8px;
//     margin-left: 8px;
//     outline: none;
// `;

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
  const ChList = <section className="homeDisplays">
    <div className="homeMainGrid">
      {
        localData.majors.map((major,id) => {
          return(
            <MainLink to={`/majors/${major.title}`} key={id}>
              {major.title}
            </MainLink>
          )
        })
      }
    </div>    
  </section>;

  return (
    <Layout pageTitle="Home">
      <Helmet title="Home | CheatsheetBlog" defer={false} />
      <section>
        <Navbar pageTitle="Home"/>
        <div className="homeContainer">
          <div className="ContainerMain">
            <h2>Uni CheatSheet</h2>
            <h4>Pensou que não teria Cheatsheet para universitário?</h4>
            <p>Pensou errado. Otári@</p>
          </div>
          <Searchbar />
          <Divider type="Astro" />
          <div className="homeContent">
            {ChList}
          </div>
          {/* <Divider type="Normal" /> */}
        </div>
        <main>
          <p>Mais Recentes</p>
          <div className="homeGrid">
            {usingData.map( (things, index) => {
              // console.log(index);
              return (
                <div>
                  <ListLink key={index} to={`ch${things.node.fields.slug}/`}>
                    {things.node.frontmatter.title}
                  </ListLink>
                </div>
              );
            })}
          </div>
        </main>
      </section>
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
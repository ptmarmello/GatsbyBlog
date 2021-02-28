import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/searchbar.css';

const SearchButton = styled.button`
    margin: 0 auto;
    margin-left: 4px;
    min-width: 102px;
    height: 42px;
    border: 2px solid #ccc;
    background-color: transparent;
    border-radius: 4px 12px 12px 4px;
    outline: none;
    

    transition: width 0.4s ease-in-out;

    /* @media screen and (max-width: 700px){
        width: 20px;
    } */

    &:enabled{
        border-color: gray;
        cursor: pointer;
    }

    &:active{
        border: 3px solid;
        border-color: green;
        transform: scale(0.98);
    }

`;

export default function Searchbar() {
    const [search, setSearch] = useState(String);
    return(
        <form id="searchbar" onSubmit={function (event) {
            event.preventDefault();
            // router.push(`/${search}`);
          }} >
            <input type='text' onChange={(event) => {
                setSearch(event.target.value);
            }}
            value={search}
            placeholder="/Search"/>

            <SearchButton disabled={search.length === 0} type="submit">
                {`Searching for ${search}`}
            </SearchButton>
        </form>
    );
}
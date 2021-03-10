import React from 'react';
import '../styles/header.css';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavButton = styled(Link)`
    margin: 0 auto;
    margin-right: 8px;
    margin-left: 8px;
    outline: none;
`

export default function Header(props) {
    return(
        <div className="App-Header">
            <div className="Header-nav">
                <Link to={`/`} style={{width:'fit-content', margin:'0', float: "left", fontSize:'24px', outline: 'none'}}>Home</Link>
                <ul style={{listStyle:'none', float: 'right', outline: 'none', margin: '0', padding: '0', display:'flex'}}>            
                    <NavButton to="/blog" > Blog </NavButton>
                    <NavButton to="/sobre" > Sobre </NavButton>
                </ul>
            </div>
            <div className="header-children">            
                    {props.children}
            </div>
        </div>
    );
}
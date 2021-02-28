import React from 'react';
import '../styles/header.css';
import { Link } from 'gatsby';

export default function Header(props) {
    return(
        <div className="App-Header">
            <div className="Header-nav">
                <h2 style={{width:'100%', height: 'max-content' , margin:'0', float: "left"}}>Home</h2>
                <ul style={{listStyle:'none', float: 'right', outline: 'none', margin: '0', padding: '0', display:'flex'}}>            
                    <Link to="/blog" > Blog </Link>
                    <Link to="/sobre" > Sobre </Link>
                </ul>
            </div>
            <div className="header-children">            
                {props.children}
            </div>
        </div>
    );
}
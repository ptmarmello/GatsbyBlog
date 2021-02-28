import React from 'react';
import styled from 'styled-components';
// import { ArrowLeft }  from 'styled-icons/octicons';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const NavTitle = styled.h2`
    padding: 0;
    margin: 0 auto;

    margin-block-start: 0;
    margin-block-end: 0;
    transition: width 0.4s ease-in-out;

    text-decoration: none;
    text-transform: none;
    text-align: center;

    &:hover{
        transform: 12px;
    }
`;

const LinkButton = styled.button`
    width: fit-content;
    height: min-content;
    outline: none;
    margin: 0 auto;
    padding: 8px;

    text-decoration: none;
    color: black;
    border-radius: 8px;
    background: transparent;

    &:hover{
        background: palevioletred;
        color: white;
    }

    cursor: pointer;

`;

const ListLink = props => (
    <li style={{display:'inline-block', marginRight:'.5rem'}}>
        <LinkButton as={Link} to={props.to} >
            {props.children}
        </LinkButton>
    </li>
);

export default function Navbar(props) {
    return(
        <div className="App-Nav">
            <div style={{margin:'0 auto', width:'90%', display: 'flex', justifyContent: 'space-between'}}>
                <div className="back" style={{outline:'none', float: 'left', marginRight: '32px'}} >
                    <FontAwesomeIcon icon={ faArrowLeft }/>
                </div>

                {props.pageTitle !== "Home" &&
                    <NavTitle>
                        {props.pageTitle}
                    </NavTitle>
                }
                
                <div>    
                    <ul style={{listStyle:'none', float:'right', outline: 'none', margin: '0', padding: '0'}}>
                        {props.pageTitle !== 'Home' && 
                            <div className="sb-search" id="sb-search">
                                <form style={{marginRight:'12px'}}>
                                <input type="search" placeholder=""/>
                                </form>
                            </div>                      
                        }
                        <ListLink to="/blog" > Blog </ListLink>
                        <ListLink to="/sobre" > Sobre </ListLink>
                    </ul>
                </div>
            </div>

        </div>
    );
}
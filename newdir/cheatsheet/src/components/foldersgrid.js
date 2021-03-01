import React from 'react';
import db from '../data/folders_db.json';
// import theme from '../styles/themes.json';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

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


export default function FoldersGrid(props) {
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
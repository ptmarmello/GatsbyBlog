import React from 'react';
import {Link} from 'gatsby';
import styled, { css }  from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import db from '../data/folders_db.json';


const Folders = styled.button`
    display: flex;
    width: 100%;
    max-width: 90%;
    min-width: 90px;
    height: 100%;
    
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
        background: transparent;
        border: 2px solid palevioletred;
        color: palevioletred;
        &:hover{
            background: palevioletred;
            color: white;
        }
    `}

    ${props => props.minor && css`
        
        background: transparent;
        border: 2px solid paleturquoise;
        color: paleturquoise;
        &:hover{
            background: paleturquoise;
            color: white;
        }
    `}
    ${props => props.subject && css`
        
        background: transparent;
        border: 2px solid palegreen;
        color: palegreen;
        &:hover{
            background: palegreen;
            color: white;
        }
    `}
`;


const CatSlider = styled.div`
  margin: 12px auto;
  align-content: center;
  justify-content: center;
  outline: none;

  & h3{
   text-align: left;
   color: white;
   background: blueviolet;
   width: fit-content;
   padding: 8px;
   box-sizing: border-box;
   border-radius: 8px;
   margin-bottom: 5px;
  }
`
function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: '51%' }}
        onClick={onClick}
      />
    );
  }
  
function SimpleSlider(props) {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      nextArrow: <SampleArrow/>,
      prevArrow: <SampleArrow/>,
      slidesToShow: props.shows,
      slidesToScroll: props.scroll
    };
    return (
      <Slider {...settings}>
        {props.type === 'Majors' &&
              db.majors.map((major, majorIndex) => {
                  const majorId = `major__${majorIndex}`;
                  return (
                    <Folders
                      as={Link}
                      to={`/majors/${major.title}`}
                      htmlFor={majorId}
                      major
                      index={majorIndex}
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
                      index={minorIndex}
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
                    <Folders as={Link} to={`/subjects/${subjects.title}`} key={subjectsId} subject index={subjectsIndex} >
                      {subjects.title}
                    </Folders>
                  );
              }
            )
          }
      </Slider>
    );
  }

export default function HomeSlides(){
    return(
        <div style={{display:"block", margin:'0 auto', maxWidth:'85%'}} className="Home-container">
            <CatSlider>
                <h3>Graduações</h3>
                <SimpleSlider type="Majors" shows={1} scroll={1} />             
            </CatSlider>
            <CatSlider>
                <h3>Profissões</h3>
                <SimpleSlider type="Minors" shows={1} scroll={1} />
            </CatSlider>
            <CatSlider>
                <h3>Matérias</h3>
                <SimpleSlider type="Subjects" shows={1} scroll={1} />
            </CatSlider>
        </div>
    );
}

import React from 'react';
import db from '../../data/folders_db.json';
import Layout from './layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CatHeader = styled.div`


    width: 100%;
    height: auto;
    height: 15vh;
    margin: 0 auto;
    padding: 0;

`
const CatHeaderText = styled.h1`
    margin: 0 auto;
    margin-top: 2.2em;
    margin-block-end: 0;

    font-weight: 500;
    font-size: 40px;
    font-style: normal;
    font-family: sans-serif;

`
const FolderBox = styled.div`
    display: flex;
    min-height: 32px;
    max-width: 100px;
    
    margin: 0 auto;
    padding: 0;
    transition: 2s linear ease-in-out;

    border: 2px solid inherit;
    border-radius: 8px;

    justify-content: center;
    align-items: center;
    cursor: pointer;

    text-decoration: none;
    color: black;

    &:hover{
        transform: scale(1.1);
        background-color: gray;
    }

    &:active{
        transform: scale(1);
    }

`

export default function CatLayout(props) {
    const Data = props.data;
    console.log(Data[0]);
    return(
        <Layout pageTitle={props.pageTitle}>
            <div className="container" style={{margin:'0 auto', width: '100%', justifyContent:'center', alignContent: 'center'}}>
                <CatHeader>
                    <CatHeaderText>não bom</CatHeaderText>
                </CatHeader>

                <section className="Cat-folders" style={{alignContent: 'center', justifyContent: 'center', margin: '0 auto', textAlign: 'center', alignItems: 'center'}}>
                    {`Aqui ficam todos os cheatsheets sobre ${props.pageTitle}`}


                    {props.pageTitle === "Majors" && db.majors.map((major, majorId) => {
                        const majorIndex = `major_${majorId}`;
                        return(
                            <FolderBox key={majorId} as={Link} to={`/majors/${major.title}`} id={majorIndex}>
                                {major.title}
                            </FolderBox>
                        )
                    })}

                    {props.pageTitle === "Minors" && db.minors.map((minor, minorId) => {
                        const minorIndex = `minor__${minorId}`;
                        return(
                            <FolderBox key={minorId} as={Link} to={`/minors/${minor.title}`} id={minorIndex}>
                                {minor.title}
                            </FolderBox>
                        )
                    })}

                    {props.pageTitle === "Subjects" && db.subjects.map((subject, subjectId) => {
                        const subjectIndex = `subject__${subjectId}`;
                        return(
                            <FolderBox key={subjectId} as={Link} to={`/subjects/${subject.title}`} id={subjectIndex}>
                            {subject.title}
                        </FolderBox>
                    )
                    })}
                </section>
            </div>


            <footer>ads here</footer>
        </Layout>
    );
}
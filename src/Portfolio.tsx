import React from 'react';
import styled from 'styled-components';
import './App.css';

const PortfolioWrapper = styled.div`
    padding: 60px 0;
    // width: 100%;  // Ensure the wrapper takes full width
    margin: 40px 90px;
    item-align: center;
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.025);
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-left: 0;
        width: 100%;
    }
`;

const ProjectImage = styled.img`
    width: 600px;
    height: 400px;
    object-fit: cover;

    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
    }
`;

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    // padding: 20px;
    margin-left: 20px;
    width: calc(100% - 300px); 

`;

const ProjectTitle = styled.h3`
    font-size: 2.7em;
    margin-bottom: 10px;
    font-family: PP Editorial New, 'Times New Roman', Times, serif;
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    line-height: 1.4;
`;

const ProjectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100%;
`;

import hadaImage from './assets/hada.jpg';
import aniforumImage from './assets/aniforum.jpg';
// import uxjuryImage from '../assets/uxjury.jpg';  // Ensure the path is correct if needed

const projects = [
    {
        title: 'HADA',
        description: 'This is a brief description of Project One.',
        imageUrl: hadaImage, 
    },
    {
        title: 'Aniforum',
        description: 'providing a way for anime/manga fans to create communities and connect',
        imageUrl: aniforumImage, 
    },
    // {
    //     title: 'UX Jury',
    //     description: 'This is a brief description of Project Three.',
    //     imageUrl: uxjuryImage, // Use imported image
    // },
];

const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <h2>My Projects</h2>
            <ProjectList>
                {projects.map((project, index) => (
                    <ProjectItem key={index}>
                        <ProjectImage src={project.imageUrl} alt={project.title} />
                        <ProjectItemContainer>
                            <ProjectContent>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                            </ProjectContent>
                        </ProjectItemContainer>
                    </ProjectItem>
                ))}
            </ProjectList>
        </PortfolioWrapper>
    );
};

export default Portfolio;

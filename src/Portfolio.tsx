import React from 'react';
import styled from 'styled-components';
import './App.css';  // Ensure that the correct path to App.css is used

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
`;

const ProjectImage = styled.img`
    width: 500px;  // Set a fixed width to make the image square
    height: 400px;  // Set a fixed height to match the width
    object-fit: cover;
`;

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20px;
    width: calc(100% - 300px);  // Calculate the remaining width after the image
`;

const ProjectTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    line-height: 1.4;
`;

import hadaImage from './assets/hada.jpg';
import aniforumImage from './assets/aniforum.jpg';
// import uxjuryImage from '../assets/uxjury.jpg';  // Ensure the path is correct if needed

const projects = [
    {
        title: 'HADA',
        description: 'This is a brief description of Project One.',
        imageUrl: hadaImage, // Use imported image
    },
    {
        title: 'Aniforum',
        description: 'This is a brief description of Project Two.',
        imageUrl: aniforumImage, // Use imported image
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
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                        </ProjectContent>
                    </ProjectItem>
                ))}
            </ProjectList>
        </PortfolioWrapper>
    );
};

export default Portfolio;

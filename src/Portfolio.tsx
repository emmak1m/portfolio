import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './App.css';

const PortfolioWrapper = styled.div`
    padding: 60px 0;
    margin: 40px 90px;
    item-align: center;
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectItem = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
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
    width: calc(100% - 300px);
`;

const ProjectTitle = styled.h3`
    font-size: 2.7em;
    margin-bottom: 0px;
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    line-height: 1.2;
    width: 100%;
`;

const ProjectItemContainer = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 30px;
    width: 100%;
    height: 100%;
    @media (max-width: 1200px) {
        margin-top: 5%;
        margin-bottom: 10%;
    }
`;

const StyledH2 = styled.h2`
    font-family: PP Editorial New, 'Times New Roman', Times, serif;
`;

import hadaImage from './assets/hada.jpg';
import aniforumImage from './assets/aniforum.jpg';

const projects = [
    {
        title: 'Aniforum',
        description: 'Providing a way for anime/manga fans to create communities and connect.',
        imageUrl: aniforumImage,
        link: '/aniforum'
    },
    {
        title: 'HADA(하다)',
        description: 'Creating a new environment for students to learn using space repetition',
        imageUrl: hadaImage,
        link: '/hada'
    },
];

const Portfolio: React.FC = () => {
    return (
        <PortfolioWrapper>
            <StyledH2>My Projects</StyledH2>
            <ProjectList>
                {projects.map((project, index) => (
                    <Link to={project.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src={project.imageUrl} alt={project.title} />
                            <ProjectItemContainer>
                                <ProjectContent>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                </ProjectContent>
                            </ProjectItemContainer>
                        </ProjectItem>
                    </Link>
                ))}
            </ProjectList>
        </PortfolioWrapper>
    );
};

export default Portfolio;

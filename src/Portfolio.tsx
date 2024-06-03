import React from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.div`
    padding: 60px 0;
`;

const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectItem = styled.div`
    width: calc(33.333% - 40px);
    margin: 20px;
    padding: 10px 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.025);
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
    font-size: 1em;
    line-height: 1.4;
`;

const projects = [
    {
        title: 'HADA',
        description: 'This is a brief description of Project One.',
    },
    {
        title: 'Aniforum',
        description: 'This is a brief description of Project Two.',
    },
    {
        title: 'UX Jury',
        description: 'This is a brief description of Project Three.',
    },
];

const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <h2>My Projects</h2>
            <ProjectList>
                {projects.map((project, index) => (
                    <ProjectItem key={index}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                    </ProjectItem>
                ))}
            </ProjectList>
        </PortfolioWrapper>
    );
};

export default Portfolio;

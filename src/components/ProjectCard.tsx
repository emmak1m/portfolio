import React from 'react'
import styled from 'styled-components'
import Card from './Card'


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    padding: 60px 0;
    align-items: center;
    width: 100%;
    max-width: 500px;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    position: relative;
    justify-content: space-between;
    width: 100%;
`

export default function ProjectCard() {
    return (
        <StyledContainer>
            <StyledCard>
                <Card
                    containerStyle="hadacontainer"
                    frontStyle="hadafront"
                    backStyle="hadaback"
                />
            </StyledCard>
            <StyledCard>
                <Card
                    containerStyle="aniforumcontainer"
                    frontStyle="aniforumfront"
                    backStyle="aniforumback"
                />
            </StyledCard>

        </StyledContainer>
    )
}

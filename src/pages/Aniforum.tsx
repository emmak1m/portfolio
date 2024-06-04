import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Styledbody = styled.div`
    font-family: 'Satoshi', sans-serif;
    // margin: 0 70px 0 70px;
    padding: 10px;
    /* Reduced padding */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Aniforum: React.FC = () => {
    return (
        <Styledbody>
            <h1>Aniforum</h1>
            <p>Providing a way for anime/manga fans to create communities and connect.fnjkewnfkejwnfkejwnfekwj</p>
        </Styledbody>
    );
}

export default Aniforum;

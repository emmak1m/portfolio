import React from 'react';
import '../App.css';
import styled from 'styled-components';
import NavBar from '../components/navbar';

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

const Horizontaldiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    margin: 40px 90px;

    @media (max-width: 1200px) {
        flex-direction: column;
        margin-left: 0;
        width: 100%;
    }
`;

const Verticaldiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 35%;
`;


const Aniforum: React.FC = () => {
    return (
        <Styledbody>
            <Horizontaldiv>
                <Verticaldiv>
                    <h1>Aniforum</h1>
                    <p>Providing a way for anime/manga fans to create communities and connect.</p>
                </Verticaldiv>
            </Horizontaldiv>
        </Styledbody>
    );
}

export default Aniforum;

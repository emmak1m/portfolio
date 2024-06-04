import SplineViewer from "./SplineViewer";
import styled from 'styled-components';
import '../App.css';
import Portfolio from "../Portfolio";
import { Typewriter } from 'react-simple-typewriter';

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

const Header = styled.h1`
    font-size: 2.2em;
    margin-bottom: 5px; 
    font-family: PP Editorial New, 'Times New Roman', Times, serif;
    font-weight: semibold;
`;

const Subtext = styled.p`
    font-size: 1.2em;
    margin-bottom: 2px; /* Reduced spacing */
`;

const MyComponent = () => {
    return (
        <div className='App'>
            <Typewriter
                words={['Hello,', 'I\'m', 'Emma']}
                wrapperClassName="typewriter-wrapper"
                textClassName="typewriter-text"
            />
        </div>
    )
}

export default function HeroSection() {
    return (
        <>
            <Horizontaldiv>
                <Verticaldiv>
                    <Header>
                        <Typewriter
                            words={['Hello, I\'m Emma']}
                            wrapperClassName="typewriter-wrapper"
                            textClassName="typewriter-text"
                        />
                    </Header>
                    <Subtext>An aspiring UX/UI Designer currently based in NYC/Boston.
                        Designing to make people stare at screens longer, but with a smile :)</Subtext>
                    {/* <Subtext>)‍</Subtext> */}
                </Verticaldiv>
                <SplineViewer />
            </Horizontaldiv>
            <Portfolio />
        </>
    );
}

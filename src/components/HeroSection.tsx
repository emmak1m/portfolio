import SplineViewer from "./SplineViewer";
import styled from 'styled-components';

const Horizontaldiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 60px 0;
`;

export default function HeroSection() {
    return (
        <Horizontaldiv>
            <h1>Hello, I'm Emma</h1>
            <SplineViewer />
        </Horizontaldiv>
    );
}
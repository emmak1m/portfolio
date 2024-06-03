import styled from 'styled-components';

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Satoshi', sans-serif;
    background: rgba(255, 255, 255, 0.11);
    height: 80px;
    // padding: 0 20px 20px 0;
`;

const NavLink = styled.a`
    color: black;
    text-decoration: none;
    // padding: 20px;
`;

const BoldText = styled.span`
    font-weight: bold;
    font-size: 1.2em; // Adjust the font size as needed
`;

const LinksContainer = styled.div`
    display: flex;
`;

const RightNavLink = styled.a`
    color: black;
    text-decoration: none;
    padding: 20px;
`;

export default function NavBar() {
    return (
        <NavBarWrapper>
            <NavLink href="/home">
                <BoldText>Emma Kim</BoldText>
            </NavLink>
            <LinksContainer>
                <RightNavLink href="/about">
                    About
                </RightNavLink>
                <RightNavLink href="https://drive.google.com/file/d/1MhsKDbCbZBVAU8PMWGu5LfC442rgysFb/view">
                    Resume
                </RightNavLink>
                <RightNavLink href="https://www.linkedin.com/in/emmakim2">
                    LinkedIn
                </RightNavLink>
            </LinksContainer>
        </NavBarWrapper>
    );
}

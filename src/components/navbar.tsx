import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Satoshi', sans-serif;
    background: rgba(255, 255, 255, 0.11);
    height: 70px;
    box-sizing: border-box; /* Include padding in the width */
    // padding: 0 20px; /* Add padding to the navbar */
    ${({ menuOpen }) => menuOpen && `
        padding-left: 120px; /* Adjust left padding when menu is open */
        padding-right: 120px; /* Adjust right padding when menu is open */
    `}
`;

const NavLink = styled.a`
    color: black;
    text-decoration: none;
`;

const BoldText = styled.span`
    font-weight: bold;
    font-size: 1.2em;
    font-family: PP Editorial New, 'Times New Roman', Times, serif;
`;

const LinksContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightNavLink = styled.a`
    color: black;
    text-decoration: none;
    font-weight: normal;
    padding: 20px;
    transition: font-weight 0.2s ease-in;

    &:hover {
        font-weight: bold;
    }
`;

const HamburgerButton = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 768px) {
        display: flex;
    }

    div {
        width: 30px;
        height: 3px;
        background: black;
        border-radius: 10px;
    }
`;

const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    background: white;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 5;

    @media (max-width: 768px) {
        display: ${({ open }) => open ? 'flex' : 'none'};
    }
`;

const MobileNavLink = styled.a`
    color: black;
    text-decoration: none;
    font-weight: normal;
    font-size: 1.5em;
    margin: 20px 0;
`;

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <NavBarWrapper menuOpen={menuOpen}>
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
            <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
                <div />
                <div />
                <div />
            </HamburgerButton>
            <MobileMenu open={menuOpen}>
                <MobileNavLink href="/about" onClick={() => setMenuOpen(false)}>
                    About
                </MobileNavLink>
                <MobileNavLink href="https://drive.google.com/file/d/1MhsKDbCbZBVAU8PMWGu5LfC442rgysFb/view" onClick={() => setMenuOpen(false)}>
                    Resume
                </MobileNavLink>
                <MobileNavLink href="https://www.linkedin.com/in/emmakim2" onClick={() => setMenuOpen(false)}>
                    LinkedIn
                </MobileNavLink>
            </MobileMenu>
        </NavBarWrapper>
    );
};

export default NavBar;

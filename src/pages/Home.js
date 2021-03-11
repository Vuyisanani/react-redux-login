import React from 'react';

import { StyledTittle, StyledSubTitle, StyledLogo, StyledButton, ButtonGroup } from './../components/Styles';

import Logo from './../assets/logo.jpeg';



const Home = ()=> {

    return (
        <div>
            <div style={{
                position:"absolute",
                top: 0,
                left: 0,
                // right: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <StyledLogo image={Logo} />
            </div>
            <StyledTittle size={30}>
                Welcome to React Redux login App
            </StyledTittle>
            <StyledSubTitle size={17}>
                Feel free to explore our page
            </StyledSubTitle>
            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    );
};

export default Home;
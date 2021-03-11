import React from 'react';

import { StyledTittle, 
    StyledSubTitle, 
    StyledLogo, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors
 } 
 from './../components/Styles';

import Logo from './../assets/logo.jpeg';

const Dashboard = ()=> {

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
            <StyledFormArea bg="light-grey">
                <StyledTittle size={30}>
                    Welcome, User
                </StyledTittle>
                
                <ButtonGroup>
                    <StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { useHistory } from 'react-router-dom';

import { StyledTittle, 
    StyledLogo, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
 } 
 from './../components/Styles';

 import { connect } from 'react-redux';
 import { logoutUser } from './../auth/actions/userActions';

import Logo from './../assets/logo.jpeg';

const Dashboard = ({logoutUser})=> {
    const history = useHistory();

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
                    <StyledButton to="#" onClick={() => logoutUser(history)}>Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    );
};

export default connect(null, {logoutUser})(Dashboard);
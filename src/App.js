import React from 'react';
import { connect } from 'react-redux';


import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';

import { StyledContainer } from './components/Styles';  

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const App = ({checked}) => {

    return (
       <Router>
           {checked && 
            <StyledContainer>
                <Switch>
                    <BasicRoute path='/signup'>
                        <Signup/>
                    </BasicRoute>
                    <BasicRoute path='/login'>
                        <Login/>
                    </BasicRoute>
                    <AuthRoute path='/dashboard'>
                        <Dashboard/>
                    </AuthRoute>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
                {/* <Dashboard /> */}
            </StyledContainer>
            }
        </Router>  
        
    );
};

const mapStateToProps = ({session}) => {
    const checked = session.checked;
    return { checked }
}
export default connect(mapStateToProps)(App);
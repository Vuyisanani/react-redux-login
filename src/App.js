import React from 'react';


import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { StyledContainer } from './components/Styles';  

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const App = () => {

    return (
       <Router>
            <StyledContainer>
                <Switch>
                    <Route path='/signup'>
                        <Signup/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
                {/* <Dashboard /> */}
            </StyledContainer>
        </Router>  
        
    );
};

export default App;
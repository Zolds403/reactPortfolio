import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
    return (
        <Router>
            <switch>
                <Route exact path="/">
                    <me user={user}/>
                </Route>
                <Route exact path="/projects">
                    <me user={user}/>
                </Route>
                <Route exact path="/work">
                    <me user={user}/>
                </Route>
                <Route exact path="/education">
                    <me user={user}/>
                </Route>
            </switch>
        </Router>
    );
};

export default Pages;
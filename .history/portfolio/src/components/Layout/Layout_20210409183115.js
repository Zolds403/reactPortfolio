//jshint esversion: 8
import React from 'react';
import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ User }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/Projects">
                    <Projects user={ user}/>
                </Route>
                <Route path="/work">
                    <Work user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user}/>
                </Route>
            </Switch>
        </Router>
    )
}
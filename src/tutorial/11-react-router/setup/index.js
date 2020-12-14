import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import People from './People';
import Error from './Error';
import Person from './Person';

const Index = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/people'>
                    <People />
                </Route>
                <Route path='/person/:id' children={<Person />}>
                
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default Index;
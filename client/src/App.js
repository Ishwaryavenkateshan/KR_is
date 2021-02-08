import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-route-dom';
import Navbar from './Components/layout';
import Landing from './Components/layout';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import './App.css';


const App = () =>{
    <Router>
    <Fragment>
        <Navbar/>
        <Route exact path='/' component = {Landing} />
        <section className="container">
            <Switch>
                <Route exact path='/register' component = {Register} />
                <Route exact path='/register' component = {Login} />
            </Switch>
        </section>

        <Landing/>
    </Fragment>
    </Router>
};

export default App;



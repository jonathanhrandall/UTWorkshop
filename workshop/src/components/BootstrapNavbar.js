import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Home from '../pages/Home';
import Apply from '../pages/Apply';
import About from '../pages/about/About';
import Footer from './Footer'

const routes = [
    { name: 'About', route: '/about' },
    { name: 'Apply', route: '/apply' },
    { name: '', route: '/faq' }
];

export default function BootstrapNavbar() {
    return (
        <div>
            <Navbar bg="light" variant="light" sticky='top'>
                <Navbar.Brand href='/'>
                    DIGGS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        {routes.map(rt => (
                            <Nav.Link key={rt.name} href={rt.route}>{rt.name}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/apply'>
                        <Apply />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div >
    );
}

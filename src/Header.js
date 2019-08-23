import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './Images/logo.png';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import AboutPage from './Pages/AboutPage';
import LocationPage from './Pages/LocationPage';

const Header = () => {
    return(
        <div>
            <Router>
                <Link to="/"> <img src= {logo} alt="logo" className = "Header-logo"/> </Link>
                <div className = "Header-bar">
                    <Link to="/Menu" className = "Header-option"> Menu </Link>
                    <Link to="/About" className = "Header-option"> About </Link>
                    <Link to="/Location" className = "Header-option"> Location </Link>
                </div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/Menu/" component={MenuPage}/>
                <Route exact path="/About/" component={AboutPage}/>
                <Route exact path="/Location/" component={LocationPage}/>
            </Router>
        </div>
    );
};
export default Header;
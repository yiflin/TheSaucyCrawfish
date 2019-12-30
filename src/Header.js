import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './Images/logo.png';
import instagram from './Images/instagram.png'
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import AboutPage from './Pages/AboutPage';
import LocationPage from './Pages/LocationPage';
import Footer from './Footer'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
        }
    }
    openForm = () => {
        this.setState({formOpen:true})
    }
    closeForm = () => {
        this.setState({formOpen:false})
    }

    render() {
        const form = (
            this.state.formOpen ?
                <div className = "Header-form">
                    <button className = "Header-formclosebutton" onClick={this.closeForm}>X</button>
                    <Link onClick={this.closeForm} to="/" className = "Header-formoption"> Home </Link> <br/>
                    <Link onClick={this.closeForm} to="/Menu" className = "Header-formoption"> Menu </Link> <br/>
                    <Link onClick={this.closeForm} to="/About" className = "Header-formoption"> About </Link><br/>
                    <Link onClick={this.closeForm} to="/Location" className = "Header-formoption"> Location </Link><br/>
                    <a href="https://www.instagram.com/thesaucycrawfish/" target="_blank"><img className="Header-formsocicon" src={instagram}></img></a>
                </div>
            :""
        )
        return(
            <div>
                <Router>
                    <div className = "Header-bar">
                        <Link className="Header-logolink" onClick={this.closeForm} to="/"> <img src= {logo} alt="logo" className="Header-logo"/> </Link>
                        <Link to="/" className = "Header-option"> Home </Link>
                        <Link to="/Menu" className = "Header-option"> Menu </Link>
                        <Link to="/About" className = "Header-option"> About </Link>
                        <Link to="/Location" className = "Header-option"> Location </Link>
                        <a href="https://www.instagram.com/thesaucycrawfish/" target="_blank"><img className="Header-socialicon" src={instagram}></img></a>
                        <button className = "Header-formbutton" onClick={this.openForm}><div className = "Header-formshape">&#9776;</div></button>
                        {form}
                    </div>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/Menu/" component={MenuPage}/>
                    <Route exact path="/About/" component={AboutPage}/>
                    <Route exact path="/Location/" component={LocationPage}/>
                </Router>
                <Footer/>
            </div>
        );
    };
};
export default Header;
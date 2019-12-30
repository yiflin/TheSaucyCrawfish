import React, { Component } from 'react';
import Food from '../Images/cajun.jpeg';
import Pepper from '../Images/pepperwing.jpg'
import Wings from '../Images/lemonwing.jpg';
import Table from '../Images/table.jpg';
import crawclip from '../Images/crawclip.png';
import crabclip from '../Images/crabclip.png';
const welcometext=" Come in, sit down, and start cracking some crawfish. At the saucy crawfish, fresh seafood is prepared cajun style and ready to serve in just 5 simple steps."
const wtext1="pick your choice of seafood."
const wtext2="flavor it with you favorite sauce."
const wtext3="decide how spicy you can go."
const wtext4="add any extras you want with your seafood."
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Blandit turpis cursus in hac habitasse. Vel risus commodo viverra maecenas. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec enim diam."
const fillertext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Blandit turpis cursus in hac habitasse. Vel risus commodo viverra maecenas. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec enim diam."

class HomePage extends Component {
    render() {
        return(
            <div>
                <div className="HomePage-homescreen">
                    <div className="HomePage-hometitle"> Finger Lickin 
                        <div className="HomePage-hometitlered">' Saucy</div>
                    </div>
                </div>
                <div className="HomePage-blackbackground">
                    <pre className="HomePage-whitetitle">Welcome to
                        <div className="HomePage-redtitle"> The Saucy Crawfish</div>
                    </pre>
                    <div className="HomePage-whitetext">
                        {fillertext}
                    </div>
                    <a className="HomePage-menulink" href="Menu">View Menu</a>
                    <img className="HomePage-clip" src={crabclip} alt="mfood"/>
                </div>
                <div className="HomePage-boxwrapper">
                    <div className = "HomePage-boxcontainer">
                        <img className="HomePage-boximage" src={Pepper} alt="mfood"/>
                        <h1 className="HomePage-boxtitle"> Get Saucy </h1>
                        {welcometext}
                        <ol>
                            <li>{wtext1}</li>
                            <li>{wtext2}</li>
                            <li>{wtext3}</li>
                            <li>{wtext4}</li>
                            <li>ENJOY!</li>
                        </ol>
                        <a className="HomePage-aboutlink" href="About">About Us</a>
                    </div>
                    <div className = "HomePage-boxcontainer">
                        <img className="HomePage-boximage" src={Table} alt="mfood"/>
                        <h1 className="HomePage-boxtitle"> Join Us </h1>
                        {text2}
                        <a className="HomePage-locationlink" href="Location">Location</a>
                    </div>
                </div>
                <div className="HomePage-foodbackground"/>
            </div>
        );
    };
}

export default HomePage
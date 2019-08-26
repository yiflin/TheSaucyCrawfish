import React, { Component } from 'react';
import Picture1 from '../Images/table.jpg';

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."

class AboutPage extends Component {

    render() {
        return(
            <div>
                <div className="AboutPage-heroimage">
                    <h1 className="AboutPage-herotitle">About</h1>
                </div>
                <div className="AboutPage-background">
                    <div>
                        <img className="AboutPage-picturelefttop" src={Picture1} alt="pic1"/>
                        <p className="AboutPage-textleft">{text}</p>
                        <img className="AboutPage-pictureleftbot" src={Picture1} alt="pic1"/>
                    </div>
                    <div style={{position: "relative", bottom: "150px"}}>
                        <img className="AboutPage-picturerighttop" src={Picture1} alt="pic1"/>
                        <p className="AboutPage-textright">{text}</p>
                        <img className="AboutPage-picturerightbot" src={Picture1} alt="pic1"/>
                    </div>
                    <div style={{position: "relative", bottom: "300px"}}>
                        <img className="AboutPage-picturelefttop" src={Picture1} alt="pic1"/>
                        <p className="AboutPage-textleft">{text}</p>
                        <img className="AboutPage-pictureleftbot" src={Picture1} alt="pic1"/>
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    };
}

export default AboutPage
import React, { Component } from 'react';
import Food1 from '../Images/food.jpeg';
import Food2 from '../Images/table.jpg';
import Food3 from '../Images/crawfish.png';
const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus."

class HomePage extends Component {

    render() {
        return(
            <div>
                <div className="HomePage-homescreen">
                    <div className="HomePage-hometitle"> SOME INTRO TEXT</div>
                    <br/><br/><br/><br/><br/>
                    <div className="HomePage-hometitle"> COMING SOON IN NOVEMBER</div>
                </div>
                <div className="HomePage-screen2">
                    <div className="HomePage-textbox">
                        <img className="HomePage-pictureright" src={Food1} alt="food1"/>
                        <h1 className="HomePage-title"> Title 1</h1>
                        <br/><br/>
                        <div className="HomePage-text">{text1}</div>
                    </div>
                </div>
                <div className="HomePage-screen3">
                    <div className="HomePage-textbox">
                        <img className="HomePage-pictureleft" src={Food2} alt="food1"/>
                        <div className="HomePage-title"> Title 2</div>
                        <br/><br/>
                        <div className="HomePage-text">{text1}</div>
                    </div>
                </div>
                <div className="HomePage-screen4">
                    <div className="HomePage-textbox">
                        <img className="HomePage-pictureright" src={Food3} alt="food1"/>
                        <div className="HomePage-title"> Title 3</div>
                        <br/><br/>
                        <div className="HomePage-text">{text1}</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default HomePage
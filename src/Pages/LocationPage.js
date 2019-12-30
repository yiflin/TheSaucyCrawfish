import React, { Component } from 'react';
import GoogleMaps from './PageComponents/GoogleMaps'
class LocationPage extends Component {

    render() {
        return(
            <div>

                <div className="LocationPage-heroimage">
                    <h1 className="LocationPage-herotitle">Location</h1>
                </div>
                
                <div className="LocationPage-container">
                    <hr/>
                    <h1 className="LocationPage-title">Bradenton</h1>
                    <ul>
                        <li>
                            <p className="LocationPage-texttitle">Address:</p> 3142 53rd Ave E. Brandenton, FL 34203
                        </li>
                        <li>
                            <p className="LocationPage-texttitle">Phone:</p> (813) 666-6666
                        </li>
                        <li>
                            <p className="LocationPage-texttitle">Email:</p> Saucycraw@gmail.com
                        </li>
                        <li><p className="LocationPage-texttitle">Hours:</p><br/>
                            <div style={{marginLeft:"30px"}}>
                                Mon-Thu: 11:00am-10:00pm<br/>
                                Fri-Sat: 11:00am-11:00pm<br/>
                                Sun: 11:30am-10:00pm
                            </div>
                        </li>
                    </ul>
                    <GoogleMaps/>
                </div>
                <div className="LocationPage-container">
                    <br/><br/><br/>
                    <hr/>
                    <div className="LocationPage-comingsoon">
                        <h1>Coming Soon to:</h1>
                        <ul style={{fontSize: "24px", color: "black"}}>
                            <li>Saint Petersburg</li>
                            <li>Clearwater</li>
                        </ul>
                    </div>
                    <br/><br/><br/>
                </div>

            </div>
        );
    };
}

export default LocationPage
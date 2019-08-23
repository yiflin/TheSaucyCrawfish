import React, { Component } from 'react';
import GoogleMaps from './PageComponents/GoogleMaps'
class LocationPage extends Component {

    render() {
        return(
            <div>
                <div className="LocationPage-heroimage">
                    <h1 className="LocationPage-herotitle">Location</h1>
                </div>
                <div className="LocationPage-background">
                    <h1 className="LocationPage-title"> 3142 53rd Ave East<br/>Bradenton, FL 34203</h1>
                    <GoogleMaps/>
                    <h1 className="LocationPage-comingsoon"> Coming Soon to<br/>St. Petersburg and Clearwater</h1>
                </div>
            </div>
        );
    };
}

export default LocationPage
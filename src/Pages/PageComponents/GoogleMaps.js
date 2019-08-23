import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap,Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 27.446708, lng: -82.523704 }}>
    {props.isMarkerShown && <Marker position={{ lat: 33.988566, lng: -117.903298 }} />}
  </GoogleMap>
))

class GoogleMaps extends Component {
    render() {
        return(
            <div>
            <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={
                <div style={{ height: '80%' }} />}
            containerElement={
                <div style={{ height: '600px', width: "90%", margin: "auto" }} />}
            mapElement={
                <div style={{ height: '80%' }} />}/>
            </div>
        );
    };
}

export default GoogleMaps
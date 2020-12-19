import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Mapa extends Component {
    render() {
      return (
        <div className="Mapa"  style={{ height: '40vh', width: '40%' }}>
          <Map google={this.props.google} zoom={7}
          position={{lat: 37.759703, lng: -122.428093}}>
    
            
    
            <InfoWindow >
                <div>
                  {/* <h1>{this.state.selectedPlace.name}</h1> */}
                </div>
            </InfoWindow>
          </Map> 
        </div>
      );
    }
  }


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCIslqNY90Lw9gkapB4GXd1JgbAJO1RvV4')
})(Mapa)
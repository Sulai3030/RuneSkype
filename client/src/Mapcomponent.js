import React, { Component } from 'react';
import './mapstyle.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    
    const position = [this.state.lat, this.state.lng];
   
    
    return (

      
            
          <div id='mapcontainer'>

               <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
         
         </div>
       


       )
      }
     }
     export default MapComponent
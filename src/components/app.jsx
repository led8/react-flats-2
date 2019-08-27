import React, { Component } from 'react';

import flats from '../flats.js'
import FlatList from './flats-list.jsx';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker.jsx';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {flats: flats, selectedFlat: flats[0]}
  }

  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 2.333333
    },
    zoom: 11
  };

  selectedFlat = (id) => {
    console.log(id)
    this.setState({ selectedFlat: flats[id] })
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectFlat={this.selectedFlat} active={this.state.selectedFlat}/>
        </div>
        <div className="map-container">
          <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyA0B8vEtPNbY0QljCcdPmB3ctx4VpSl_A4" }}
                          defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <MapMarker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;

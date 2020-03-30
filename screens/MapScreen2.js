import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TextInput,Button } from 'react-native';
import {Card} from 'react-native-elements';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';


Geocoder.init("AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo"); //<-- enter you google api key here

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 
const GOOGLE_MAPS_APIKEY = 'AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo'; //<-- enter you google api key here

const slatitude=0;
const slongitude=0;
const dlatitude=0;
const dlongitude=0;

class MapScreen extends Component {

  constructor(props) {
    super(props);
    var f = props.navigation.state.params.from;
    var t = props.navigation.state.params.to;    

    var flt;
    var flg;
    var tlt;
    var tlg;

    if(f == "Main Building NIT Calicut")
      flt = 11.321740;
      flg = 75.934109;
    if(t == "Main Building NIT Calicut")
      tlt = 11.321740;
      tlg = 75.934109;
    if(f == "NLHC")
      flt = 11.321735;
      flg = 75.932971;
    if(t == "NLHC")
      tlt = 11.321735;
      tlg = 75.932971;
    if(f == "ELHC")
      flt = 11.322543;
      flg = 75.933817;
    if(t == "ELHC")
      tlt = 11.322543;
      tlg = 75.933817;
    if(f == "Bhaskara Hall,NITC")
      flt = 11.320954;
      flg = 75.933969;
    if(t == "Bhaskara Hall,NITC")
      tlt = 11.320954;
      tlg = 75.933969;
    if(f == "Auditorium NIT")
      flt = 11.322462;
      flg = 75.935841;
    if(t == "Auditorium NIT")
      tlt = 11.322462;
      tlg = 75.935841;
    if(f == "NITC Main Canteen")
      flt = 11.320099;
      flg = 75.932031;
    if(t == "NITC Main Canteen")
      tlt = 11.320099;
      tlg = 75.932031;



























    this.state = {
      coordinates: [
        {
          latitude: flt,
          longitude: flg,
        },
        {
          latitude: tlt,
          longitude: tlg,
        },
      ],
    };
     
    this.mapView = null;

    
}


 
  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
      
    });
  }
  

 
  render() {
    return (            
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        // onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={this.state.coordinates.slice(1,-1)}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
 
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    );
  }
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MapScreen;
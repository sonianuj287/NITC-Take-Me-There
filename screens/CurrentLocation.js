import React, { Component } from 'react';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 
Geocoder.init("AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo");

export default class App extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {  
        loc: null,
        lt:0,
        lg:0
    };  
}
async componentDidMount(){
    const location = await Location.getCurrentPositionAsync({});
    const co = location.coords; 
    this.setState({lt:co.latitude});
    this.setState({lg:co.longitude});
  };



  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.lt,
            longitude: this.state.lg,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: this.state.lt,
              longitude: this.state.lg,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Current location'}
            description={'users current location'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
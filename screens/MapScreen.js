import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo';

class Example extends Component {

  constructor(props) {
    super(props);
    var f = props.navigation.state.params.from;
    var t = props.navigation.state.params.to;
    var tr =props.navigation.state.params.travel;
    var flt=0;
    var flg=0;
    var tlt=0;
    var tlg=0;

    if(f == "")
      f = t;
    if(t == "")
      t = f;

    if(tr == "Vehicle"){
      
    if(f == "Current Location"){
        flt = this.state.lt;
        flg = this.state.lt;
    }
    if(f == "Main Building NIT Calicut"){
      flt = 11.321740;
      flg = 75.934109;
    }
    if(t == "Main Building NIT Calicut"){
      tlt = 11.321740;
      tlg = 75.934109;
    }
    if(f == "NLHC"){
      flt = 11.321735;
      flg = 75.932971;
    }
    if(t == "NLHC"){
      tlt = 11.321735;
      tlg = 75.932971;
    }
    if(f == "ELHC"){
      flt = 11.322543;
      flg = 75.933817;
    }
    if(t == "ELHC"){
      tlt = 11.322543;
      tlg = 75.933817;
    }
    if(f == "Bhaskara Hall,NITC"){
      flt = 11.320954;
      flg = 75.933969;
    }
    if(t == "Bhaskara Hall,NITC"){
      tlt = 11.320954;
      tlg = 75.933969;
    }
    if(f == "Auditorium NIT"){
      flt = 11.322462;
      flg = 75.935841;
    }
    if(t == "Auditorium NIT"){
      tlt = 11.322462;
      tlg = 75.935841;
    }
    if(f == "NITC Main Canteen"){
      flt = 11.320099;
      flg = 75.932031;
    }
    if(t == "NITC Main Canteen"){
      tlt = 11.320099;
      tlg = 75.932031;
    }
    }
    
    if(f == "NITC Main Canteen" && t == "Auditorium NIT" && tr == "Walk"){
        props.navigation.navigate('image',{f,t});
    }



    this.state = {
      lt:0,
      lg:0,
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
    // console.log(this.state.lt);
  }

  async componentDidMount(){
    const location = await Location.getCurrentPositionAsync({});
    const co = location.coords; 
    this.setState({lt:co.latitude});
    this.setState({lg:co.longitude});
    console.log(location);
  };
  

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  

  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
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
        onPress={this.onMapPress}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      >
        
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            // waypoints={this.state.coordinates.slice(1,-1)}
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

export default Example;
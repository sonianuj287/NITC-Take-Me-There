import React, { Component } from 'react';
import { Dimensions, StyleSheet,View,Button,Text } from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Card from '../components/Card';

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

    if((f == "Central Library" && t == "NLHC")||(f == "NLHC" && t == "Central Library") && tr == "Walk"){
        props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Central Library" && t == "SSL")||(f == "SSL" && t == "Central Library") && tr == "Walk"){
        props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Main Building" && t == "NLHC")||(f == "NLHC" && t == "Main Building") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Main Building" && t == "Central Library")||(f == "Central Library" && t == "Main Building") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Main Building" && t == "Micro Canteen")||(f == "Micro Canteen" && t == "Main Building") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Main Building" && t == "SSL")||(f == "SSL" && t == "Main Building") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Micro Canteen" && t == "NLHC")||(f == "NLHC" && t == "Micro Canteen") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }
    else if((f == "Micro Canteen" && t == "SSL")||(f == "SSL" && t == "Micro Canteen") && tr == "Walk"){
      props.navigation.navigate('StaticMapImage',{f,t});
    }

    else{
        if(f == "AHostel"){
            flt = 11.321740;
            flg = 75.934109;
        }
        if(f == "Central Computer Center"){
            flt = 11.321485;
            flg = 75.934098;
        }
        if(f == "Central Library"){
            flt = 11.322694;
            flg = 75.934629
        }
        if(f == "Chemical Department"){
            flt = 11.323614;
            flg = 75.937532;
        }
        if(f == "Creative Zone"){
            flt = 11.321082;
            flg = 75.933393;
        }
        if(f == "D Hostel"){
            flt = 11.319749;
            flg = 75.937667;
        }
        if(f == "CSED"){
            flt = 11.322292;
            flg = 75.933973;
        }
        if(f == "E Hostel"){
            flt = 11.319806;
            flg = 75.938542;
        }
        if(f == "ECED"){
            flt = 11.322626;
            flg = 75.934825;
        }
        if(f == "ECLC"){
            flt = 11.322897;
            flg = 75.936918;
        }
        if(f == "Electrical Department"){
            flt = 11.322863;
            flg = 75.934562;
        }
        if(f == "Administrative Block"){
            flt = 11.320861;
            flg = 75.932871;
        }
        if(f == "Environmental Engineering Lab"){
            flt = 11.323075;
            flg = 75.935702;
        }
        if(f == "F Hostel"){
            flt = 11.320727;
            flg = 75.937691;
        }
        if(f == "Football Ground"){
            flt = 11.320972;
            flg = 75.931650;
        }
        if(f == "G Hostel"){
            flt = 11.321555;
            flg = 75.937003;
        }
        if(f == "Gymnasium"){
            flt = 11.319921;
            flg = 75.931602;
        }
        if(f == "Hostel Office"){
            flt = 11.320510;
            flg = 75.934398;
        }
        if(f == "International Hostel"){
            flt = 11.319289;
            flg = 75.936227;
        }
        if(f == "Main Building"){
            flt = 11.322159;
            flg = 75.934190;
        }
        if(f == "Main Canteen"){
            flt = 11.320205;
            flg = 75.931967;
        }
        if(f == "Main Gate"){
            flt = 11.322277;
            flg = 75.934163;
        }
        if(f == "Architecture Department"){
            flt = 11.322812;
            flg = 75.936791;
        }
        if(f == "Mathematics Department"){
            flt = 11.323897;
            flg = 75.938377;
        }
        if(f == "MBA Hostel"){
            flt = 11.315118;
            flg = 75.932565;
        }
        if(f == "Mega Hostel"){
            flt = 11.317799;
            flg = 75.935929;
        }
        if(f == "Mega Ladies Hostel"){
            flt = 11.316869;
            flg = 75.930825;
        }
        if(f == "Micro Canteen"){
            flt = 11.322225;
            flg = 75.934847;
        }
        if(f == "Mini Canteen"){
            flt = 11.320912;
            flg = 75.936507;
        }
        if(f == "NIT TBI"){
            flt = 11.317668;
            flg = 75.931699;
        }
        if(f == "NITC Guest House"){
            flt = 11.318192;
            flg = 75.933837;
        }
        if(f == "NITC Nursery School"){
            flt = 11.318643;
            flg = 75.931723;
        }
        if(f == "NLHC"){
            flt = 11.321917;
            flg = 75.932965;
        }
        if(f == "Auditorium"){
            flt = 11.322570;
            flg = 75.935820;
        }
        if(f == "OAT"){
            flt = 11.314549;
            flg = 75.931647;
        }
        if(f == "Parking"){
            flt = 11.321295;
            flg = 75.933431;
        }
        if(f == "PG-1 Hostel"){
            flt = 11.320245;
            flg = 75.935064
        }
        if(f == "PG-2 Hostel"){
            flt = 11.320029;
            flg = 75.935954;
        }
        if(f == "Physical Education Department"){
            flt = 11.321372;
            flg = 75.934645;
        }
        if(f == "Physics Department"){
            flt = 11.323410;
            flg = 75.938251;
        }
        if(f == "PNB ATM"){
            flt = 11.319021;
            flg = 75.933491;
        }
        if(f == "SBI ATM1"){
            flt = 11.321189;
            flg = 75.934696;
        }
        if(f == "SBI ATM2"){
            flt = 11.319582;
            flg = 75.932457;
        }
        if(f == "SMSE"){
            flt = 11.322256;
            flg = 75.936196;
        }
        if(f == "BHostel"){
            flt = 11.320662;
            flg = 75.935845;
        }
        if(f == "SSL"){
            flt = 11.322763;
            flg = 75.934186;
        }
        if(f == "TnP"){
            flt = 11.321259;
            flg = 75.935115;
        }
        if(f == "Basketball court"){
            flt = 11.321295;
            flg = 75.933431;
        }
        if(f == "Bhaskara Hall"){
            flt = 11.320967;
            flg = 75.933984;
        }
        if(f == "C Hostel"){
            flt = 11.320264;
            flg = 75.936812;
        }
        if(f == "Central circle"){
            flt = 11.321485;
            flg = 75.934098;
        }
        if(t == "AHostel"){
            tlt = 11.321740;
            tlg = 75.934109;
        }
        if(t == "Central Computer Center"){
            tlt = 11.321485;
            tlg = 75.934098;
        }
        if(t == "Central Library"){
            tlt = 11.322694;
            tlg = 75.934629
        }
        if(t == "Chemical Department"){
            tlt = 11.323614;
            tlg = 75.937532;
        }
        if(t == "Creative Zone"){
            tlt = 11.321082;
            tlg = 75.933393;
        }
        if(t == "D Hostel"){
            tlt = 11.319749;
            tlg = 75.937667;
        }
        if(t == "CSED"){
            tlt = 11.322292;
            tlg = 75.933973;
        }
        if(t == "E Hostel"){
            tlt = 11.319806;
            tlg = 75.938542;
        }
        if(t == "ECED"){
            tlt = 11.322626;
            tlg = 75.934825;
        }
        if(t == "ECLC"){
            tlt = 11.322897;
            tlg = 75.936918;
        }
        if(t == "Electrical Department"){
            tlt = 11.322863;
            tlg = 75.934562;
        }
        if(t == "Administrative Block"){
            tlt = 11.320861;
            tlg = 75.932871;
        }
        if(t == "Environmental Engineering Lab"){
            tlt = 11.323075;
            tlg = 75.935702;
        }
        if(t == "F Hostel"){
            tlt = 11.320727;
            tlg = 75.937691;
        }
        if(t == "Football Ground"){
            tlt = 11.320972;
            tlg = 75.931650;
        }
        if(t == "G Hostel"){
            tlt = 11.321555;
            tlg = 75.937003;
        }
        if(t == "Gymnasium"){
            tlt = 11.319921;
            tlg = 75.931602;
        }
        if(t == "Hostel Office"){
            tlt = 11.320510;
            tlg = 75.934398;
        }
        if(t == "International Hostel"){
            tlt = 11.319289;
            tlg = 75.936227;
        }
        if(t == "Main Building"){
            tlt = 11.322159;
            tlg = 75.934190;
        }
        if(t == "Main Canteen"){
            tlt = 11.320205;
            tlg = 75.931967;
        }
        if(t == "Main Gate"){
            tlt = 11.322277;
            tlg = 75.934163;
        }
        if(t == "Architecture Department"){
            tlt = 11.322812;
            tlg = 75.936791;
        }
        if(t == "Mathematics Department"){
            tlt = 11.323897;
            tlg = 75.938377;
        }
        if(t == "MBA Hostel"){
            tlt = 11.315118;
            tlg = 75.932565;
        }
        if(t == "Mega Hostel"){
            tlt = 11.317799;
            tlg = 75.935929;
        }
        if(t == "Mega Ladies Hostel"){
            tlt = 11.316869;
            tlg = 75.930825;
        }
        if(t == "Micro Canteen"){
            tlt = 11.322225;
            tlg = 75.934847;
        }
        if(t == "Mini Canteen"){
            tlt = 11.320912;
            tlg = 75.936507;
        }
        if(t == "NIT TBI"){
            tlt = 11.317668;
            tlg = 75.931699;
        }
        if(t == "NITC Guest House"){
            tlt = 11.318192;
            tlg = 75.933837;
        }
        if(t == "NITC Nursery School"){
            tlt = 11.318643;
            tlg = 75.931723;
        }
        if(t == "NLHC"){
            tlt = 11.321917;
            tlg = 75.932965;
        }
        if(t == "Auditorium"){
            tlt = 11.322570;
            tlg = 75.935820;
        }
        if(t == "OAT"){
            tlt = 11.314549;
            tlg = 75.931647;
        }
        if(t == "Parking"){
            tlt = 11.321295;
            tlg = 75.933431;
        }
        if(t == "PG-1 Hostel"){
            tlt = 11.320245;
            tlg = 75.935064
        }
        if(t == "PG-2 Hostel"){
            tlt = 11.320029;
            tlg = 75.935954;
        }
        if(t == "Physical Education Department"){
            tlt = 11.321372;
            tlg = 75.934645;
        }
        if(t == "Physics Department"){
            tlt = 11.323410;
            tlg = 75.938251;
        }
        if(t == "PNB ATM"){
            tlt = 11.319021;
            tlg = 75.933491;
        }
        if(t == "SBI ATM1"){
            tlt = 11.321189;
            tlg = 75.934696;
        }
        if(t == "SBI ATM2"){
            tlt = 11.319582;
            tlg = 75.932457;
        }
        if(t == "SMSE"){
            tlt = 11.322256;
            tlg = 75.936196;
        }
        if(t == "BHostel"){
            tlt = 11.320662;
            tlg = 75.935845;
        }
        if(t == "SSL"){
            tlt = 11.322763;
            tlg = 75.934186;
        }
        if(t == "TnP"){
            tlt = 11.321259;
            tlg = 75.935115;
        }
        if(t == "Basketball court"){
            tlt = 11.321295;
            tlg = 75.933431;
        }
        if(t == "Bhaskara Hall"){
            tlt = 11.320967;
            tlg = 75.933984;
        }
        if(t == "C Hostel"){
            tlt = 11.320264;
            tlg = 75.936812;
        }
        if(t == "Central circle"){
            tlt = 11.321485;
            tlg = 75.934098;
        }
    }
    




    this.state = {
      dist:0,
      dur:0,
      routeOrg:"",
      routeDest:"",
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

    this.setState({routeOrg:f});
    this.setState({routeDest:t})
    this.mapView = null;
    // console.log(this.state.lt);
  }

//   async componentDidMount(){
//     const location = await Location.getCurrentPositionAsync({});
//     const co = location.coords; 
//     this.setState({lt:co.latitude});
//     this.setState({lg:co.longitude});
//     console.log(location);
//   };
  

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
      <View style={styles.container}>
      <MapView
      provider = {PROVIDER_GOOGLE}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={styles.map}
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
              this.setState({dist:result.distance})
              this.setState({dur:result.duration})
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
      <Card style={styles.inputContainer}>
          <Text style={{fontWeight:"bold"}}>Distance : {this.state.dist} km</Text>
          <Text style={{fontWeight:"bold"}}>Duration(Vehicle) : {this.state.dur} min</Text>
            <Button color="green" title="Back" onPress={()=>{this.props.navigation.navigate('TakeMeThere')}}/>
        </Card>
      </View>
    );
  }
}


var styles = StyleSheet.create({

  container: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor:"black",
      height:"100%"
  },
    map: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      height:"100%"
    }
    ,
inputContainer: {
  width:350,
  height:130,
  maxWidth: '80%',
  fontSize:20,
 
 
}
});

export default Example;
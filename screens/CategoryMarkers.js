import React,{useState, Component} from 'react';
import {View,Text,StyleSheet, Button,Picker} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { render } from 'react-dom';
import Card from '../components/Card';


class TakeMeThere extends Component {
    constructor(props){
        super(props);        

    this.state = {
        c : "AtM",
        ATM:[
            {
            latitude:11.319021 ,
            longitude:75.933491
          },{
            latitude:11.321189, 
            longitude:75.934696  
          },{
            latitude:11.319582, 
            longitude:75.932457
          }],
        Department:[
            {
            latitude:11.322812, 
            longitude:75.936791
            },{
            latitude:11.323614,
            longitude:75.937532
            },{
            latitude:11.322292,
            longitude: 75.933973
            },{
            latitude:11.321259, 
            longitude:75.935115
            },{
            latitude:11.322626,
            longitude:75.934825
            },{
            latitude:11.322863,
            longitude:75.934562
            },{
            latitude:11.323897,
            longitude:75.938377
            },{
            latitude:11.321372, 
            longitude:75.934645
            },{
            latitude:11.323410, 
            longitude:75.938251
            }],
        EducationalBlock:[
            {
            latitude:11.322694,
            longitude:75.934629
            },{
            latitude:11.322897, 
            longitude:75.936918
            },{
            latitude:11.322159,
            longitude:75.934190
            },{
            latitude:11.321960,
            longitude:75.932999
            },{
            latitude:11.322256,
            longitude: 75.936196
            },{
            latitude:11.314549,  
            longitude:75.931647
            }],
        EventSpot:[
            {
            latitude:11.322570,
            longitude:75.935820
            },{
            latitude:11.320967, 
            longitude:75.933984
            },{
            latitude:11.321082, 
            longitude:75.933393
            },{
            latitude:11.314549,   
            longitude:75.931647
            }
        ],
        Food:[
            {
            latitude:11.320205,
            longitude:75.931967
            },{
            latitude:11.322225 ,   
            longitude:75.934847
            },{
            latitude:11.320743,    
            longitude:75.936526
            }
        ],
        Laboratory:[
            {
            latitude:11.320967,
            longitude:75.933984
            },{
            latitude:11.323075,    
            longitude:75.935702
            },{
            latitude:11.322763,    
            longitude: 75.934186
            }
        ],
        Misc:[
            {
            latitude:11.321485,  
            longitude:75.934098
            },{
            latitude:11.322277, 
            longitude:75.934163
            },{
            latitude:11.318192 , 
            longitude:75.933837
            },{
            latitude:11.318643, 
            longitude:75.931723
            },{
            latitude:11.321295,   
            longitude:75.933431
            }
        ],
        Sports:[
            {
            latitude:11.321295,
            longitude: 75.933431
            },{
            latitude:11.320972,     
            longitude:75.931650
            },{
            latitude:11.319921,    
            longitude:75.931602
            }
        ],
        WorkArea:[
            {
            latitude:11.320861, 
            longitude:75.932871
            },{
            latitude:11.320510 ,     
            longitude:75.934398
            },{
            latitude:11.320607,     
            longitude:75.932312
            }
        ],
        Hostel: [
          {
            latitude: 11.320714,
            longitude: 75.934933,
          },{
              latitude: 11.319749,
              longitude: 75.937667
          },{
              latitude:11.319806 ,
              longitude:75.938542
          },{
              latitude:11.320727,
              longitude:75.937691
          },{
              latitude:11.321555 ,
              longitude:75.937003
          },{
              latitude:11.319289,
              longitude:75.936227
          },{
              latitude:11.315118,
              longitude:75.932565
          },{
              latitude:11.317799,
              longitude:75.935929
          },{
              latitude:11.316869,
              longitude:75.930825
          },{
              latitude:11.320245,
              longitude:75.935064
          },{
              latitude:11.320029,
              longitude:75.935954
          },{
                latitude:11.320662,
                longitude:75.935845
          },{
                latitude:11.320264,
                longitude:75.936812
          }
        ],
      };
    }

    
      
    render(){
        var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
        var op = this.props.navigation.state.params.cat;
        var op1=0,op2=0,op3=0,op4=0,op5=0,op6=0,op7=0,op8=0,op9=0,op10=0;
        if(op == "ATM"){
            op1=1;op2=0;op3=0;op4=0;op5=0;op6=0;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Department"){
            op1=0;op2=1;op3=0;op4=0;op5=0;op6=0;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Educational Block"){
            op1=0;op2=0;op3=1;op4=0;op5=0;op6=0;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Event Spot"){
            op1=0;op2=0;op3=0;op4=1;op5=0;op6=0;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Food"){
            op1=0;op2=0;op3=0;op4=0;op5=1;op6=0;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Laboratory"){
            op1=0;op2=0;op3=0;op4=0;op5=0;op6=1;op7=0;op8=0;op9=0;op10=0;
        }
        if(op == "Misc"){
            op1=0;op2=0;op3=0;op4=0;op5=0;op6=0;op7=1;op8=0;op9=0;op10=0;
        }
        if(op == "Sports"){
            op1=0;op2=0;op3=0;op4=0;op5=0;op6=0;op7=0;op8=1;op9=0;op10=0;
        }
        if(op == "Work Area"){
            op1=0;op2=0;op3=0;op4=0;op5=0;op6=0;op7=0;op8=0;op9=1;op10=0;
        }
        if(op == "Hostel"){
            op1=0;op2=0;op3=0;op4=0;op5=0;op6=0;op7=0;op8=0;op9=0;op10=10;
        }

    return(
        <View style={styles.container}>
        <MapView
            provider = {PROVIDER_GOOGLE}
            style={styles.map}
        region={{
            latitude: 11.322159,
            longitude: 75.934190,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
          >
          {this.state.ATM.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="ATM" pinColor="green" style={{opacity:op1}}/>
          )}
          {this.state.Department.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="Department" pinColor="red" style={{opacity:op2}}/>
          )}
          {this.state.EducationalBlock.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="EducationalBlock" pinColor="blue" style={{opacity:op3}}/>
          )}
          {this.state.EventSpot.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="EventSpot" pinColor="yellow" style={{opacity:op4}}/>
          )}    
          {this.state.Food.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="food" pinColor="orange" style={{opacity:op5}}/>
          )}
          {this.state.Laboratory.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="Laboratory" pinColor="white" style={{opacity:op6}}/>
          )}
          {this.state.Misc.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="Misc" pinColor="violet" style={{opacity:op7}}/>
          )}
          {this.state.Sports.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="Sports" pinColor="brown" style={{opacity:op8}}/>
          )}
          {this.state.WorkArea.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="WorkArea" pinColor="magenta" style={{opacity:op9}}/>
          )}
          {this.state.Hostel.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title="Hostel" pinColor="pink" style={{opacity:op10}}/>
          )}
          </MapView>
          <Card style={styles.inputContainer}>
            <Button color="green" title="Back" onPress={()=>{this.props.navigation.navigate('ExploreCampus')}}/>
        </Card>
      </View>
    )
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
    height:90,
    maxWidth: '80%',
    fontSize:20,
   
   
}
  });

export default TakeMeThere;
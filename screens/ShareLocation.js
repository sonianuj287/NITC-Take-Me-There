import React, { Component } from 'react';
import {
    View,
  Share,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';

Geocoder.init("AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo");




export default class ShareLocation extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            add: "",
            loc: null
        };  
    }
    async componentDidMount(){
        const location = await Location.getCurrentPositionAsync({});
        this.setState({loc:location.coords});
        const response = await Geocoder.from(location.coords.latitude,location.coords.longitude);
        const address = response.results[0].formatted_address;
        
        this.setState({add:address});
        
      };





  render(){
    const shareOptions = {
        title: 'Location Sharing',
        message: 'Current location of sender:  "'+this.state.add+'" .', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'Link to download Application',
        subject: 'NITC Take-Me-There Location Sharing'
      };
    const onSharePress = () => Share.share(shareOptions);
    return(
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
      <Text>                {this.state.add}</Text>
      <Text></Text>
      <Text></Text>
      <Button title="Click to share current location" onPress={onSharePress}/>
      </View>
    );
  }
}

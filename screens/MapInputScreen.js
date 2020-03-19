import React,{useState,  Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,TextInput,Button,Picker } from 'react-native';
import {Card} from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

const MapInputScreen = props =>{
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    
    // console.log(from);
    // console.log(to);
    return (
      <View style={styles.container}>
            <Card>
                <Text>from</Text>
                <Picker onValueChange={text => setFrom(text)} selectedValue = {from}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="Main Building NIT Calicut" value="Main Building NIT Calicut" />  
                    <Picker.Item label="NLHC" value="NLHC" />  
                    <Picker.Item label="ELHC" value="ELHC" />
                    <Picker.Item label="Bhaskara Hall,NITC" value="Bhaskara Hall,NITC" />
                    <Picker.Item label="Auditorium NIT" value="Auditorium NIT" /> 
                    <Picker.Item label="NITC Main Canteen" value="NITC Main Canteen" />
                </Picker>
                <Text>to</Text>
                <Picker onValueChange={text => setTo(text)} selectedValue = {to}>  
                    <Picker.Item label="Select ..." value="" />
                    <Picker.Item label="Main Building NIT Calicut" value="Main Building NIT Calicut" />  
                    <Picker.Item label="NLHC" value="NLHC" />  
                    <Picker.Item label="ELHC" value="ELHC" />
                    <Picker.Item label="Bhaskara Hall,NITC" value="Bhaskara Hall,NITC" />
                    <Picker.Item label="Auditorium NIT" value="Auditorium NIT" /> 
                    <Picker.Item label="NITC Main Canteen" value="NITC Main Canteen" />  
                </Picker>
                
                <Button title = "Take Me There" onPress={() =>{
                         props.navigation.navigate('map',{from,to});
                        } } />
                <Button title='current location'/>
            </Card>
            <View style={{flexDirection: 'row',padding:10,paddingLeft:60}}>
                <Button title='saved location'/>
                <Button title='explore campus'/>
                <Button title = "bus schedule" onPress={() =>{
                         props.navigation.navigate({routeName:'bus'})
                        } }/>
            </View>            
      </View>
    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default MapInputScreen;






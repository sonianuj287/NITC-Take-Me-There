import React,{useState,  Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,TextInput,Button,Picker } from 'react-native';
import {Card} from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

const MapInputScreen = props =>{
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [travel,setTravel] = useState('');

    const[l1,setL1] = useState('#');
    const[l2,setL2] = useState('#');
    const[l3,setL3] = useState('#');
    const[l4,setL4] = useState('#');
    const[l5,setL5] = useState('#');
    const[l6,setL6] = useState('#');

    async function Location1() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc1.json');
        let responseJson = await response.json();
        setL1(responseJson.MainBuilding.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
    async function Location2() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc2.json');
        let responseJson = await response.json();
        setL2(responseJson.NLHC.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
    async function Location3() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc3.json');
        let responseJson = await response.json();
        setL3(responseJson.Bhaskara.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
    async function Location4() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc4.json');
        let responseJson = await response.json();
        setL4(responseJson.ELHC.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
    async function Location5() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc5.json');
        let responseJson = await response.json();
        setL5(responseJson.Auditorium.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
    async function Location6() {
      try {
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc6.json');
        let responseJson = await response.json();
        setL6(responseJson.MainCanteen.split(","));
        return responseJson.user;
      } catch (error) {
        console.error(error);
      }
    }
   
    Location1();
    Location2();
    Location3();
    Location4();
    Location5();
    Location6();

    return (
      <View style={styles.container} >
            <Card>
                <Text>from</Text>
                <Picker onValueChange={text => setFrom(text)} selectedValue = {from} onTouchStart={Location1()}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="Current Location" value="Current Location" />
                    <Picker.Item label={l1[0]} value={l1[0]} />  
                    <Picker.Item label={l2[0]} value={l2[0]} />  
                    <Picker.Item label={l3[0]} value={l3[0]} />
                    <Picker.Item label={l4[0]} value={l4[0]} />
                    <Picker.Item label={l5[0]} value={l5[0]} /> 
                    <Picker.Item label={l6[0]} value={l6[0]} />
                </Picker>
                <Text>to</Text>
                <Picker onValueChange={text => setTo(text)} selectedValue = {to}>  
                    <Picker.Item label="Select ..." value="" />
                    <Picker.Item label={l1[0]} value={l1[0]} />  
                    <Picker.Item label={l2[0]} value={l2[0]} />  
                    <Picker.Item label={l3[0]} value={l3[0]} />
                    <Picker.Item label={l4[0]} value={l4[0]} />
                    <Picker.Item label={l5[0]} value={l5[0]} /> 
                    <Picker.Item label={l6[0]} value={l6[0]} />  
                </Picker>
                <Text>Choose Travel Mode</Text>
                <Picker onValueChange={text => setTravel(text)} selectedValue = {travel}>  
                    <Picker.Item label="Select ..." value="" />
                    <Picker.Item label="Vehicle" value="Vehicle" />  
                    <Picker.Item label="Walk" value="Walk" />   
                </Picker>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button title = "Take Me There" onPress={() =>{
                         props.navigation.navigate('map',{from,to,travel});
                        } } />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button title='current location'/>
            </Card>
            <View style={{flexDirection: 'row',padding:10,paddingLeft:60}}>
                <Button title='saved location'/>
                <Text>   </Text>
                <Button title='explore campus'/>
                <Text>   </Text>
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


import React,{useState,useEffect,  Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TextInput,Button,Picker,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from '../components/Card';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import {Ionicons,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

Geocoder.init("AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo");

const MapInputScreen = props =>{  
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [travel,setTravel] = useState('');
    const[Places,setPlaces]=useState();
    const[add,setAdd] = useState();
    const[clatlng,setClatlng] = useState();

    
    async function wait(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }


  async function currentlocation(){
      const location = await Location.getCurrentPositionAsync({});
      const co = location.coords;
      setClatlng(co.latitude+","+co.longitude);
      const response = await Geocoder.from(location.coords.latitude,location.coords.longitude);
      const address = response.results[0].formatted_address;
      setAdd(address);
    }






    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.value.toUpperCase();
        const bandB = b.value.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }



    async function retrieve()
    {
        try {
            let response = await fetch('https://fir-test-4dae1.firebaseio.com/Locations.json');
            let res = await response.json();

           var temp=[];
          for (let i = 0; i < res.length; ++i) {
               str=res[i].split(",")[0];
                //console.log(str);
               temp.push({value:str});
          }

            console.log(temp.sort(compare));
            setPlaces(temp);

            return res.user;
          } 
          catch (error) {
            console.error(error);
          }

    }

    let data2 = [{
      value: "Vehicle"
    },{
      value: "Walk"
    }]



    const To = props.navigation.getParam('to');
    console.log(To);

    let data3 = [{
      value: props.navigation.getParam('to')
    }]


    const[test,setTest] = useState('test');
    const[cl,setCl] = useState(0);




    currentlocation();


    return (
      <View style={styles.container} onLayout={()=>{retrieve()}}>
        <View style={{backgroundColor:"black", height:"40%"}}></View>
            <Card style={styles.inputContainer}>
              <View style={{flexDirection:"row",justifyContent:"space-around"}}>

                <View style={{width:"90%",backgroundColor:cl==1?"grey":"white"}}>
                  
                      <Dropdown style={{color:"green"}} label="FROM" onChangeText={text => setFrom(text)}
                            data={Places} disabled={cl==1}
                        />
                        </View>
                        <View style={{height:"20%",marginTop:"6%"}} >
                        
                        {/* <Button title='c' onPress={()=>{setFrom(clatlng),cl==1?setCl(0):setCl(1)}} color={cl==0?"black":"green"}/> */}
                        <TouchableOpacity>
                        <Ionicons name="md-locate" size={32} color={cl==0?"black":"green"} onPress={()=>{setFrom(clatlng),cl==1?setCl(0):setCl(1)}}/>
                        </TouchableOpacity>
                        </View>
            </View>
            <Text style={{color:"red",opacity:cl}}>*You Opted for Current Location, Dropdown is disabled</Text>
                  <Dropdown style={{color:"green"}} label='TO' onChangeText={text => setTo(text)}
                            data={To&&test?data3:Places}/>
                <Dropdown style={{color:"green"}} label='TRAVEL MODE' onChangeText={text => setTravel(text)}
                            data={data2}
                        />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button color="green" title = "Take Me There" onPress={() =>{
                         props.navigation.navigate('Map',{from,to,travel});
                        } } disabled={!from} disabled={!to} disabled={!travel} />
                <Text></Text>
                <Button color="green" title = "Clear" onPress={() =>{setTest("")} } />
                <Text></Text>
            </Card>           
      </View>
    );

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
    backgroundColor:"black",
    height:hp("100%"),
},
    inputContainer: {
      width:wp("80%"),
      height:hp("45%"),
      fontSize:20,
      marginBottom:"70%"     
  }
});
export default MapInputScreen;
import React,{Component,useState} from 'react';
import {Platform,Text,View,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const CurrentLocation = () => {
    const[loc,setLoc] = useState('');

    async function getLocationAsync(){

        let location = await Location.getCurrentPositionAsync({});
        setLoc(location.coords);
    }

    getLocationAsync();
    return(
        <View style={styles.container}>
          <Text style={styles.paragraph}>{loc.latitude}</Text>
          <Text style={styles.paragraph}>{loc.longitude}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#73728a',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default CurrentLocation;
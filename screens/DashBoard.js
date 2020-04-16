import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from '../components/Card';

const DashBoard = props => {
  return (
      
    <View style = {styles.container}>
            <Card style={styles.inputContainer}>
            <View style={{height:hp("10%")}}></View>
                <Button title="Edit Bus Schedule"  onPress={()=>{props.navigation.navigate('ManageBusSchedule')}}  color = "green" />
                <View style={{height:hp("12%")}}></View>
                <Button title="Edit Path"   color = "green" onPress={()=>{props.navigation.navigate('ManagePath')}}/>
            </Card>
            
            <Card style={styles.inputContainer1}>
        <Button color='red' title="Logout" onPress={() =>{
                            props.navigation.navigate({routeName:'Login'})
                        } } />
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
    height:hp("110%"),
},
    inputContainer: {
      width:wp("80%"),
      height:hp("40%"),
      fontSize:20,
      marginBottom:"30%"     
  },
  inputContainer1: {
    width:wp("70%"),
    height:hp("25%"),
    fontSize:20,
   
   
}
});
export default DashBoard;
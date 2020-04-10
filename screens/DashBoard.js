import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';

import Card from '../components/Card';

const DashBoard = props => {
  return (
      
    <View style = {styles.container}>
            <Card style={styles.inputContainer}>
            <View style={{height:"25%"}}></View>
                <Button title="Edit Bus Schedule"  onPress={()=>{props.navigation.navigate('editbus')}}  color = "green" />
                <View style={{height:"35%"}}></View>
                <Button title="Edit Path"   color = "green" onPress={()=>{props.navigation.navigate('editpath')}}/>
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
    height:"100%",
},
    input:{
        borderBottomColor:'black',
        borderWidth:1,
        width:240,
        height:33,
        padding:10
    },
    inputContainer: {
      width:350,
      height:300,
      maxWidth: '90%',
      fontSize:20,
      marginBottom:"30%"     
  },
  inputContainer1: {
    width:350,
    height:110,
    maxWidth: '80%',
    fontSize:20,
   
   
}
});
export default DashBoard;
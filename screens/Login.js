import React, { useState } from 'react';
import {View,Text, StyleSheet, Button,TextInput,Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Card from '../components/Card';
import Colors from '../Constants/Color';
import Header from '../components/Header';


const Login = props => {
    const[mail,setMail] = useState('');
    const[pass,setPass] = useState('');

    const showAlert = () => {  
        Alert.alert(  
            'Wrong Login email or password',
            'please enter a valid one',              
            [   
                {text: 'OK'} 
            ]  
        );  
    }

    async function select() {
        try {
          let response = await fetch('https://fir-test-4dae1.firebaseio.com/user/-M2anbN5BgeswQrSs30P.json');
          let responseJson = await response.json();
        // email = responseJson.email;
        // password = responseJson.password;
        if(mail == responseJson.email && pass == responseJson.password){
            props.navigation.navigate({routeName:'DashBoard'})
        }
        else{
            showAlert();
        }
            
          return responseJson.user;
        } catch (error) {
          console.error(error);
        }
      }


    return ( 
    <View style={styles.container}>
            <Card style={styles.inputContainer}>
               
                <Text style = {{fontSize:40,fontWeight:"bold"}}>Mail id</Text> 
                <TextInput style={{height:40,fontSize:20}} placeholder="Enter mail id.." onChangeText={text => setMail(text)} />
                <Text style = {{fontSize:40,fontWeight:"bold"}} >Password</Text>
                <TextInput style={{height:40,fontSize:20}} placeholder="Enter password.." onChangeText={(text)=>{setPass(text)}} secureTextEntry={true}/>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button color="green" title = "Login" onPress={()=>{select()}}/>
            </Card>
            <Card style={styles.inputContainer1}>
                <Button color="green" title = "Back" onPress={()=>{props.navigation.navigate('Welcome')}}/>
            </Card>
    </View>
    );
};

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

export default Login;
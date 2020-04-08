import React, { useState } from 'react';
import {View,Text, StyleSheet, Button,TextInput,Alert } from 'react-native';

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
                {text: 'OK'},  
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
    <View>
        <Header title="Login" />
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
               
                <Text style = {{fontSize:40}}>Mail id</Text> 
                <TextInput style={styles.input } placeholder="mail id" onChangeText={text => setMail(text)} />
                <Text style = {{fontSize:40}} >Password</Text>
                <TextInput style={styles.input } placeholder="password" onChangeText={(text)=>{setPass(text)}} secureTextEntry={true}/>
               
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "Login" onPress={()=>{select()}}/>
                    </View>
                </View>
            </Card>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screen:{
       
        padding: 10,
        alignItems: 'center'
    },
    input:{
        borderBottomColor:'black',
        borderWidth:1,
        width:'100%',
        height:50,
       marginVertical:10,
        fontSize:20,
        padding:10
    },
    title:{
        fontSize:50,
        marginVertical: 10,
    },
    inputContainer: {
        width:300,
        height:400,
        maxWidth: '80%',
        fontSize:20,
       
       
    },
    buttonContainer: {
        
        width:'100%',
        justifyContent: 'space-around',
        paddingHorizontal:15,
        paddingBottom:10,
        alignItems:'center'
       
    },
    button:{
        width:100,
        color:'black',
        justifyContent:'space-around',
        paddingTop:30
    
    }
});

export default Login;

import React from 'react';
import {View,Text, StyleSheet, Button,TextInput } from 'react-native';

import Card from '../components/Card';
import Colors from '../Constants/Color';
import Header from '../components/Header';

const Login = props => {
    return ( 
    <View>
        <Header title="Login" />
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
               
                <Text style = {{fontSize:40}}>Mail id</Text> 
                <TextInput style={styles.input } placeholder="mail id" />
                <Text style = {{fontSize:40}} >Password</Text>
                <TextInput style={styles.input } placeholder="password" />
               
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "Login" onPress={() =>{
                            props.navigation.navigate({routeName:'DashBoard'})
                        } }/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "Register" onPress={() => {
                            props.navigation.navigate({routeName:'Register'}); 
                            }}/>
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
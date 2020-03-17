import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,Button,KeyboardType} from 'react-native';

import Card from '../components/Card';
import Colors from '../Constants/Color';
import Header from '../components/Header';



const submit = (name,mailId,contact,password) =>{

    fetch('https://fir-test-4dae1.firebaseio.com/user.json',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: mailId,
            contact: contact,
            password: password
        })
    })
};


async function select() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/user.json');
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

// const select = () =>{
    
//         fetch('https://iou-tracker-c3a72.firebaseio.com/user.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const Register = props => {
    const [name,setName] = useState('');
    const [mailId,setMailId] = useState('');
    const [contact,setContact] = useState('');
    const [password,setPassword] = useState('');
    
    return (
        <View>
            <Header title="Register" />
            <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <Text style = {{fontSize:20}}>Name</Text> 
                <TextInput 
                    style={styles.input } 
                    placeholder="Name" 
                    value={name} 
                    onChangeText={text => setName(text)} 
                />
               
                
                <Text style = {{fontSize:20}} >Mail Id</Text>
                <TextInput 
                    style={styles.input }
                    placeholder="mail id" 
                    value={mailId} 
                    onChangeText={text => setMailId(text)}
                /> 
                <Text style = {{fontSize:20}} >Contact</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Contact" 
                    
                   onChangeText={text => setContact(text)}
                   value={contact}
                   />
                <Text style = {{fontSize:20}} >Password</Text>
                <TextInput 
                    style={styles.input } 
                    placeholder="password" 
                    value={password} 
                    onChangeText={text => setPassword(text)}
                />
                
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "Register" onPress={() =>{
                            submit(name,mailId,contact,password)
                        } }/>
                    </View>
                    <View style={styles.button}>
                        <Button color='green' title = "SignUp" onPress={() => {
                            props.navigation.navigate({routeName:'Login'}); 
                        }}/>
                    </View>
                    <View>
                    <Button title = "GEt" onPress= {() => {
                        select()
                    } } />
                    </View>
                </View>
            </Card>
        </View>
    </View>
    );
};

styles = StyleSheet.create({
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
        width:400,
        height:600,
        maxWidth: '90%',
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

export default Register;
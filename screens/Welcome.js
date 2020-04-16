import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Picker,TextInput,Button,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Welcome = props =>{
    const[cat,setCat] = useState('');

    return(
        <View style={{backgroundColor:"black",height:hp("110%"),width:wp("100%")}}>
            <View style={{height:"5%"}}></View>
                <View style={{flexDirection:"row",paddingLeft:"3%"}}>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}>
                      <Text style={{color:"green"}}>Admin Login</Text>
                  </TouchableOpacity >
                  <Text style={{color:"green"}}>  |  </Text>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('about')}}>
                      <Text style={{color:"green"}}>About</Text>
                  </TouchableOpacity>
                  </View>
            <View style={{alignContent:"center",justifyContent:"center",flex:1,paddingLeft:"28%"}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('TakeMeThere')}}>
                  <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/icon.png')} style = {{ width: 200, height: 200 }} />
                <Text style={{color:"green",paddingLeft:"20%",paddingTop:"10%"}}>Click to Enter</Text>
            </TouchableOpacity>
                  </View>

        </View>
    )
}

export default Welcome;





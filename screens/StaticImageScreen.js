import React,{Component,useState} from 'react';
import {View,Image,Text,Button} from 'react-native';

const StaticImageScreen = props =>{
    const [loc,setLOC] = useState('');

    const f = props.navigation.getParam('f');
    const t = props.navigation.getParam('t');
    return(
        <View style={{alignContent:"stretch"}}>

      <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/test.jpg')} style = {{ width: 500, height: 600 }} />
      {/* <Button title = "Take Me There" onPress={() =>{
                         props.navigation.navigate('mapInput');
                        } } /> */}
                        <Button title="back" onPress={()=>{props.navigation.navigate('mapInput')}}/>
      </View>
    );

};

export default StaticImageScreen;
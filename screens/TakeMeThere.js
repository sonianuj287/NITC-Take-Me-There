import React, { useState } from 'react';
import { FlatList, View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Dimensions,Button } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {Ionicons,FontAwesome5,MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const BusSchedule = props => {
  const[deg,setDeg] = useState('0deg');
return (
        <View style={styles.container}>
          <View style={{height:"10%"}} ></View>
          
          <View style={{justifyContent:"center",alignContent:"center",flex:1,paddingBottom:"32%"}}>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={290}
                       imageHeight={300}>
                <Image style={{width:290, height:300,transform:[{rotate:deg}]}}
                       source={require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/bus.jpg')}/>
            </ImageZoom>

            {/* <Button title = "rotate" onPress={()=>{deg == '0deg'?setDeg("90deg"):setDeg("0deg")}}/> */}
            <TouchableOpacity>
                        <FontAwesome name="rotate-right" size={32} color="white" onPress={()=>{deg == '0deg'?setDeg("90deg"):setDeg("0deg")}}/>
            </TouchableOpacity>
          </View>

        </View>
    );
};



const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',backgroundColor:"black" },
    head: { height: 20, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default BusSchedule;

// ,transform: [{ rotate: '90deg'}]

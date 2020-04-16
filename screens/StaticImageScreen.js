import React,{Component,useState} from 'react';
import {View,Image,Text,Button,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import ImageZoom from 'react-native-image-pan-zoom';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons,FontAwesome5,MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const StaticImageScreen = props =>{
    const [loc,setLOC] = useState('');
    const[deg,setDeg] = useState('0deg');

    const f = props.navigation.getParam('f');
    const t = props.navigation.getParam('t');
    let op1 = 0,op2 = 0,op3 = 0,op4 = 0,op5 = 0,op6 = 0,op7 = 0,op8 = 0;
    if((f == "Central Library" && t == "ELHC")||(f == "ELHC" && t == "Central Library")){
        op1 = 210;op2 = 0;op3 = 0;op4 = 0;op5 = 0;op6 = 0;op7 = 0;op8 = 0;
    }
    if((f == "Central Library" && t == "SSL")||(f == "SSL" && t == "Central Library")){
      op1 = 0;op2 = 210;op3 = 0;op4 = 0;op5 = 0;op6 = 0;op7 = 0;op8 = 0;
    }
    if((f == "Main Building" && t == "ELHC")||(f == "ELHC" && t == "Main Building")){
      op1 = 0;op2 = 0;op3 = 210;op4 = 0;op5 = 0;op6 = 0;op7 = 0;op8 = 0;
    }
    if((f == "Main Building" && t == "Central Library")||(f == "Central Library" && t == "Main Building")){
      op1 = 0;op2 = 0;op3 = 0;op4 = 210;op5 = 0;op6 = 0;op7 = 0;op8 = 0;
    }
    if((f == "Main Building" && t == "Micro Canteen")||(f == "Micro Canteen" && t == "Main Building")){
      op1 = 0;op2 = 0;op3 = 0;op4 = 0;op5 = 210;op6 = 0;op7 = 0;op8 = 0;
    }
    if((f == "Main Building" && t == "SSL")||(f == "SSL" && t == "Main Building")){
      op1 = 0;op2 = 0;op3 = 0;op4 = 0;op5 = 0;op6 = 210;op7 = 0;op8 = 0;
    }
    if((f == "Micro Canteen" && t == "ELHC")||(f == "ELHC" && t == "Micro Canteen")){
      op1 = 0;op2 = 0;op3 = 0;op4 = 0;op5 = 0;op6 = 0;op7 = 210;op8 = 0;
    }
    if((f == "Micro Canteen" && t == "SSL")||(f == "SSL" && t == "Micro Canteen")){
      op1 = 0;op2 = 0;op3 = 0;op4 = 0;op5 = 0;op6 = 0;op7 = 0;op8 = 210;
    }
    return(
      <View style={styles.container}>


      <ImageZoom cropWidth={Dimensions.get('window').width}
                   cropHeight={Dimensions.get('window').height}
                   imageWidth={390}
                   imageHeight={210}>
            <Image style={{width:390, height:op1, opacity:op1,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/Library-ELHC.jpg")}/>
            <Image style={{width:390, height:op2, opacity:op2,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/Library-SSL.jpg")}/>
            <Image style={{width:390, height:op3, opacity:op3,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/MB-ELHC.jpg")}/>
            <Image style={{marginLeft:"35%", width:100, height:200, opacity:210,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/MB-Library(1).jpg")}/>
            <Image style={{width:390, height:op5, opacity:op5,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/MB-Micro.jpg")}/>
            <Image style={{width:390, height:op6, opacity:op6,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/MB-SSL.jpg")}/>
            <Image style={{width:390, height:op7, opacity:op7,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/Micro-ELHC.jpg")}/>        
            <Image style={{width:390, height:op8, opacity:op8,transform:[{rotate:deg}]}}
                   source={require("D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/MICRO-SSL.jpg")}/>
        </ImageZoom>

        
        <Card style={styles.inputContainer}>
        <Text></Text>
            <Button color="green" title="Back" onPress={()=>{props.navigation.navigate('NITC_TakeMeThere')}}/>
        
        </Card>
        
      </View>
    );

};


var styles = StyleSheet.create({

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
    backgroundColor:"black"
},

  inputContainer: {
    width:500,
    height:200,
    maxWidth: '80%',
    fontSize:20,
}
});

export default StaticImageScreen;

// style={{alignContent:"stretch"}}
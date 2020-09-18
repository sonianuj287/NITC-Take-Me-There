import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Picker,TextInput,Button,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


const Welcome = props =>{
    const[cat,setCat] = useState('');
    const[op1,setOp1] = useState(0);
    const[op2,setOp2] = useState(0);


    const swapper = () => {
        if(cat == "User"){
            setOp2(100);
            setOp1(0);
        }
        if(cat == "Admin"){
            setOp1(100);
            setOp2(0);
        }
    }
    
    let data = [{
        value: 'User',
      },{
        value: 'Admin',
      }];

    return(
        <View style={{backgroundColor:"black",height:"100%",width:"100%"}}>
            <View style={{alignContent:"center",justifyContent:"center",flex:1,paddingLeft:"28%"}}>
                  <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/icon.png')} style = {{ width: 200, height: 200 }} />
                  </View>

                  <View style={{paddingLeft:"30%",flexDirection:"row",width:6000}}>
                  <Dropdown style={{backgroundColor:"white",paddingLeft:"3%",height:"100%",width:"50%"}} onChangeText={text=>setCat(text)} onPress={()=>swapper()}
                            label='Favorite Fruit'
                            data={data}
                        />
                        {/* <Button title="press" onPress={()=>swapper()} style={{height:"10%",width:"50%",backgroundColor:"black",color:"black"}}/> */}
                        <TouchableOpacity onPress={()=>swapper()} style={{justifyContent:"center",alignContent:"center",flex:1}}>
                            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Switch</Text>
                        </TouchableOpacity>
                 </View>
                 <View style={{width:"84%",paddingLeft:"20%",opacity:op1,height:op1}}>
                     <TextInput placeholder="enter email" style={{color:"white"}}/>
                     <TextInput placeholder="enter password" style={{color:"white"}} secureTextEntry={true}/>
                     <Button title="login"/>
                 </View>

                 <View style={{width:"84%",paddingLeft:"20%",opacity:op2,height:op2}}>
                     <Button title="sign in with google"/>
                 </View>
            <View style={{backgroundColor:"black",height:"10%"}}>
            </View>
        </View>
    )
}

export default Welcome;
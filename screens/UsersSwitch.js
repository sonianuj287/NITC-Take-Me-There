import React from 'react';
import { View,Text,Button,StyleSheet,Image } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../Constants/Color';

const UsersSwitch = props => {
    return ( 
    <View>
        <Header title="Users Switch" />
        <Text></Text>
        <View style={{flexDirection:'row'}}>
            <Text>                                     </Text>
        <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/logo1.jpg')} style = {{ width: 210, height: 180,borderRadius: 20 }} />
        </View>
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
               
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "ADMIN" onPress={() =>{
                            props.navigation.navigate({routeName:'Login'})
                        } }/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Colors.primary} title = "USER" onPress={() => {
                            props.navigation.navigate({routeName:'mapInput'}); 
                            }}/>
                    </View>
                    <View style={styles.button}>
                        {/* <Button color={Colors.primary} title = "about" onPress={()=>{props.navigation.navigate('about')}}/> */}
                        
                    </View>
                </View>
            </Card>
            <Text></Text>
            <Button color={Colors.primary} title = "about" onPress={()=>{props.navigation.navigate('about')}}/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screen:{
       
        paddingTop: 50,
        alignItems: 'center'
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
        paddingTop:100
    
    }
});

export default UsersSwitch;
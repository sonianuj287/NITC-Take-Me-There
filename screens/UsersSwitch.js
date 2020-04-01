import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../Constants/Color';

const UsersSwitch = props => {
    return ( 
    <View>
        <Header title="Users Switch" />
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
                        <Button color={Colors.primary} title = "about" onPress={()=>{props.navigation.navigate('about')}}/>
                    </View>
                </View>
            </Card>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screen:{
       
        paddingTop: 140,
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
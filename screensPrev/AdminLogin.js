import React from 'react';
import { View,Text,Button,StyleSheet, TextInput } from 'react-native';

const adminLogin = props => {
    return (
        <View style={styles.screen}>
            <Text>admin login screen</Text>
            <View>
                <Text>Username</Text>
                <TextInput placeholder='enter username'></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder='enter password'secureTextEntry={true}></TextInput>
            </View>
            <Button title='login'/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});

export default adminLogin;
import React from 'react';
import { View,Text,Button,StyleSheet,TextInput } from 'react-native';
import {Card} from 'react-native-elements';

const mapScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>map screen</Text>
            <Card>
                <Text>from</Text>
                <TextInput placeholder='entere location'></TextInput>
                <Text>to</Text>
                <TextInput placeholder='entere location'></TextInput>
                <Button title='current location'/>
            </Card>
            <View style={{flexDirection: 'row',padding:10,paddingLeft:60}}>
                <Button title='saved location'/>
                <Button title='explore campus'/>
                <Button title = "bus schedule" onPress={() =>{
                            props.navigation.navigate({routeName:'bus'})
                        } }/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
    }
});

export default mapScreen;
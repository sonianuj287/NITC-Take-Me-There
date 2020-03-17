import React from 'react';
import { View,Text,Button,StyleSheet,TextInput } from 'react-native';
import {Card} from 'react-native-elements';

const BusSchedule = props => {
    return (
        <View style={styles.screen}>
            <Text>No Buses data available now</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
    }
});

export default BusSchedule;
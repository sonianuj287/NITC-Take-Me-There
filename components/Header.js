import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../Constants/Color';
const Header = props =>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {
                    props.title
                }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        padding :10,
        height:50,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerTitle:{
        color: 'white',
        fontSize: 18,

    }
});
export default Header;
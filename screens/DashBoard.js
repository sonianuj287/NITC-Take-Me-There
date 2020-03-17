import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';

import Card from '../components/Card';
import Header from '../components/Header';

const DashBoard = props => {
  return (
    <View>
        <Header title="DashBoard" />
        
      <View style={styles.screen}>
            <Card style={{height:'95%' ,marginBottom:20}}>
            <View>
                <View style={styles.butt}>
                <Button title="Edit Bus Schedule"    color = "#12356e" />
                </View>
                <View style={styles.butt}>
                <Button title="Edit Path"   color = "#12356e" /></View>
            </View>
            </Card>
            <View style = {styles.button} >
        <Button color='red' title="Logout" onPress={() =>{
                            props.navigation.navigate({routeName:'Login'})
                        } } />
        </View>
        </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
   paddingVertical:'17%',
   paddingHorizontal:'8%',
    
  },
  butt:{
      padding:5,
      margin:11,
      paddingTop:80
  },
  button: {
        
        alignSelf:'center',
          width: 80,
          marginBottom:20,
          marginTop:10
      },
});
export default DashBoard;
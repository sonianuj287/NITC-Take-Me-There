import React, { useState } from 'react';
import { FlatList,StyleSheet,Text, TextInput, View, Button,Alert } from 'react-native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("final.db");

export default class mythtest extends React.Component {



    constructor(props) {
        super(props);

        this.state = { 
          data:[], 
            Location: '',
            id:'' 
        };  

        db.transaction(tx => {
            tx.executeSql(
              "create table if not exists SaveLocations (id integer primary key not null,Locations text);"
            );
          });


      }





    fun1(text) {

      db.transaction(tx => {
      tx.executeSql("insert into SaveLocations (Locations) values (?)", [text]);   
      
    });
}

delete(text) {


db.transaction(tx => {
   
tx.executeSql(
  'DELETE FROM  Savelocations where id=?',
  [text],
  (tx, results) => {
    console.log('Results', results.rowsAffected);
    if (results.rowsAffected > 0) {
      Alert.alert(
        'Success',
        'Location deleted successfully',
        [
          {
            text: 'Ok',
          },
        ],
        { cancelable: false }
      );
    } else {
      alert('Please insert a valid User Id');
    }
  }
);
});
}


display() {

  db.transaction(tx => {
    tx.executeSql('SELECT * FROM SaveLocations', [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      //console.log(temp)
      this.setState({
        data: temp,
      });
    });
  });



 }



render(){


  return (
    <View style = {styles.container}>
      <View>
         <TextInput style={styles.input } onChangeText={Location => this.setState({ Location })}   placeholder="Enter the text.. "  />
         <Button  title="Insert"  onPress={ this.fun1.bind(this,  this.state.Location) }/>
  
  
  
  
         <FlatList
          data={this.state.data}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.Locations} style={{ backgroundColor: 'yellow', padding: 30 }}>
              <Text>Id: {item.id}</Text>
              <Text>Name: {item.Locations}</Text>
            </View>
          )}
        />
  
  <TextInput style={styles.input } onChangeText={id => this.setState({ id })}   placeholder="id "  />
       
  <Button style={styles.button} title="Delete"  onPress={ this.delete.bind(this,this.state.id) }/>
  
  <Button style={styles.button} title="Display" onPress={ this.display.bind(this) }/>

  
  
         </View>
    </View>
  );};
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'space-evenly',
  alignItems:'center',
  flexDirection:"row",
  backgroundColor:"#ffffff",
  //flexWrap:"wrap",
  },
  input:{
    borderWidth:1,
    width:140,
    borderColor:'#72121b',
    height:40,
    margin:10,
    fontSize:20,
    padding:10,

  },



});

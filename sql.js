import React, { useState } from 'react';
import { StyleSheet,Text, TextInput, View, Button } from 'react-native';
//import { render } from 'react-dom';

//const [InsertData , setInsertData] = useState('');

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("sid.db");

export default class mythtest extends React.Component {



    constructor(props) {
        super(props);
       
        this.state = { 
          data:"", 
            Location: '',
            name:'',  
        };  
        
        db.transaction(tx => {
            tx.executeSql(
              "create table if not exists SaveLocations (id integer primary key not null,Locations text, name text);"
            );
          });
        
       
      }
     




    fun1(text,text2) {
    // is text empty?
    // if (text === null || text === "") {
    //     return false;
    // }




    // db.transaction(function(tx) {
    //     tx.executeSql(
    //       'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
    //       [user_name, user_contact, user_address],
    //       (tx, results) => {
    //         console.log('Results', results.rowsAffected);
          




    db.transaction(tx => {
        
        tx.executeSql("insert into SaveLocations (Locations, name) values (?, ?)", [text,text2]);
        tx.executeSql("select * from SaveLocations", [], (_, { rows }) =>
          this.setState({data:rows}) //console.log(JSON.stringify(rows))
        );
      });
    }
                    
     
      fun2(StringHolder){
     
        Alert.alert(StringHolder);
     
      }

render(){


  return (
    <View style = {styles.container}>
      <View>
         <TextInput style={styles.input } onChangeText={Location => this.setState({ Location })}   placeholder="Enter the text.. "  />
         <TextInput style={styles.input } onChangeText={name=> this.setState({ name })}   placeholder="Enter the text.. "  />
         <Button  title="Insert"  onPress={ this.fun1.bind(this,  this.state.Location, this.state.name) }/>
  <Text>{this.state.data}</Text>
         </View>
         <View>
         <TextInput style={styles.input }  />

         <Button onPress={ this.fun2.bind(this, this.state.Location,this.state.name) } title=" Click Here To Call Function - 2 " />
         <Button style={styles.button} title="Display"  onPress={()=>{props.navigation.navigate({routeName:'SavedP'})
        }}/>
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

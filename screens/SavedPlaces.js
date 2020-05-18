
import React, { useState } from 'react';
import { FlatList,StyleSheet,Text, TextInput, View, Button,Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import Card from '../components/Card';

const db = SQLite.openDatabase("finz.db");

export default class mythtest extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          data:[], 
            Location: '',
            id:'' ,
            mapx:"",
            mapy:"",
            lat:0,
            lng:0,
            op:340
        };  

        db.transaction(tx => {
            tx.executeSql(
              "create table if not exists SaveLocations (id integer primary key not null,Locations text,Latitude text,Longitude text);"
            );
          });
      }

      async componentDidMount(){
        const location = await Location.getCurrentPositionAsync({});
        const co = location.coords; 
        this.setState({lat:location.coords.latitude});
        this.setState({lng:location.coords.longitude});
        const response = await Geocoder.from(location.coords.latitude,location.coords.longitude);
        const address = response.results[0].formatted_address;
        var temp = address+","+location.coords.latitude+","+location.coords.longitude;
        this.setState({Location:address});
        this.setState({lat:location.coords.latitude});
        this.setState({lng:location.coords.longitude});
        console.log(text,text1,text2)
      };



    fun1(text, text1, text2) {
      console.log(text,text1,text2)
      db.transaction(tx => {
      tx.executeSql("insert into SaveLocations (Locations,Latitude,Longitude) values (?,?,?)", [text,text1,text2]);   

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

displayOne(text) {
  db.transaction(tx => {
  tx.executeSql(
    'SELECT * FROM  Savelocations where id=?',
    [text],
    (tx, results) => {
      var temp = "";
      temp = results.rows;
      console.log(temp);
      console.log(results.rows.item(0));
      this.setState({mapx:results.rows.item(0).Latitude}),
      this.setState({mapy:results.rows.item(0).Longitude});
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
      this.setState({
        data: temp,
      });
    });
  });



 }



render(){
var address = this.state.add;
var x = this.state.lat;
var y = this.state.lng;

  return (
    <View style = {styles.container}>
      <Card style={styles.inputContainer}>
        <TextInput style={{width:"100%"}} onChangeText={Location => this.setState({ Location })}  placeholder="Enter the text.. ">{this.state.Location}</TextInput>    
        <Text></Text>
         <Button color="green" title="Save Current Location"  onPress={ this.fun1.bind(this,  this.state.Location,this.state.lat,this.state.lng)}/>
         <Text></Text>
        <View style={{flexDirection:"row"}}>
          <View style={{width:"80%"}}>
         <Button color="green" style={styles.button} title="Display" onPress={ this.display.bind(this) }/>
         </View>
         <Text>      </Text>
         <View style={{width:"15%"}}>
         <Button  title="s/h" color={this.state.op==0?"green":"red"} onPress={()=>{this.setState({op:this.state.op == 340?0:340})}}/>
         </View>
         </View>
         <Text></Text>
         <View >
         <FlatList style={{height:this.state.op,opacity:this.state.op}}
          data={this.state.data}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.Locations} style={{ backgroundColor: 'green', padding: 30,height:120 }}>
              <Text style={{color:"white"}}>Id: {item.id}</Text>
              <Text style={{color:"white"}}>Name: {item.Locations}</Text>
            </View>
          )}
        />
        </View>
        </Card>

  {/* <Text>     {this.state.mapx} {this.state.mapy}</Text> */}
<Card style={styles.inputContainerback}>
  <TextInput style={{width:50}} onChangeText={id => this.setState({ id })}   placeholder="Enter Id "  />
  <Text></Text>
  <Button color="green" style={styles.button} title="Delete"  onPress={ this.delete.bind(this,this.state.id) } />
  <Text></Text>
  <Button color="green" style={styles.button} title="Show on Map"  onPress={ this.displayOne.bind(this,this.state.id)} onPress={()=>{this.props.navigation.navigate('SavedPlacesMap',{x,y}) }} />

  </Card>
  



         </View>
  );};
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"black",
    height:"100%",
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
  inputContainer: {
    width:350,
    height:500,
    maxWidth: '90%',
    fontSize:20,
    marginBottom:"20%"     
},
inputContainerback: {
  width:300,
  height:170,
  maxWidth: '80%',
  fontSize:20,
 
 
}



});

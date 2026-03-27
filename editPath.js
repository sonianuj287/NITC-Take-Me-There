//editpath
import React,{useState,  Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TextInput,Button,Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from '../components/Card';

const MapInputScreen = props =>{  
    const [from,setFrom] = useState('');
    const[Places,setPlaces]=useState();
    const[loc,setLoc] = useState('');
    const[index,setIndex] = useState('#');
    const[length,setLength] = useState(0);
    const[newLoc,setNewLoc] = useState('');

    async function wait(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }

    async function retrieve()
    {
        try {
            let response = await fetch('https://fir-test-4dae1.firebaseio.com/Locations.json');
            let res = await response.json();
            setLength(res.length);
           var temp=[];
          for (let i = 0; i < res.length; ++i) {
               str=res[i];
                //console.log(str);
               temp.push({value:str});
          }

            // console.log(temp.sort(compare));
            setPlaces(temp);

            return res.user;
          } 
          catch (error) {
            console.error(error);
          }

    }

    // async function matcher(loc){
    //   try {
    //     let response = await fetch('https://fir-test-4dae1.firebaseio.com/Locations.json');
    //     let res = await response.json();
        
    //   for (let i = 0; i < res.length; ++i) {
    //       if(loc === res[i])
    //       {
    //         setIndex(i);
    //         break;
    //       }
    //       console.log(loc+"      "+index+"<<<<>>>");

    //   }
    //     return res.user;
    //   } 
    //   catch (error) {
    //     console.error(error);
    //   }
    // }


    async function matcher(){
      try {
      //  console.log("data retrieved from "+from);
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/Locations.json');
        let res = await response.json();
        

      for (let i = 0; i < res.length; ++i) {
        console.log(" i = "+i+"\t res[i] = "+res[i]+"\tfrom = "+from+"\t comparision = "+from.localeCompare(res[i]));

        if(from.localeCompare(res[i]) ==0) {
            console.log("<<<<>>>>>index= "+index+" res= "+res[i]);
            setIndex(i);
            return res.user;
          }

        //  console.log("\t index retrieved is : "+index+"\n");
      }
        return res.user;
      } 
      catch (error) {
        console.error(error);
      }
    }





    const submit = (loc,index) => {
      fetch('https://fir-test-4dae1.firebaseio.com/Locations/'+index+'.json',{
          method: 'PUT',
          mode:'cors',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(loc)
      })
  };

  const deleter = (index) => {
    fetch('https://fir-test-4dae1.firebaseio.com/Locations/'+index+'.json',{
        method: 'DELETE',
    })
};

const adder = (newLoc,length) => {
  fetch('https://fir-test-4dae1.firebaseio.com/Locations/'+length+'.json',{
      method: 'PUT',
      mode:'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(newLoc) 
  })
};

    return (
      <View style={styles.container} onLayout={()=>{retrieve()}}>
        <View style={{backgroundColor:"black", height:"40%"}}></View>
            <Card style={styles.inputContainer}>
            <Dropdown style={{color:"green"}} label='Location' onChangeText={text => setFrom(text)}
                            data={Places}
                        />
                <Text></Text>
    <Button title="delete" onPress={()=>{matcher();deleter(index);retrieve()}} color="green"/>
            <Text></Text>
            <View>
    <TextInput onChangeText={text=>setLoc(text)} placeholder="location to be change..">{from}</TextInput>
            <Text></Text>
    <Button title="Update" onPress={()=>{matcher();submit(loc,index);retrieve()}} color="green"/>
            <Text></Text>
    <TextInput onChangeText={text=>setNewLoc(text)} placeholder="write location name.."/>
    <Text></Text>
    <Button title="add" color="green" onPress={()=>{adder(newLoc,length);retrieve()}} />
            <Text></Text>
            <Text>{index}</Text>
            </View>
            </Card>           
      </View>
    );

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
    height:hp("100%"),
},
    inputContainer: {
      width:wp("80%"),
      height:hp("45%"),
      fontSize:20,
      marginBottom:"70%"     
  }
});
export default MapInputScreen;

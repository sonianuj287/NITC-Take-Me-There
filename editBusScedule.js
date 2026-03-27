import React,{useState,  Component } from 'react';
import { StyleSheet, Text, View,Alert, Dimensions,TextInput,Button,Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from '../components/Card';


const TakeMeThere = props => {
  const[op1,setOp1] = useState(0);
  const[op2,setOp2] = useState(0);
  const[tab,setTable] = useState();
  const[tab2,setTable2] = useState('');

  const [from,setFrom] = useState('');
  const[loc,setLoc] = useState('');
  const[index,setIndex] = useState('#');
  const[length,setLength] = useState(0);
  const[newLoc,setNewLoc] = useState('');

  


  async function retrieve()
  {
      try {
          let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab.json');
          let res = await response.json();
         

         var temp=[];
        for (let i = 0; i < res.length; ++i) {
           temp.push({value:res[i]});
        }

            setTable(temp);
          console.log(tab);
         
          return res.user;
        } catch (error) {
          console.error(error);
        }
      
  }




  async function retrieve2()
  {
      try {
          let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab2.json');
          let res = await response.json();
         
         var temp=[];

        for (let i = 0; i < res.length; ++i) {
           temp.push(res[i].split(","));
        }
        //transposing to set data adequately
        var newArray = [];
        for(var i = 0; i < temp[0].length; i++){
            newArray.push([]);
        };
    
        for(var i = 0; i < temp[0].length; i++){
            for(var j = 0; j < temp.length; j++){
              newArray[i][j]=temp[j][i];
          }
        };
        console.log(newArray);
            setTable2(newArray);
          //console.log(temp);
          return res.user;
        } catch (error) {
          console.error(error);
        }
      
  }



    async function matcher(){
      try {
      //  console.log("data retrieved from "+from);
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab.json');
        let res = await response.json();
        

      for (let i = 0; i < res.length; ++i) {
        console.log(" i = "+i+"\t res[i] = "+res[i]+"\tfrom = "+from+"\t comparision = "+from.localeCompare(res[i]));

        if(from.localeCompare(res[i]) ==0) {
            setIndex(i);
            console.log("<<<<>>>>>index= "+index+" res= "+res[i]);
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
      fetch('https://fir-test-4dae1.firebaseio.com/sidTab/'+index+'.json',{
          method: 'PUT',
          mode:'cors',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(loc)
      })
  };

  const deleter = (index) => {

    Alert.alert(  
      'Wait',  
      'Wait data is deleting now',  
      [  
          {text: 'OK', onPress: () => retrieve()},  
      ]  
  );fetch('https://fir-test-4dae1.firebaseio.com/sidTab/'+index+'.json',{
        method: 'DELETE',
    })
    Alert.alert(  
      'succeeded',  
      'Data deleted successfully',  
      [  
          {  
              text: 'Cancel',  
              onPress: () => console.log('Cancel Pressed'),  
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () => retrieve()},  
      ]  
  );    
};

const adder = (newLoc,length) => {
  fetch('https://fir-test-4dae1.firebaseio.com/sidTab/'+length+'.json',{
      method: 'PUT',
      mode:'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(newLoc) 
  })
};






  return (
    <View onLayout={()=>{retrieve()}}>
    <View style={{height:"10%"}}></View>
      <Card>
        <View style={{flexDirection:"row"}}>
        <View style={{width:"15%"}}></View>
        <Button title="Morning route" color={op1==30?"black":"green"} onPress={()=>{setOp1(30);setOp2(0)}}/>
        <View style={{width:"15%"}}></View>
        <Button title="Evening route" color={op2==30?"black":"green"} onPress={()=>{setOp2(30);setOp1(0)}}/>
        </View>
      </Card>

<View style={{height:"20%"}}></View>




{/*  Here we are creating the first module for morning  routine*/}

<Dropdown style={{color:"green"}} label='Edit Morning Routine' onChangeText={text => setFrom(text)}
                            data={tab}
  />
                <Text></Text>
    <Button title="delete" onPress={()=>{matcher();{deleter(index);}retrieve()}} color="green"/>
            <Text></Text>
            <View>
  <TextInput onChangeText={text=>setLoc(text)} placeholder="schedule to be change..">{from}</TextInput>
            <Text></Text>
    <Button title="Update" onPress={()=>{matcher();submit(loc,index);retrieve()}} color="green"/>
            <Text></Text>
            <Text></Text>
    <TextInput onChangeText={text=>setNewLoc(text)} placeholder="write location name.."/>
    <Text></Text>
    <Button title="add" color="green" onPress={()=>{adder(newLoc,length);retrieve()}} />
   
           <Text>{index}</Text>
            </View>



{/* Testing phase till here*/}



<Card style={{opacity:op1,height:op1}}>
    <Text>Morning Route</Text>
    
</Card>


      <Card style={{opacity:op2,height:op2}}>
        <Text>Evening Route</Text>

      </Card>


<View style={{height:"40%"}}></View>
      <Card style={styles.inputContainer1}>
            <Button title="Back" color="green" onPress={()=>{props.navigation.navigate('DashBoard')}}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer1: {
    width:wp("70%"),
    height:hp("20%"),
    fontSize:20,
    marginLeft:"15%"
    }
})


export default TakeMeThere;

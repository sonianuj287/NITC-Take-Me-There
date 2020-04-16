import React,{useState,  Component } from 'react';
import { StyleSheet, Text, View,Alert, Dimensions,TextInput,Button,Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Card from '../components/Card';


const TakeMeThere = props => {
  const[op1,setOp1] = useState(350);
  const[op2,setOp2] = useState(0);
  const[tab,setTable] = useState();
  const [from,setFrom] = useState('');
  const[loc,setLoc] = useState('');
  const[index,setIndex] = useState('#');
  const[length,setLength] = useState(0);
  const[newLoc,setNewLoc] = useState('');

  const[tab2,setTable2] = useState();
  const[length2,setLength2] = useState(0);
  const [from2,setFrom2] = useState('');
  const[loc2,setLoc2] = useState('');
  const[index2,setIndex2] = useState('#');
  const[newLoc2,setNewLoc2] = useState('');

  async function retrieve()
  {
      try {
          let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab.json');
          let res = await response.json();


         var temp=[];
        for (let i = 0; i < res.length; ++i) {
           temp.push({value:res[i]});
        }
            setLength(res.length);
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
           temp.push({value:res[i]});
        }
            setLength2(res.length);
            setTable2(temp);
          console.log(tab2);

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

    async function matcher2(){
      try {
      //  console.log("data retrieved from "+from);
        let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab2.json');
        let res = await response.json();


      for (let i = 0; i < res.length; ++i) {
        console.log(" i = "+i+"\t res[i] = "+res[i]+"\tfrom = "+from2+"\t comparision = "+from2.localeCompare(res[i]));

        if(from2.localeCompare(res[i]) ==0) {
            setIndex2(i);
            console.log("<<<<>>>>>index= "+index2+" res= "+res[i]);
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

  const submit2 = (loc2,index2) => {
    fetch('https://fir-test-4dae1.firebaseio.com/sidTab2/'+index2+'.json',{
        method: 'PUT',
        mode:'cors',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(loc2)
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

const deleter2 = (index2) => {

  Alert.alert(  
    'Wait',  
    'Wait data is deleting now',  
    [  
        {text: 'OK', onPress: () => retrieve2()},  
    ]  
);fetch('https://fir-test-4dae1.firebaseio.com/sidTab2/'+index2+'.json',{
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
        {text: 'OK', onPress: () => retrieve2()},  
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

const adder2 = (newLoc2,length2) => {
  fetch('https://fir-test-4dae1.firebaseio.com/sidTab2/'+length2+'.json',{
      method: 'PUT',
      mode:'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(newLoc2) 
  })
};






  return (
    <View style={{backgroundColor:"black"}} onLayout={()=>{retrieve();retrieve2()}}>
    <View style={{height:"5%"}}></View>
      <Card>
        <View style={{flexDirection:"row"}}>
        <View style={{width:"15%"}}></View>
        <Button title="Morning route" color={op1==350?"black":"green"} onPress={()=>{setOp1(350);setOp2(0)}}/>
        <View style={{width:"15%"}}></View>
        <Button title="Evening route" color={op2==350?"black":"green"} onPress={()=>{setOp2(350);setOp1(0)}}/>
        </View>
      </Card>

<View style={{height:"10%"}}></View>




{/*  Here we are creating the first module for morning  routine*/}
{/* Testing phase till here*/}



<Card style={{opacity:op1,height:op1}}>
<Dropdown style={{color:"green"}} label='Edit Morning Routine' onChangeText={text => setFrom(text)}
                            data={tab}
  />
                <Text></Text>
    <Button title="delete" onPress={()=>{matcher();{deleter(index);}retrieve()}} color="green"/>
            <Text></Text>
            <View>
  <TextInput style={{color:"green"}} onChangeText={text=>setLoc(text)} placeholder="schedule to be change..">{from}</TextInput>
            <Text></Text>
    <Button title="Update" onPress={()=>{matcher();submit(loc,index);retrieve()}} color="green"/>
            <Text></Text>
    <TextInput style={{color:"green"}} onChangeText={text=>setNewLoc(text)} placeholder="write location name.."/>
    <Text></Text>
    <Button title="add" color="green" onPress={()=>{retrieve();adder(newLoc,length);retrieve()}} />
            </View>

</Card>


      <Card style={{opacity:op2,height:op2}}>
      <Dropdown style={{color:"green"}} label='Edit Evening Routine' onChangeText={text => setFrom2(text)}
                            data={tab2}
  />
    <Button title="delete" onPress={()=>{matcher2();{deleter2(index2);}retrieve2()}} color="green"/>
            <Text></Text>
            <View>
  <TextInput style={{color:"green"}} onChangeText={text=>setLoc2(text)} placeholder="schedule to be change..">{from2}</TextInput>
            <Text></Text>
    <Button title="Update" onPress={()=>{matcher2();submit2(loc2,index2);retrieve2()}} color="green"/>
            <Text></Text>
    <TextInput style={{color:"green"}} onChangeText={text=>setNewLoc2(text)} placeholder="write location name.."/>
    <Text></Text>
    <Button title="add" color="green" onPress={()=>{retrieve2();adder2(newLoc2,length2);retrieve2()}} />
            </View>

      </Card>


<View style={{height:"12%"}}></View>
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
import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import { Dropdown } from 'react-native-material-dropdown';

const EditBusSchedule = props => {
    const[table,setTable] = useState('');
    const[t11,setT11] = useState('#');
    const[t12,setT12] = useState('#');
    const[t13,setT13] = useState('#');
    const[t14,setT14] = useState('#');
    const[t15,setT15] = useState('#');
    const[t16,setT16] = useState('#');
    const[t2,setT2] = useState('#');
    const[t3,setT3] = useState('#');

    const[set11,setSet11] = useState('');
    const[set12,setSet12] = useState('');
    const[set13,setSet13] = useState('');
    const[set14,setSet14] = useState('');
    const[set15,setSet15] = useState('');
    const[set16,setSet16] = useState('');
    const[set2,setSet2] = useState('');
    const[set3,setSet3] = useState('');

    const[op11,setOp11] = useState(0);
    const[op12,setOp12] = useState(0);
    const[op13,setOp13] = useState(0);
    const[op14,setOp14] = useState(0);
    const[op15,setOp15] = useState(0);
    const[op16,setOp16] = useState(0);
    const[op2,setOp2] = useState(0);
    const[op3,setOp3] = useState(0);

    

const swapper = () =>{
  if(table == "MorningRoute1"){
    setOp11(40);setOp12(0);setOp13(0);setOp14(0);setOp15(0);setOp16(0);setOp2(0);setOp3(0);}
  else if(table == "MorningRoute2"){
    setOp11(0);setOp12(40);setOp13(0);setOp14(0);setOp15(0);setOp16(0);setOp2(0);setOp3(0);}
  else if(table == "MorningRoute3"){
    setOp11(0);setOp12(0);setOp13(40);setOp14(0);setOp15(0);setOp16(0);setOp2(0);setOp3(0);}
  else if(table == "MorningRoute4"){
    setOp11(0);setOp12(0);setOp13(0);setOp14(40);setOp15(0);setOp16(0);setOp2(0);setOp3(0);}
  else if(table == "MorningRoute5"){
    setOp11(0);setOp12(0);setOp13(0);setOp14(0);setOp15(40);setOp16(0);setOp2(0);setOp3(0);}
  else if(table == "MorningRoute6"){
    setOp11(0);setOp12(0);setOp13(0);setOp14(0);setOp15(0);setOp16(40);setOp2(0);setOp3(0);}
  else if(table == "EveningRoute1"){
    setOp11(0);setOp12(0);setOp13(0);setOp14(0);setOp15(0);setOp16(0);setOp2(40);setOp3(0);}
  else if(table == "EveningRoute2"){
    setOp11(0);setOp12(0);setOp13(0);setOp14(0);setOp15(0);setOp16(0);setOp2(0);setOp3(40);}
}

    function clear(){
        setT11('');
        setT12('');
        setT13('');
        setT14('');
        setT15('');
        setT16('');
        setT2('');
        setT3('');
        setSet11('');
        setSet12('');
        setSet13('');
        setSet14('');
        setSet15('');
        setSet16('');
        setSet2('');
        setSet3('');
    }

    const submit11 = (set11) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 11.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega1:set11
            })
        })
    };
    const submit12 = (set12) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 12.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega2:set12
            })
        })
    };
    const submit13 = (set13) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 13.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega3:set13
            })
        })
    };
    const submit14 = (set14) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 14.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega4:set14,
            })
        })
    };
    const submit15 = (set15) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 15.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega5:set15,
            })
        })
    };
    const submit16 = (set16) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 16.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mega6:set16
            })
        })
    };
    const submit2 = (set2) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 2.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MegaHostel:set2
            })
        })
    };
    const submit3 = (set3) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Table 3.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SOMS:set3
            })
        })
    };

    async function wait(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }


    async function select(){
      let response;
      let responseJson;
      try{
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 11.json');await wait(1000);
          responseJson = await response.json();
          setT11(responseJson.Mega1);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 12.json');await wait(1000);
          responseJson = await response.json();
          setT12(responseJson.Mega2);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 13.json');await wait(1000);
          responseJson = await response.json();
          setT13(responseJson.Mega3);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 14.json');await wait(1000);
          responseJson = await response.json();
          setT14(responseJson.Mega4);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 15.json');await wait(1000);
          responseJson = await response.json();
          setT15(responseJson.Mega5);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 16.json');await wait(1000);
          responseJson = await response.json();
          setT16(responseJson.Mega6);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 2.json');await wait(1000);
          responseJson = await response.json();
          setT2(responseJson.MegaHostel);
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 3.json');await wait(1000);
          responseJson = await response.json();
          setT3(responseJson.SOMS);
    
      }catch(error){
        console.log(error);
      }
    }


    let data = [{
      value: t11.split(",")[0]
    },{
      value: t12.split(",")[0]
    },{
      value: t13.split(",")[0]
    },{
      value: t14.split(",")[0]
    },{
      value: t15.split(",")[0]
    },{
      value: t16.split(",")[0]
    },{
      value: t2.split(",")[0]
    },{
      value: t3.split(",")[0]
    }]    


    return(
        <View style = {styles.container} onLayout={()=>{select()}}>
            <Card style={styles.inputContainer}>
            <Text></Text>

            <Dropdown style={{color:"green",width:"40%"}} label='Table' onChangeText={text => setTable(text)}
                            data={data}
                        />
                        <Button title="search" color="green" onPress={()=>{swapper()}}/>


          <Text></Text>
          

          <View style={{flexDirection:'row',opacity:op11,height:op11}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet11(text)}>{t11}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit11(set11)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op12,height:op12}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet12(text)}>{t12}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit12(set12)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op13,height:op13}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet13(text)}>{t13}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit13(set13)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op14,height:op14}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet14(text)}>{t14}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit14(set14)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op15,height:op15}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet15(text)}>{t15}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit15(set15)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op16,height:op16}}>
    
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet16(text)}>{t16}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit16(set16)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op2,height:op2}}>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet2(text)}>{t2}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit2(set2)}} color="green"/>
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op3,height:op3}}>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:275,height:40}}  onChangeText={text => setSet3(text)}>{t3}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit3(set3)}} color="green"/>
        </View>
        </View>

        </Card>
        <Card style={styles.inputContainer1}>
<Button title="Back" color="green" onPress={()=>{props.navigation.navigate('DashBoard')}}/>
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
    height:"100%",
},
    input:{
        borderBottomColor:'black',
        borderWidth:1,
        width:240,
        height:33,
        padding:10
    },
    inputContainer: {
      width:350,
      height:300,
      maxWidth: '90%',
      fontSize:20,
      marginBottom:"30%"     
  },
  inputContainer1: {
    width:350,
    height:110,
    maxWidth: '80%',
    fontSize:20,
   
   
}
});

export default EditBusSchedule;
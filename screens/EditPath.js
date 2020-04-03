import React,{useState} from 'react';
import {View,Text,StyleSheet, Button,Picker,TextInput} from 'react-native';
import {Card} from 'react-native-elements';



const EditPath = () => {
    const[loc,setLoc] = useState('');

    const[loc1,setLoc1] = useState('#');
    const[loc2,setLoc2] = useState('#');
    const[loc3,setLoc3] = useState('#');
    const[loc4,setLoc4] = useState('#');
    const[loc5,setLoc5] = useState('#');
    const[loc6,setLoc6] = useState('#');

    const[l1,setL1] = useState('');
    const[l2,setL2] = useState('');
    const[l3,setL3] = useState('');
    const[l4,setL4] = useState('');
    const[l5,setL5] = useState('');
    const[l6,setL6] = useState('');

    const[op1,setOp1] = useState(0);
    const[op2,setOp2] = useState(0);
    const[op3,setOp3] = useState(0);
    const[op4,setOp4] = useState(0);
    const[op5,setOp5] = useState(0);
    const[op6,setOp6] = useState(0);

    function clear(){
        setLoc1('');
        setLoc2('');
        setLoc3('');
        setLoc4('');
        setLoc5('');
        setLoc6('');
        setL1('');
        setL2('');
        setL3('');
        setL4('');
        setL5('');
        setL6('');
        setOp5(0);
        setOp4(0);
        setOp3(0);
        setOp2(0);
        setOp1(0);
    }

    const swapper=()=>{
        if(loc=='Main Building NIT Calicut'){
            setOp1(40);
        }
        if(loc=='NLHC'){
            setOp2(40);
        }
        if(loc=='Bhaskara Hall'){
            setOp3(40);
        }
        if(loc=='ELHC'){
            setOp4(40);
        }
        if(loc=='Auditorium NIT'){
            setOp5(40);
        }
        if(loc=='NITC Main Canteen'){
            setOp6(40);
        }
};


    const submit1 = (l1) =>{
        fetch('https://fir-test-4dae1.firebaseio.com/Loc1.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MainBuilding:l1
            })
        })
    };
    const submit2 = (l2) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Loc2.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                NLHC:l2
            })
        })
    };
    const submit3 = (l3) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Loc3.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Bhaskara:l3
            })
        })
    };
    const submit4 = (l4) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Loc4.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ELHC:l4,
            })
        })
    };
    const submit5 = (l5) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Loc5.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Auditorium:l5,
            })
        })
    };
    const submit6 = (l6) =>{

        fetch('https://fir-test-4dae1.firebaseio.com/Loc6.json',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MainCanteen:l6
            })
        })
    };
 



      async function select(t) {
        try {
            let response;
            let responseJson;
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc1.json');
                responseJson = await response.json();
                setLoc1(responseJson.MainBuilding);
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc2.json');
                responseJson = await response.json();
                setLoc2(responseJson.NLHC);
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc3.json');
                responseJson = await response.json();
                setLoc3(responseJson.Bhaskara);
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc4.json');
                responseJson = await response.json();
                setLoc4(responseJson.ELHC);
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc5.json');
                responseJson = await response.json();
                setLoc5(responseJson.Auditorium);
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc6.json');
                responseJson = await response.json();
                setLoc6(responseJson.MainCanteen);
        } catch (error) {
          console.error(error);
        }
      }

      select()
    return(
    <View style={styles.container} >
                    <Text style={{fontSize:20, fontWeight:"bold"}}>                                  Select Location</Text>
            <View>
                <Picker onValueChange={text => setLoc(text)} selectedValue = {loc}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label={loc1.split(",")[0]} value={loc1.split(",")[0]}/>
                    <Picker.Item label={loc2.split(",")[0]} value={loc2.split(",")[0]} />
                    <Picker.Item label={loc3.split(",")[0]} value={loc3.split(",")[0]} />
                    <Picker.Item label={loc4.split(",")[0]} value={loc4.split(",")[0]} />
                    <Picker.Item label={loc5.split(",")[0]} value={loc5.split(",")[0]} />
                    <Picker.Item label={loc6.split(",")[0]} value={loc6.split(",")[0]} />
                </Picker>
                <View style={{flexDirection:'row',paddingLeft:'42%'}}>
                <Button title="search" onPress={()=>{clear(),swapper()}}/>
                </View>
                <Text></Text>





        <View style={{flexDirection:'row',opacity:op1,height:op1}}>
            <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL1(text)}>{loc1}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit1(l1)}} />
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op2,height:op2}}>
        <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL2(text)}>{loc2}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit2(l2)}} />
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op3,height:op3}}>
        <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL3(text)}>{loc3}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit3(l3)}} />
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op4,height:op4}}>
        <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL4(text)}>{loc4}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit4(l4)}} />
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op5,height:op5}}>
        <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL5(text)}>{loc5}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit5(l5)}} />
        </View>
        </View>

        <View style={{flexDirection:'row',opacity:op6,height:op6}}>
        <Text>        </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:40}}  onChangeText={text => setL6(text)}>{loc6}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit6(l6)}} />
        </View>
        </View>




                </View>     
      </View>
    )
}

const styles = StyleSheet.create({

})

export default EditPath;
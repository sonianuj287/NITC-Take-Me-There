import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet, Button} from 'react-native';

const EditBusSchedule = () =>{
    const[table,setTable] = useState('');
    const[t11,setT11] = useState('');
    const[t12,setT12] = useState('');
    const[t13,setT13] = useState('');
    const[t14,setT14] = useState('');
    const[t15,setT15] = useState('');
    const[t16,setT16] = useState('');
    const[t2,setT2] = useState('');
    const[t3,setT3] = useState('');

    const[set11,setSet11] = useState('');
    const[set12,setSet12] = useState('');
    const[set13,setSet13] = useState('');
    const[set14,setSet14] = useState('');
    const[set15,setSet15] = useState('');
    const[set16,setSet16] = useState('');
    const[set2,setSet2] = useState('');
    const[set3,setSet3] = useState('');
    

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

    // function copy(){
    //     setSet11(t11);
    //     setSet12(t12);
    //     setSet13(t13);
    //     setSet14(t14);
    //     setSet15(t15);
    //     setSet16(t15);
    // }

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


    async function select(t) {
        try {
            let response;
            let responseJson;
            if(t == "Table 11"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 11.json');
                responseJson = await response.json();
                setT11(responseJson.Mega1);
            }
            if(t == "Table 12"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 12.json');
                responseJson = await response.json();
                setT11(responseJson.Mega2);
            }
            if(t == "Table 13"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 13.json');
                responseJson = await response.json();
                setT11(responseJson.Mega3);
            }
            if(t == "Table 14"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 14.json');
                responseJson = await response.json();
                setT11(responseJson.Mega4);
            }
            if(t == "Table 15"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 15.json');
                responseJson = await response.json();
                setT11(responseJson.Mega5);
            }
            if(t == "Table 16"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 16.json');
                responseJson = await response.json();
                setT11(responseJson.Mega6);
            }
            
            if(t == "Table 2"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 2.json');
                responseJson = await response.json();
                setT2(responseJson.MegaHostel);
            }
            if(t == "Table 3"){
                response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 3.json'); 
                responseJson = await response.json();
                setT3(responseJson.SOMS);  
            }
        //   return responseJson.user;
        } catch (error) {
          console.error(error);
        }
      }


    return(
        <View>
        <Text style={{fontSize:20,fontWeight: 'bold'}}>                             Enter Table Name</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
            <Text></Text>
            <View style={{flexDirection:'row'}}>
            <Text>             </Text>
            <TextInput placeholder="search for table" style={styles.input } onChangeText={(text)=>setTable(text)}/>
            <Text>             </Text>
            <Button title="search" onPress={()=>{clear(),select(table)}}/>
            </View>
            <Text></Text>
            <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text></Text>
          <View style={{flexDirection:'row'}}>
              <Text>   T1,R1   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet11(text)}>{t11}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit11(set11)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
              <Text>   T1,R2   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet12(text)}>{t12}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit12(set12)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
              <Text>   T1,R3   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet13(text)}>{t13}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit13(set13)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
              <Text>   T1,R4   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet14(text)}>{t14}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit14(set14)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
              <Text>   T1,R5   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet15(text)}>{t15}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit15(set15)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
              <Text>   T1,R6   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet16(text)}>{t16}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit16(set16)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text>   T2,C1   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet2(text)}>{t2}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit2(set2)}} />
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text>   T2,C2   </Text>
        <TextInput style={{borderBottomColor:'black',borderWidth:1,width:300,height:30}}  onChangeText={text => setSet3(text)}>{t3}</TextInput>
        <Text>     </Text>
        <View style={{justifyContent:'center',alignContent:"center"}}>
        <Button title="save" onPress={()=>{submit3(set3)}} />
        </View>
        </View>










        </View>
    );

}

const styles = StyleSheet.create({
    input:{
        borderBottomColor:'black',
        borderWidth:1,
        width:240,
        height:33,
        padding:10
    }
});

export default EditBusSchedule;
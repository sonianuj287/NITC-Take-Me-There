import React,{useState} from 'react';
import {View,Text,StyleSheet, Button,Picker} from 'react-native';
import {Card} from 'react-native-elements';

const ExploreCampus = () => {
    const [cat1,setCat1] = useState('');
    const [cat2,setCat2] = useState('');
    const [cat3,setCat3] = useState('');
    const [cat4,setCat4] = useState('');
    const [cat5,setCat5] = useState('');

    const[op1,setOp1] = useState(40);
    const[op2,setOp2] = useState(0);
    const[op3,setOp3] = useState(0);
    const[op4,setOp4] = useState(0);
    const[op5,setOp5] = useState(0);

    // 
    const swapper=()=>{
            if(cat1=='food'){
                setOp1(0);
                setOp2(40);
            }
            if(cat1=='Grounds'){
                setOp1(0);
                setOp3(40);
            }
            if(cat1=='Lab'){
                setOp1(0);
                setOp4(40);
            }
            if(cat1=='Hostel'){
                setOp1(0);
                setOp5(40);
            }
    };
    const reset=()=>{
        setCat1('');
        setCat2('');
        setCat3('');
        setCat4('');
        setCat5('');
        setOp5(0);
        setOp4(0);
        setOp3(0);
        setOp2(0);
        setOp1(40);
    }
    return(
<View style={styles.container} >
    
            <Card>
            <View style={{opacity:op1,height:op1}}>
                <Text>from</Text>
                <Picker onValueChange={text => setCat1(text)} selectedValue = {cat1}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="food" value="food"/>
                    <Picker.Item label="Grounds" value="Grounds" />
                    <Picker.Item label="Lab" value="Lab" />
                    <Picker.Item label="Hostel" value="Hostel" />
                </Picker>
                </View>

                <View style={{opacity:op2,height:op2}}>
                <Text>food</Text>
                <Picker onValueChange={text => setCat2(text)} selectedValue = {cat2}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="main canteen" value="main canteen" />
                    <Picker.Item label="mini canteen" value="mini canteen" />
                    <Picker.Item label="micro canteen" value="micro canteen" />
                    <Picker.Item label="nano canteen" value="nano canteen" />
                </Picker>
                </View>

                <View style={{opacity:op3,height:op3}}>
                <Text>Grounds</Text>
                <Picker onValueChange={text => setCat3(text)} selectedValue = {cat3}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="football ground" value="football ground" />
                    <Picker.Item label="basketball ground" value="basketball ground" />
                    <Picker.Item label="badminton court" value="badminton court" />
                </Picker>
                </View>

                <View style={{opacity:op4,height:op4}}>
                <Text>Labs</Text>
                <Picker onValueChange={text => setCat4(text)} selectedValue = {cat4}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="CCC" value="CCC" />
                    <Picker.Item label="NSL" value="NSL" />
                    <Picker.Item label="SSL" value="SSL" />
                </Picker>
                </View>

                <View style={{opacity:op5,height:op5}}>
                <Text>Hostels</Text>
                <Picker onValueChange={text => setCat5(text)} selectedValue = {cat5}> 
                    <Picker.Item label="Select ..." value="" /> 
                    <Picker.Item label="A Hostel" value="A Hostel" />
                    <Picker.Item label="B Hostel" value="B Hostel" />
                    <Picker.Item label="C Hostel" value="C Hostel" />
                    <Picker.Item label="D Hostel" value="D Hostel" />
                    <Picker.Item label="E Hostel" value="E Hostel" />
                    <Picker.Item label="F Hostel" value="F Hostel" />
                    <Picker.Item label="G Hostel" value="G Hostel" />
                    <Picker.Item label="PG1 Hostel" value="PG1 Hostel" />
                    <Picker.Item label="PG2 Hostel" value="PG2 Hostel" />
                    <Picker.Item label="MHB Hostel" value="MHB Hostel" />
                    <Picker.Item label="MBA Hostel" value="MBA Hostel" />
                    <Picker.Item label="LH Hostel" value="LH Hostel" />
                </Picker>
                </View>

                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button title = "Next" onPress={()=>{swapper()}}/>
                <Text></Text>
                <Button title = "Reset" onPress={()=>{reset()}}/>
            </Card> 
                      
      </View>
    )
}

const styles = StyleSheet.create({

})

export default ExploreCampus;
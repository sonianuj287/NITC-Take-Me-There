import React,{useState} from 'react';
import {View,Text,StyleSheet, Button,Picker} from 'react-native';
import Card from '../components/Card';
import { Dropdown } from 'react-native-material-dropdown';
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ExploreCampus = props => {
    const[to,setTo] = useState('');
    const[cat,setCat] = useState('');
    const[subCat,setSubCat] = useState('');
    const[op,setOp] = useState(40);
    const[op1,setOp1] = useState(0);
    const[op2,setOp2] = useState(0);
    const[op3,setOp3] = useState(0);
    const[op4,setOp4] = useState(0);
    const[op5,setOp5] = useState(0);
    const[op6,setOp6] = useState(0);
    const[op7,setOp7] = useState(0);
    const[op8,setOp8] = useState(0);
    const[op9,setOp9] = useState(0);
    const[op10,setOp10] = useState(0);
    const[l1,setL1] = useState('#');
    const[l2,setL2] = useState('#');
    const[l3,setL3] = useState('#');
    const[l4,setL4] = useState('#');
    const[l5,setL5] = useState('#');
    const[l6,setL6] = useState('#');
    const[l7,setL7] = useState('#');
    const[l8,setL8] = useState('#');
    const[l9,setL9] = useState('#');
    const[l10,setL10] = useState('#');
    const[l11,setL11] = useState('#');
    const[l12,setL12] = useState('#');
    const[l13,setL13] = useState('#');
    const[l14,setL14] = useState('#');
    const[l15,setL15] = useState('#');
    const[l16,setL16] = useState('#');
    const[l17,setL17] = useState('#');
    const[l18,setL18] = useState('#');
    const[l19,setL19] = useState('#');
    const[l20,setL20] = useState('#');
    const[l21,setL21] = useState('#');
    const[l22,setL22] = useState('#');
    const[l23,setL23] = useState('#');
    const[l24,setL24] = useState('#');
    const[l25,setL25] = useState('#');
    const[l26,setL26] = useState('#');
    const[l27,setL27] = useState('#');
    const[l28,setL28] = useState('#');
    const[l29,setL29] = useState('#');
    const[l30,setL30] = useState('#');
    const[l31,setL31] = useState('#');
    const[l32,setL32] = useState('#');
    const[l33,setL33] = useState('#');
    const[l34,setL34] = useState('#');
    const[l35,setL35] = useState('#');
    const[l36,setL36] = useState('#');
    const[l37,setL37] = useState('#');
    const[l38,setL38] = useState('#');
    const[l39,setL39] = useState('#');
    const[l40,setL40] = useState('#');
    const[l41,setL41] = useState('#');
    const[l42,setL42] = useState('#');
    const[l43,setL43] = useState('#');
    const[l44,setL44] = useState('#');
    const[l45,setL45] = useState('#');
    const[l46,setL46] = useState('#');
    const[l47,setL47] = useState('#');
    const[l48,setL48] = useState('#');
    const[l49,setL49] = useState('#');
    const[l50,setL50] = useState('#');
    const[l51,setL51] = useState('#');


    const swapper=()=>{
        if(cat=='ATM'){
            setOp(0);
            setOp1(40);
        }
        if(cat=='Department'){
            setOp(0);
            setOp2(40);
        }
        if(cat=='Educational Block'){
            setOp(0);
            setOp3(40);
        }
        if(cat=='Event Spot'){
            setOp(0);
            setOp4(40);
        }
        if(cat=='Food'){
            setOp(0);
            setOp5(40);
        }
        if(cat=='Hostel'){
            setOp(0);
            setOp6(40);
        }
        if(cat=='Laboratory'){
            setOp(0);
            setOp7(40);
        }
        if(cat=='Sports'){
            setOp(0);
            setOp8(40);
        }
        if(cat=='Work Area'){
            setOp(0);
            setOp9(40);
        }
        if(cat=='Misc'){
            setOp(0);
            setOp10(40);
        }
    };

    const reset = () =>{
        setCat('');
        setOp(40);
        setOp1(0);
        setOp2(0);
        setOp3(0);
        setOp4(0);
        setOp5(0);
        setOp6(0);
        setOp7(0);
        setOp8(0);
        setOp9(0);
        setOp10(0);

    }



    async function wait(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }

      async function Location(){
        let response;
        let responseJson;
        try{
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc1.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL1(responseJson.l1.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc2.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL2(responseJson.l2.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc3.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL3(responseJson.l3.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc4.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL4(responseJson.l4.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc5.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL5(responseJson.l5.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc6.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL6(responseJson.l6.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc7.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL7(responseJson.l7.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc8.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL8(responseJson.l8.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc9.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL9(responseJson.l9.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc10.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL10(responseJson.l10.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc11.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL11(responseJson.l11.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc12.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL12(responseJson.l12.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc13.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL13(responseJson.l13.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc14.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL14(responseJson.l14.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc15.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL15(responseJson.l15.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc16.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL16(responseJson.l16.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc17.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL17(responseJson.l17.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc18.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL18(responseJson.l18.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc19.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL19(responseJson.l19.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc20.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL20(responseJson.l20.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc21.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL21(responseJson.l21.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc22.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL22(responseJson.l22.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc23.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL23(responseJson.l23.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc24.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL24(responseJson.l24.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc25.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL25(responseJson.l25.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc26.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL26(responseJson.l26.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc27.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL27(responseJson.l27.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc28.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL28(responseJson.l28.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc29.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL29(responseJson.l29.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc30.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL30(responseJson.l30.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc31.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL31(responseJson.l31.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc32.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL32(responseJson.l32.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc33.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL33(responseJson.l33.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc34.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL34(responseJson.l34.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc35.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL35(responseJson.l35.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc36.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL36(responseJson.l36.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc37.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL37(responseJson.l37.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc38.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL38(responseJson.l38.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc39.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL39(responseJson.l39.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc40.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL40(responseJson.l40.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc41.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL41(responseJson.l41.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc42.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL42(responseJson.l42.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc43.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL43(responseJson.l43.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc44.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL44(responseJson.l44.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc45.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL45(responseJson.l45.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc46.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL46(responseJson.l46.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc47.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL47(responseJson.l47.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc48.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL48(responseJson.l48.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc49.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL49(responseJson.l49.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc50.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL50(responseJson.l50.split(","));
          response = await fetch('https://fir-test-4dae1.firebaseio.com/Loc51.json');await wait(1000);AbortController;
          responseJson = await response.json();
          setL51(responseJson.l51.split(","));
  
        }catch(error){
          console.error(error);
        }
      }

let data = [{
        value:"ATM"
    },{
        value:"Department"
    },{
        value:"Educational Block"
    },{
        value:"Event Spot"
    },{
        value:"Food"
    },{
        value:"Hostel"
    },{
        value:"Laboratory"
    },{
        value:"Sports"
    },{
        value:"Work Area"
    },{
        value:"Misc"
    }]

    let ATM = [{
        value:l46[0]
    },{
        value:l47[0]
    },{
        value:l48[0]
    }]

    let Department = [{
        value:l3[0]
    },{
        value:l12[0]
    },{
        value:l15[0]
    },{
        value:l51[0]
    },{
        value:l17[0]
    },{
        value:l19[0]
    },{
        value:l30[0]
    },{
        value:l44[0]
    },{
        value:l45[0]
    }]

    let EducationalBlock = [{
        value:l11[0]
    },{
        value:l18[0]
    },{
        value:l27[0]
    },{
        value:l39[0]
    },{
        value:l49[0]
    }]

    let EventSpot = [{
        value:l4[0]
    },{
        value:l7[0]
    },{
        value:l13[0]
    },{
        value:l49[0]
    }]

    let Food = [{
        value:l28[0]
    },{
        value:l34[0]
    },{
        value:l35[0]
    }]

    let Hostel = [{
        value:l1[0]
    },{
        value:l5[0]
    },{
        value:l8[0]
    },{
        value:l14[0]
    },{
        value:l16[0]
    },{
        value:l21[0]
    },{
        value:l23[0]
    },{
        value:l26[0]
    },{
        value:l31[0]
    },{
        value:l32[0]
    },{
        value:l33[0]
    },{
        value:l42[0]
    },{
        value:l43[0]
    }]

    let Laboratory = [{
        value:l10[0]
    },{
        value:l20[0]
    },{
        value:l50[0]
    }]

    let Sports = [{
        value:l6[0]
    },{
        value:l22[0]
    },{
        value:l24[0]
    }]

    let WorkArea = [{
        value:l2[0]
    },{
        value:l25[0]
    },{
        value:l50[0]
    }]

    let Misc = [{
        value:l9[0]
    },{
        value:l29[0]
    },{
        value:l37[0]
    },{
        value:l38[0]
    },{
        value:l41[0]
    }]

    // console.log(cat);
    return(
        <View style={styles.container} onLayout={()=>{Location()}}>
            <Card style={styles.inputContainer}>
            <Text></Text>

            <View style={{opacity:op,height:op}}>
                <Dropdown style={{color:"green"}} label='Categories' data={data} onChangeText={text => setCat(text)}/>
            </View>
            <View style={{opacity:op1,height:op1}}>
                <Dropdown style={{color:"green"}} label={cat} data={ATM} onChangeText={text => setTo(text)} />
            </View>
            <View style={{opacity:op2,height:op2}}>
                <Dropdown style={{color:"green"}} label={cat} data={Department} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op3,height:op3}}>
                <Dropdown style={{color:"green"}} label={cat} data={EducationalBlock} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op4,height:op4}}>
                <Dropdown style={{color:"green"}} label={cat} data={EventSpot} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op5,height:op5}}>
                <Dropdown style={{color:"green"}} label={cat} data={Food} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op6,height:op6}}>
                <Dropdown style={{color:"green"}} label={cat} data={Hostel} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op7,height:op7}}>
                <Dropdown style={{color:"green"}} label={cat} data={Laboratory} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op8,height:op8}}>
                <Dropdown style={{color:"green"}} label={cat} data={Sports} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op9,height:op9}}>
                <Dropdown style={{color:"green"}} label={cat} data={WorkArea} onChangeText={text => setTo(text)}/>
            </View>
            <View style={{opacity:op10,height:op10}}>
                <Dropdown style={{color:"green"}} label={cat} data={Misc} onChangeText={text => setTo(text)}/>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button color="green" title="Next" onPress={()=>{swapper()}} disabled={cat==''} disabled={to!=''} />
            <Text></Text>
            <Button color="green" title="Back" onPress={()=>{reset()}} disabled={cat==''}/>
            <Text></Text>
            <Button color="green" title="show on map" onPress={()=>{props.navigation.navigate('CategoryMarkers',{cat})}} disabled={cat==''}/>
            <Text></Text>
            <Button color="green" title="Get on Take Me There" onPress={() =>{props.navigation.navigate('NITC_TakeMeThere',{to})}} disabled={cat==''} disabled={to==''} />
            </Card>
            
        </View>
    )
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
})

export default ExploreCampus;
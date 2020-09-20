import React, { useState } from 'react';
import { View,Text,Button,StyleSheet,TextInput,Image,Dimensions } from 'react-native';
import {Card} from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';
import ImageViewer from 'react-native-image-zoom-viewer'
import ImageZoom from 'react-native-image-pan-zoom';
import { Dropdown } from 'react-native-material-dropdown';

const BusSchedule = props => {
    const[t11,setT11] = useState('');
    const[t12,setT12] = useState('');
    const[t13,setT13] = useState('');
    const[t14,setT14] = useState('');
    const[t15,setT15] = useState('');
    const[t16,setT16] = useState('');
    const[t2,setT2] = useState('');
    const[t3,setT3] = useState('');

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
      setT11(responseJson.Mega1.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 12.json');await wait(1000);
      responseJson = await response.json();
      setT12(responseJson.Mega2.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 13.json');await wait(1000);
      responseJson = await response.json();
      setT13(responseJson.Mega3.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 14.json');await wait(1000);
      responseJson = await response.json();
      setT14(responseJson.Mega4.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 15.json');await wait(1000);
      responseJson = await response.json();
      setT15(responseJson.Mega5.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 16.json');await wait(1000);
      responseJson = await response.json();
      setT16(responseJson.Mega6.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 2.json');await wait(1000);
      responseJson = await response.json();
      setT2(responseJson.MegaHostel.split(","));
      response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 3.json');await wait(1000);
      responseJson = await response.json();
      setT3(responseJson.SOMS.split(","));

  }catch(error){
    console.log(error);
  }
}



return (
        <View style={styles.container} onLayout={()=>{select()}}>
          <Text style={{fontSize:25,fontWeight: 'bold',color:"green"}}>                          Route 1 - Bus 1</Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{fontWeight: 'bold',color:"green"}}>  from Mega      |         from Mega          |          from Mega          |         from Mega   </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t11[1]}          |           {t11[2]}           |             {t11[3]}             |            {t11[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t12[1]}          |           {t12[2]}           |             {t12[3]}             |            {t12[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t13[1]}          |           {t13[2]}           |             {t13[3]}             |            {t13[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t14[1]}          |           {t14[2]}           |             {t14[3]}             |            {t14[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t15[1]}          |           {t15[2]}             |              {t15[3]}            |            {t15[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"green"}}>    {t16[1]}        |           {t16[2]}             |             {t16[3]}             |            {t16[4]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text></Text>
          <Text></Text>
          
          <Text style={{fontSize:25,fontWeight: 'bold',color:"green"}}>            Evening Route - Circular Route</Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{fontWeight: 'bold',color:"green"}}>                      Mega Hostel                         |                               SOMS           </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{color:"green"}}>                           {t2[1]}                             |                           {t3[1]}                    </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{color:"green"}}>                           {t2[2]}                             |                           {t3[2]}                    </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{color:"green"}}>                           {t2[3]}                             |                           {t3[3]}                    </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{color:"green"}}>                           {t2[4]}                             |                           {t3[4]}                    </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{color:"green"}}>                           {t2[5]}                             |                           {t3[5]}                    </Text>
          <View
            style={{
              borderBottomColor: 'green',
              borderBottomWidth: 1,
            }}
          />
          <Text></Text>
          <View style={{justifyContent:"center",alignContent:"center",flex:1}}>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={290}
                       imageHeight={300}>
                <Image style={{width:290, height:300}}
                       source={require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/bus.jpg')}/>
            </ImageZoom>
          </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'black' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default BusSchedule;

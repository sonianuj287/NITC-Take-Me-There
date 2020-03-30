import React, { useState } from 'react';
import { View,Text,Button,StyleSheet,TextInput } from 'react-native';
import {Card} from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';

const BusSchedule = props => {
    const[t11,setT11] = useState('');
    const[t12,setT12] = useState('');
    const[t13,setT13] = useState('');
    const[t14,setT14] = useState('');
    const[t15,setT15] = useState('');
    const[t16,setT16] = useState('');
    const[t2,setT2] = useState('');
    const[t3,setT3] = useState('');

  async function select11() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 11.json');
      let responseJson = await response.json();
      setT11(responseJson.Mega1.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select12() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 12.json');
      let responseJson = await response.json();
      setT12(responseJson.Mega2.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select13() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 13.json');
      let responseJson = await response.json();
      setT13(responseJson.Mega3.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select14() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 14.json');
      let responseJson = await response.json();
      setT14(responseJson.Mega4.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select15() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 15.json');
      let responseJson = await response.json();
      setT15(responseJson.Mega5.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select16() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 16.json');
      let responseJson = await response.json();
      setT16(responseJson.Mega6.split(","));
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function select2() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 2.json');
      let responseJson = await response.json();
      setT2(responseJson.MegaHostel.split(","));
      // console.log(responseJson);
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }
  async function select3() {
    try {
      let response = await fetch('https://fir-test-4dae1.firebaseio.com/Table 3.json');
      let responseJson = await response.json();
      setT3(responseJson.SOMS.split(","));
      // console.log(responseJson);
      return responseJson.user;
    } catch (error) {
      console.error(error);
    }
  }


    select11();
    select12();
    select13();
    select14();
    select15();
    select16();
    select2();
    select3(); 
return (
        <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight: 'bold'}}>                             Route 1 - Bus 1</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{fontWeight: 'bold'}}>  from Mega      |         from Mega          |          from Mega          |         from Mega   </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t11[0]}          |           {t11[1]}           |             {t11[2]}             |            {t11[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t12[0]}          |           {t12[1]}           |             {t12[2]}             |            {t12[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t13[0]}          |           {t13[1]}           |             {t13[2]}             |            {t13[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t14[0]}          |           {t14[1]}           |             {t14[2]}             |            {t14[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t15[0]}          |           {t15[1]}             |              {t15[2]}            |            {t15[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flexDirection:'row'}}>
          <Text>    {t16[0]}        |           {t16[1]}             |             {t16[2]}             |            {t16[3]}   </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          
          <Text style={{fontSize:20,fontWeight: 'bold'}}>                 Evening Route - Circular Route</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text style={{fontWeight: 'bold'}}>                      Mega Hostel                         |                               SOMS           </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text>                           {t2[0]}                             |                           {t3[0]}                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text>                           {t2[1]}                             |                           {t3[1]}                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text>                           {t2[2]}                             |                           {t3[2]}                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text>                           {t2[3]}                             |                           {t3[3]}                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text>                           {t2[4]}                             |                           {t3[4]}                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default BusSchedule;
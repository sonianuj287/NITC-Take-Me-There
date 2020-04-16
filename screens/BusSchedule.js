import React, { useState } from 'react';
import { FlatList, View,Text,StyleSheet,TextInput,Image,Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BusSchedule = props => {
    const[tab,setTable] = useState('');
    const[tab2,setTable2] = useState('');


    async function retrieve()
    {
        try {
            let response = await fetch('https://fir-test-4dae1.firebaseio.com/sidTab.json');
            let res = await response.json();

           var temp=[];
          for (let i = 0; i < res.length; ++i) {
             temp.push(res[i].split(","));
          }

              setTable(temp);
          //  console.log(temp);

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
          //console.log(newArray);
              setTable2(newArray);
            //console.log(temp);
            return res.user;
          } catch (error) {
            console.error(error);
          }

    }


  retrieve();
  retrieve2();

return (
        <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight: 'bold',color:"white"}}>                             Route 1 - Bus 1</Text>
          <View style={{height:hp("23%"),width:wp("90%")}}>
<Text style={{fontWeight: 'bold',color:"white"}}>        from Mega      |  from Mega |  from Mega |  from Mega |  from Mega </Text>
<FlatList
          data={tab}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{
                 height: 30, borderRadius: 15, backgroundColor: 'green'
            }}>
           <View style={{ backgroundColor: '#5dbccf' }}>
              <Text>    {item[0]}   |   {item[1]}   |   {item[2]}   |   {item[3]}   |   {item[4]}   </Text>
              <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          </View>
            </View>
          )}
        />
        </View>

          <Text style={{fontSize:20,fontWeight: 'bold',color:"white"}}>                 Evening Route - Circular Route</Text>
          <View style={{height:hp("22%"),width:wp("90%")}}>
          <Text style={{fontWeight: 'bold',color:"white"}}>                      Mega Hostel                        |                        SOMS                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
            <Text style={{fontWeight: 'bold',color:"white"}}>                   (Evening Route1)                 |                       (EveningRoute2)           </Text>
            <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

<FlatList
          data={tab2}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{
                height: 30, borderRadius: 15, backgroundColor: 'green'
           }}>

           <View style={{ backgroundColor: '#5dbccf' }}>
              <Text>                      {item[0]}                               |                      {item[1]}                              </Text>
              <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          </View>
            </View>
          )}
        />
        </View>
        <View style={{paddingBottom:"42%"}}></View>
          <View style={{justifyContent:"center",alignContent:"center",flex:1,paddingBottom:"32%"}}>
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
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',backgroundColor:"black" },
    head: { height: 20, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default BusSchedule;

// ,transform: [{ rotate: '90deg'}]
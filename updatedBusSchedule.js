import React, { useState } from 'react';
import { FlatList, View,Text,StyleSheet,TextInput } from 'react-native';

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
          <Text style={{fontSize:20,fontWeight: 'bold'}}>                             Route 1 - Bus 1</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

<Text style={{fontWeight: 'bold'}}>        from Mega      |  from Mega |  from Mega |  from Mega |  from Mega </Text>
         

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
          
          <Text style={{fontSize:20,fontWeight: 'bold'}}>                 Evening Route - Circular Route</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          
          
               
          
          <Text style={{fontWeight: 'bold'}}>                      Mega Hostel                        |                        SOMS                    </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
            <Text style={{fontWeight: 'bold'}}>                   (Evening Route1)                   |                       (EveningRoute2)           </Text>
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
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default BusSchedule;

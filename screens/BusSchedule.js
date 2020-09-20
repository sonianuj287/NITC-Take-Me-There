import React from 'react';
import { View,Text,Button,StyleSheet,TextInput } from 'react-native';
import {Card} from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';

const BusSchedule = props => {
    const state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456'],
          ['a', 'b', 'c', 'd']
        ]
      }
return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 5 }
  });

export default BusSchedule;

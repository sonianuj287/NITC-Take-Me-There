import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Card from '../components/Card';
import Colors from '../Constants/Color';

import Display from 'react-native-display';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {enable: false};
  }

  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  }

  render() {
    return (
      <View>
        <View style={styles.button}>
          <Button
            onPress={this.toggleDisplay.bind(this)}
            title="Show Developers"
            color="#34495e"
            accessibilityLabel="Toggle display for show/hide circles"
          />
        </View>
        <View style={styles.center}>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutLeft"
            enter="fadeInLeft"
          >
            <View style={[styles.circle]} >
            <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/dev2.jpeg')} style = {{ width: 80, height: 80,borderRadius: 50,margin: 10 }} />
            <Text>               tony1</Text>
              </View>
          </Display>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutDown"
            enter="fadeInUp"
          >
            <View style={[styles.circle]} >
            <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/dev2.jpeg')} style = {{ width: 80, height: 80,borderRadius: 50,margin: 10 }} />
            <Text>               ton2</Text>
              </View>
          </Display>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutDown"
            enter="fadeInUp"
          >
            <View style={[styles.circle]} >
            <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/dev2.jpeg')} style = {{ width: 80, height: 80,borderRadius: 50,margin: 10 }} />
            <Text>               tony3</Text>
              </View>
          </Display>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutRight"
            enter="fadeInRight"
          >
            <View style={[styles.circle]} >
            <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/dev2.jpeg')} style = {{ width: 80, height: 80,borderRadius: 50,margin: 10 }} />
<Text>               tony4</Text>
                </View>
          </Display>
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>        
        <View >
            <Card style={styles.inputContainer}>
               
                <View style={styles.buttonContainer}>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                              Nitc Take Me There</Text> 
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                                     Version 1.0</Text> 
                <Text></Text>
                <Text style = {{fontSize:15,fontWeight:"bold"}}>                                                         Contact:</Text>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                           sonianuj287@gmail.com</Text>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                               googoo@gmail.com</Text>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                              sidmuth@gmail.com</Text>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                               chacha@gmail.com</Text>
                <Text style = {{fontSize:20,fontWeight:"bold"}}>                           zoohiKumari@gmail.com</Text>
                </View>
            </Card>
        </View>
      </View>
    );
  }
}

const styles = {
  button: {
    padding: 10,
    margin: 15,
  },
  center: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 50,
    height: 80,
    width: 80,
    margin: 10,
  },
}

AppRegistry.registerComponent('testdisplay', () => About);
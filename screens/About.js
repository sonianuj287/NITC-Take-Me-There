import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,TouchableOpacity,Linking
} from 'react-native';
import Card from '../components/Card';
import Colors from '../Constants/Color';
import TimedSlideshow from 'react-native-timed-slideshow';

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

  // render() {
  //   return (
  //     <View style={{backgroundColor:"black",height:hp("100%")}}>
  //         <View style={{backgroundColor:"black",}}></View>
  //       <View style={styles.button}>
  //         <Button
  //           onPress={this.toggleDisplay.bind(this)}
  //           title="Show Developers"
  //           color="green"
  //           accessibilityLabel="Toggle display for show/hide circles"
  //         />
  //       </View>

  //       <View style={styles.center}>

  //         <Display 
  //           enable={this.state.enable} 
  //           enterDuration={500} 
  //           exitDuration={250}
  //           exit="fadeOutLeft"
  //           enter="fadeInLeft"
  //         >
  //           <View style={[styles.circle]} >
  //           <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-sid.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
  //             </View>
  //         </Display>

  //         <Display 
  //           enable={this.state.enable} 
  //           enterDuration={500} 
  //           exitDuration={250}
  //           exit="fadeOutDown"
  //           enter="fadeInDown"
  //         >
  //           <View style={[styles.circle]} >
  //           <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-rashvi.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
  //             </View>
  //         </Display>

  //         <Display 
  //           enable={this.state.enable} 
  //           enterDuration={500} 
  //           exitDuration={250}
  //           exit="fadeOutUp"
  //           enter="fadeInUp"
  //         >
  //           <View style={[styles.circle]} >
  //           <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-anuj.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
  //             </View>
  //         </Display>

  //         <Display 
  //           enable={this.state.enable} 
  //           enterDuration={500} 
  //           exitDuration={250}
  //           exit="fadeOutDown"
  //           enter="fadeInDown"
  //         >
  //           <View style={[styles.circle]} >
  //           <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-deep.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
  //               </View>
  //         </Display>

  //         <Display 
  //           enable={this.state.enable} 
  //           enterDuration={500} 
  //           exitDuration={250}
  //           exit="fadeOutRight"
  //           enter="fadeInRight"
  //         >
  //           <View style={[styles.circle]} >
  //           <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-juhi.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
  //               </View>
  //         </Display>

  //       </View>
  //       <Text></Text>
  //       <Text></Text>
  //       <Text></Text>        
  //       <View style={{width:wp("90%"),paddingLeft:"10%"}}>
  //           <Card style={styles.inputContainer}>
               
  //               <View style={styles.buttonContainer}>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                     Nitc Take Me There</Text> 
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                            Version 1.0</Text> 
  //               <Text></Text>
  //               <Text style = {{fontSize:15,fontWeight:"bold"}}>                                           Contacts:</Text>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                   siddhartha@gmail.com</Text>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                       rashvi@gmail.com</Text>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                  sonianuj287@gmail.com</Text>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                   Deepanshu@gmail.com</Text>
  //               <Text style = {{fontSize:20,fontWeight:"bold"}}>                   juhiKumari@gmail.com</Text>
  //               </View>
  //           </Card>
  //           <View style={{height:hp("35%")}}></View>
  //           <Card style={styles.inputContainer1}>
  //           <Button color="green" title = "Back" onPress={()=>{this.props.navigation.navigate('Welcome')}}/>
  //           </Card>
  //       </View>
  //     </View>
  //   );
  // }
  render() {
    const items = [
      {
        uri: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-sid.jpg'),
        title: "Siddhartha Agarwal",
        text: "siddhartha_m180258@nitc.ac.in",
      },
      {
        uri: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-rashvi.jpg'),
        title: "Rashvi Kumari",
        text: "rashvi_m180269@nitc.ac.in",
      },
      {
        uri: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-anuj.jpg'),
        title: "Anuj Soni",
        text: "anuj_m180254@nitc.ac.in",
      },
      {
        uri: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-deep.jpg'),
        title: "Deepanshu Rathore",
        text: "deepanshu_m180273@nitc.ac.in",
      },
        {
            uri: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/developer-juhi.jpg'),
            title: "Juhi Kumari",
            text: "juhi_m180277@nitc.ac.in",
        }
    ]

    return (
      <View style={{height:"100%",backgroundColor:"black"}}>
        <View style={{height:"70%"}}>
        <TimedSlideshow
            items={items}
        />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{color:"white",fontSize:30,fontWeight:"bold"}}>            NITC Take Me There 1.0</Text>
        <View style={{flexDirection:"row",justifyContent:"center",alignContent:"center"}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sonianuj287/NITC-Take-Me-There')}>
        <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/github-icon-23.png')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://expo.io/dashboard/cupcake287')}>
        <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/expologo.jpg')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/35929319/admin/')}>
        <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/linkedin-icon.png')} style = {{ width: 60, height: 60,borderRadius: 50,margin: 10 }} />
        </TouchableOpacity>
        </View>
        </View>
        <View style={{height:"10%"}}></View>
        <View style={{flexDirection:"row"}}>
          <View style={{width:"8%"}}></View>
        <Card style={styles.inputContainer1}>
        <Button color="green" title = "Back" onPress={()=>{this.props.navigation.navigate('Welcome')}}/>
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
    height: 60,
    width: 60,
    margin: 9,
  },
  inputContainer1: {
    width:350,
    height:180,
    maxWidth: '100%',
    fontSize:20, 
   
}
}

AppRegistry.registerComponent('testdisplay', () => About);
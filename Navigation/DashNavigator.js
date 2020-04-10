// import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import Icon from '@expo/vector-icons/Ionicons';

// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer,createSwitchNavigator} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';


import Login from '../screens/Login';
import Register from '../screens/Register';
import DashBoard from '../screens/DashBoard';
import UsersSwitch from '../screens/UsersSwitch';
import MapScreen from '../screens/MapScreen';
import BusSchedule from '../screens/BusSchedule';
import MapInputScreen from '../screens/MapInputScreen';
import StaticImageScreen from '../screens/StaticImageScreen';
import EditBusSchedule from '../screens/EditBusSchedule';
import About from '../screens/About';
import ExploreCampus from '../screens/ExploreCampus';
import SavedPlaces from '../screens/SavedPlaces';
import CurrentLocation from '../screens/CurrentLocation';
import ShareLocation from '../screens/ShareLocation';
import EditPath from '../screens/EditPath';
import Welcome from '../screens/Welcome';
import Drawer from '../screens/Drawer';
import TakeMeThere from '../screens/TakeMeThere';
import CategoryMarkers from '../screens/CategoryMarkers';
import SavedPlacesMap from '../screens/SavedPlacesMap';






// Welcome:Welcome,
// UsersSwitch:UsersSwitch,
// Login: Login,
// Register: Register,
// DashBoard: DashBoard,
// map: MapScreen,
// bus: BusSchedule,
// mapInput: MapInputScreen,
// image: StaticImageScreen,
// editbus: EditBusSchedule,
// about:About,
// explore:ExploreCampus,
// save:SavedPlaces,
// location:CurrentLocation,
// share:ShareLocation,
// editpath:EditPath

// export default createAppContainer(DashNavigator);


import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,SafeAreaView,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import {Container,Content,Header,Body} from 'native-base'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


import {  
    createSwitchNavigator,  
    createAppContainer,  
} from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


const MapInputStackNavigator = createStackNavigator(
  {
        TakeMeThere: MapInputScreen,
        Map: MapScreen,
        StaticMapImage: StaticImageScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const SavedPlacesStackNavigator = createStackNavigator(
    {
        SavedPlaces:SavedPlaces,
        SavedPlacesMap:SavedPlacesMap
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  );


  const ExploreStackNavigator = createStackNavigator(
    {
          ExploreCampus:ExploreCampus,
          CategoryMarkers:CategoryMarkers
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  );



  const BusScheduleStackNavigator = createStackNavigator(
    {
        BusSchedule: BusSchedule,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  );

  const ShareLocationStackNavigator = createStackNavigator(
    {
        ShareCurrentLocation:ShareLocation,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          drawerIcon: ( <Icon name="md-menu" size={30} style={{ width: 24 }} 
    color="#000" />),
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  );

  const ExitSwitchNavigator = createSwitchNavigator(
    {
        Welcome:Welcome,
        Login:Login,
        DashBoard: DashBoard,
        
        
    }
  );

  const AboutNavigator = createStackNavigator(
      {
        about:About
      }
  )
  const EditBusNavigator = createStackNavigator(
    {
        editbus: EditBusSchedule
    }
)
const EditPathNavigator = createStackNavigator(
    {
        editpath:EditPath
    }
)



const AppDrawerNavigator = createDrawerNavigator({
    TakeMeThere:{
        screen:MapInputStackNavigator,
        navigationOptions:({
          drawerIcon: () => (
            <Ionicons name="ios-home" size={20} />
          )
          })
    },
  Explore: {
    screen: ExploreStackNavigator,
    navigationOptions:({
      drawerIcon: () => (
        <Ionicons name="ios-search" size={20} />
      )
      })
  },
  SavedPlaces:{
      screen:SavedPlacesStackNavigator,
      navigationOptions:({
        drawerIcon: () => (
          <Ionicons name="ios-pin" size={20} />
        )
        })
  },
  ShareLocation:{
      screen:ShareLocationStackNavigator,
      navigationOptions:({
        drawerIcon: () => (
          <Ionicons name="md-share" size={20} />
        )
        })
  },
  BusSchedule:{
      screen:BusScheduleStackNavigator,
      navigationOptions:({
        drawerIcon: () => (
          <Ionicons name="md-bus" size={20} />
        )
        })
  },
  Exit:{
    screen:ExitSwitchNavigator,
    navigationOptions:({
      drawerIcon: () => (
        <Ionicons name="md-exit" size={20} />
      )
      })
    }
},{
  contentComponent: (props) => (
    <Container>
      <Header style={{height:170,backgroundColor:"black"}} androidStatusBarColor="black">
        <Body>
        <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/NITC-Take-Me-There/StaticImages/icon.png')} style = {{ width: 150, height: 150,marginLeft:"20%" }} />
        </Body>
      </Header>
      <DrawerItems {...props} />
      <Content>
      </Content>
    </Container>
   )
});




const AppSwitchNavigator = createSwitchNavigator({
    // TakeMeThere:{screen:TakeMeThere},
  Welcome: { screen: Welcome },
  Dashboard: { screen: AppDrawerNavigator },
  About:{screen:AboutNavigator},
  EditBus:{screen:EditBusNavigator},
  EditPath:{screen:EditPathNavigator},
  
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
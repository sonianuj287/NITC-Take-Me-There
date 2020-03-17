
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import DashBoard from '../screens/DashBoard';
import UsersSwitch from '../screens/UsersSwitch';
import mapScreen from '../screens/MapScreen';
import BusSchedule from '../screens/BusSchedule';

const DashNavigator = createStackNavigator({
    UsersSwitch:UsersSwitch,
    Login: Login,
    Register: Register,
    DashBoard: DashBoard,
    map: mapScreen,
    bus: BusSchedule
});

export default createAppContainer(DashNavigator);


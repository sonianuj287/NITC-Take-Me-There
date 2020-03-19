
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import DashBoard from '../screens/DashBoard';
import UsersSwitch from '../screens/UsersSwitch';
import MapScreen from '../screens/MapScreen';
import BusSchedule from '../screens/BusSchedule';
import MapInputScreen from '../screens/MapInputScreen';

const DashNavigator = createStackNavigator({
    UsersSwitch:UsersSwitch,
    Login: Login,
    Register: Register,
    DashBoard: DashBoard,
    map: MapScreen,
    bus: BusSchedule,
    mapInput: MapInputScreen
});

export default createAppContainer(DashNavigator);


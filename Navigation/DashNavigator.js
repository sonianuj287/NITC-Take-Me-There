
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

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

const DashNavigator = createStackNavigator({
    UsersSwitch:UsersSwitch,
    Login: Login,
    Register: Register,
    DashBoard: DashBoard,
    map: MapScreen,
    bus: BusSchedule,
    mapInput: MapInputScreen,
    image: StaticImageScreen,
    editbus: EditBusSchedule,
    about:About,
    explore:ExploreCampus,
    save:SavedPlaces,
    location:CurrentLocation,
    share:ShareLocation
});

export default createAppContainer(DashNavigator);


import React from 'react';
import { View } from 'react-native';
 
import MapView,{Polyline} from 'react-native-maps';
 
import PolylineDirection from '@react-native-maps/polyline-direction';
 
const origin = { latitude: 11.322159, longitude: 75.934190 };
const destination = { latitude: 11.320205, longitude: 75.931967 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyAeicbYZGwVCg70Ld-9mMDhUn1a0q4FPBo';
 
function MyComponent() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 11.322159,
          longitude: 75.934190,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
          <Polyline origin={origin} destination={destination} strokeWidth={7} strokeColor="#2ecc71" geodesic={true} />
        <PolylineDirection
          origin={origin}
          destination={destination}
          apiKey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#12bc00"
        />
      </MapView>
    </View>
  );
}
 
export default MyComponent;
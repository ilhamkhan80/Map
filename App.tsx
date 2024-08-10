import { StyleSheet, View } from 'react-native'
import { useEffect,  } from 'react'

import MapView,{Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'


const App = () => {
    useEffect(()=>{
    getCurrentLocation()
  },[])
  const getCurrentLocation = ()=>{
    Geolocation.getCurrentPosition((val)=>console.log(val.coords))
  
  }
    
  return (
    <View>



       <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
            }}
            style={{height:'100%',width:'100%'}}>


                   <Marker
        coordinate={{  latitude: 37.78825,
          longitude: -122.4324,}}/>




       </MapView>
       
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
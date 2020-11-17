import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
*/

export default class extends React.Component {
  state = {
    isLoading: true
  }
  
  
  
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      // Send to API and get weather
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
    
    
  }
  
  componentDidMount() {
    this.getLocation();
  }
  
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
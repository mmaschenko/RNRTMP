/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';
console.dir(NativeModules.CalendarManager);
// NativeModules.CalendarManager.addEvent('One', 'Two', 3);


import RNLive from 'react-native-video-stream'
console.log('RNLive', RNLive)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor (props){
    super(props);
    this.state = {
      started: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
       
        <TouchableOpacity onPress={()=>{
          this.setState({
            started: true
          })
        }}>
          <Text style={styles.instructions}>
            Start
          </Text>
        </TouchableOpacity>
        <RNLive.Stream
          started={this.state.started} // start your stream
          cameraFronted={true} // camera front or back
          url="rtmp://live.us.picarto.tv/testptv/ptv_350434_d278efca5f0c'" // your rtmp publish url
          landscape={false} // landscape mode
          onReady={() => {}} // streaming ready
          onPending={() => {}} // streaming ready to start
          onStart={() => {}} // streaming start
          onError={() => {}} // straming error
          onStop={() => {}} // streaming stop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

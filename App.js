import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header heading="I am a prop!"/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F5FCFF',
    flex:1,
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

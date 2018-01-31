import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header heading={'Albums'} />
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('albums', () => App);



// Sample App

// import React, { Component } from 'react';
// import { Text, AppRegistry } from 'react-native';
//
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };
//
// AppRegistry.registerComponent('albums', () => App);

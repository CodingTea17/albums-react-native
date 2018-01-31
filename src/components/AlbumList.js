import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      // The albums are stored in _bodyText
      console.log(JSON.parse(res._bodyText));
    });
  }

  render() {
    return (
      <View>
        <Text>Albums</Text>
      </View>
    );
  }
};

export default AlbumList;

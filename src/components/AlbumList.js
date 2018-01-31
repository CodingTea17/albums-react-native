import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  };

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
      this.setState({ albums: JSON.parse(res._bodyText)});
    });
  }

  renderAlbums() {
    return (
      this.state.albums.map(album =>
        <Text key={album.title}>{album.title}</Text>
      )
    );
  }

  render() {
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
};

export default AlbumList;

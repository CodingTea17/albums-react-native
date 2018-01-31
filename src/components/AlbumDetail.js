import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = ({ album }) => {
  return (
    <Text>{ album.title }</Text>
  )
};

export default AlbumDetail;

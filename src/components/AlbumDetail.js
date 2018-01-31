import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <Text>Title: { album.title }</Text>
      <Text>Artist: { album.artist }</Text>
    </Card>
  );
};

export default AlbumDetail;

import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Header from './src/components/uikit/Header';
import ImageCard from './src/components/uikit/ImageCard';

const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json';

export default function App() {
  const [title] = useState('stargate');
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Header title={title} />
      <ImageCard />
    </View>
  );
}

import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { width } from '../../constants';

interface IProps {}

interface Style {
  // viewStyles: ViewStyle;
  h1: TextStyle;
}

const ImageCard: FC<{}> = () => {
  const { h1 } = styles;

  return (
    <View>
      <Text style={h1}>ImageCard</Text>;{/* <Image /> */}
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: width / 2.4,
  },
});

export default ImageCard;

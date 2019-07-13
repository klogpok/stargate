import React, { FC } from 'react';
import { Text, View, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { string } from 'prop-types';

interface IProps {
  title: string;
}

interface Style {
  viewStyles: ViewStyle;
  textStyles: TextStyle;
}

const Header: FC<IProps> = ({ title }) => {
  const { viewStyles, textStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  viewStyles: {
    height: 116,
    backgroundColor: '#30d0fe',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 22,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyles: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    textTransform: 'uppercase',
  },
});

export default Header;

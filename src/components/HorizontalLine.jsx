import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = ({ color, thickness, style }) => {
  return (
    <View
      style={[
        styles.line,
        { borderBottomColor: color || 'black', borderBottomWidth: thickness || 1 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    marginVertical: 5, // Adjust the vertical margin as needed
  },
});

export default HorizontalLine;

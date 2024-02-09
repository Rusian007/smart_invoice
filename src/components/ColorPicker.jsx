

import React from 'react';
import ColorPicker from 'react-native-wheel-color-picker';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Picker = ({handleColorChange}) =>{

 

    return(
        <View style={{ marginTop: 20 }}>
        <ColorPicker
          swatchesOnly
          onColorChange={handleColorChange}
          thumbSize={50}
          sliderSize={40}
          noSnap
          row={false}
          useNativeDriver={true}
          useNativeLayout={true}
          palette={[
            '#ed1c24',
            '#d11cd5',
            '#1633e6',
            '#00aeef',
            '#00c85d',
            '#57ff0a',
            '#ffde17',
            '#f26522',
          ]}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  
  });
  
export default Picker;
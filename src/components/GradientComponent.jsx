import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'react-native-gradients';
import { COLORS } from '../utils/colors';

function GradientComponent() {

    const colorList = [
        { offset: '0%', color: COLORS.backgroundColorLighter, opacity: '1' },
        { offset: '29%', color: COLORS.backgroundColorLight, opacity: '1' },
        { offset: '67%', color: COLORS.backgroundColor, opacity: '1' },
        { offset: '100%', color: COLORS.backgroundColor, opacity: '1' }
      ];
      const [angle, setAngle] = React.useState(-95);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAngle(angle => angle + 1);
    }, 100);
    return () => clearInterval(interval);
  })

  return (
    <View style={styles.container}>
    <LinearGradient colorList={colorList} angle={angle} />
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },

});

export default GradientComponent
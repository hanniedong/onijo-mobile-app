import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface LinearGradientBackgroundProps {
  children: JSX.Element
}


const LinearGradientBackground = ({children}: LinearGradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={['#5123E9', '#7049F0']}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    top: 0,
    justifyContent: 'space-around'
  },
});

export default LinearGradientBackground;
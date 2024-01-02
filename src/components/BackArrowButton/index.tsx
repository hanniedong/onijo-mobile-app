import React, { VFC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SPACING } from '../../common';
import BackArrow from '../../assets/svg/BackArrow';

const BackArrowButton: VFC = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.icon} onPress={navigation.goBack}>
      <BackArrow />
    </TouchableOpacity>
  );
};

export default BackArrowButton;

const styles = StyleSheet.create({
  icon: {
    marginLeft: SPACING[2]
  }
})
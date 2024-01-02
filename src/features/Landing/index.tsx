import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradientBackground from "../../components/LinearGradientBackground";
import CustomText from "../../components/Text/CustomText";
import LAYOUT from "../../common/styles/layout";
import Button from "../../components/Button";
import { AUTH, LOGIN } from "../../routes/constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthNavigatorParamsList } from "../../routes/AuthNavigator";

const Landing: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigatorParamsList>>();

  const onLoginButtonPress = () => {
    navigation.navigate(AUTH,{ screen: LOGIN})
  }
  
  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <CustomText title1 inverse>
            ONIJO
          </CustomText>
          <CustomText body1 inverse style={styles.text}>
            Welcome to Onijo, a community of mentors and mentees in the dance
            industry.
          </CustomText>
        </View>
        <View style={styles.footerContainer}>
          <Button inverted={true} title="Join Onijo" onPress={() => {}}/>
          <Button title="Account Login" onPress={onLoginButtonPress} />
        </View>
      </View>
    </LinearGradientBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: LAYOUT[4],
  },
  textContainer: { alignItems: "center", flex:1, justifyContent: 'flex-end' },
  text: { textAlign: "center" },
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
});

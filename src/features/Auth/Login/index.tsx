import React, { VFC, useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import * as Application from 'expo-application';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradientBackground from '../../../components/LinearGradientBackground';
import CustomText from '../../../components/Text/CustomText';
import { COLORS, SPACING } from '../../../common';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';


const LoginScreen: React.FC = function () {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
//   const { login } = useAuth();
//   const { setUserInStoreAndState } = useUser()
//   const navigation = useNavigation<LoginScreenProp>()
//   const onSubmit = async () => {
//     setError('')
//     try {
//       setLoading(true)
//       const user = await login(email, password)
//       await setUserInStoreAndState(user)
//       setLoading(false)
//     } catch (e) {
//       setError(e.message)
//       setLoading(false)
//     }
//   };

  return (
    <LinearGradientBackground>
      <KeyboardAvoidingView
        contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}
      >
        <View />
        <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
          <CustomText title1 style={{ color: COLORS.WHITE, paddingVertical: SPACING[5] }}>ONIJO</CustomText>
        </View>
        <View>
          <CustomText heading2 style={{ color: COLORS.WHITE, paddingBottom: SPACING[3] }}> Let's get you logged in.</CustomText>

          <TextInput
            value={email}
            autoCapitalize={'none'}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            value={password}
            autoCapitalize={'none'}
            onChangeText={setPassword}
            placeholder="Password"
            password
            autoFocus={false}
          />
          <View style={{ flexDirection: 'row-reverse' }}>
            {/* <Pressable onPress={() => navigation.navigate(FORGOT_PASSWORD)}><CustomText body1 style={{ color: COLORS.WHITE }}>Forgot password?</CustomText></Pressable> */}
          </View>
          {error !== '' && <CustomText error>{error}</CustomText>}
        </View>
        <View >
          <Button
            inverted={true}
            loading={loading}
            disabled={!email || !password}
            onPress={() => {}}
            title={'Login'}
          />
          <View style={{ alignItems: 'center', paddingTop: SPACING[4] }}>
            {/* <CustomText body1 style={{ color: COLORS.WHITE }}>New to Onijo? <Pressable onPress={() => navigation.navigate(ENROLLMENT)}><CustomText link style={{ color: COLORS.WHITE }}>Register</CustomText></Pressable></CustomText> */}
          </View>
        </View>
        <View />
      </ KeyboardAvoidingView >
    </LinearGradientBackground >
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: { width: '75%', marginBottom: 15 },
});
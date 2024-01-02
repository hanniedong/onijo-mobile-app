import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LANDING, LOGIN, APP, FORGOT_PASSWORD, VERIFICATION_CODE_FOR_PASSWORD_RESET, RESET_PASSWORD, AUTH } from './constants';
import LoginScreen from '../features/Auth/Login';
import { SPACING } from '../common';
import BackArrowButton from '../components/BackArrowButton';

const Stack = createStackNavigator();

export type AuthNavigatorParamsList = {
    'Auth': {screen:string},
    'Login': undefined
}

const AuthNavigator: React.FC = function () {
  return (
    <Stack.Navigator
      initialRouteName={AUTH}
    >
      <Stack.Screen name={LOGIN} component={LoginScreen}
        options={{
          headerLeft: BackArrowButton,
          headerLeftContainerStyle: { paddingLeft: SPACING[5] },
          headerTransparent: true,
          headerTitle: ''
        }}
      />
      {/* <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword}
        options={{
          headerLeft: BackArrowButton,
          headerLeftContainerStyle: { paddingLeft: SPACING[5] },
          headerTransparent: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen name={VERIFICATION_CODE_FOR_PASSWORD_RESET} component={VerificationCodeForPasswordReset}
        options={{
          headerLeft: BackArrowButton,
          headerLeftContainerStyle: { paddingLeft: SPACING[5] },
          headerTransparent: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen name={RESET_PASSWORD} component={ResetPassword}
        options={{
          headerLeft: BackArrowButton,
          headerLeftContainerStyle: { paddingLeft: SPACING[5] },
          headerTransparent: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen name={APP} component={AppNavigator}
        options={{
          headerLeftContainerStyle: { paddingLeft: SPACING[5] },
          headerTransparent: true,
          headerTitle: '',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
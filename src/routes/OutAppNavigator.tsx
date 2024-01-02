import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AUTH, ENROLLMENT, LANDING } from './constants';
import Landing from '../features/Landing';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const OutAppNavigator: React.FC = function () {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={LANDING}
        component={Landing}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={AUTH}
        component={AuthNavigator}
        options={{
          headerShown: false
        }}
      />
      {/* <Stack.Screen name={ENROLLMENT} component={EnrollmentNavigator} options={{
        headerShown: false
      }} /> */}
    </Stack.Navigator>
  );
};

export default OutAppNavigator;
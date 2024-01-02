import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME } from './constants';
import Home from '../features/Home';

const Stack = createStackNavigator();

const InAppNavigator: React.FC = function () {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default InAppNavigator;
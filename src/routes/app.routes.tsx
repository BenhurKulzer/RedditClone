import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View} from '../screens/View';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="View">
      <Stack.Screen name="View" component={View} />
    </Stack.Navigator>
  );
}

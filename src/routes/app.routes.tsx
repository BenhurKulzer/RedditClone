import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from '../screens/View';
import { MyTabs } from './tab.routes';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ title: 'reddit/r/pics' }}
      />

      <Stack.Screen
        name="View"
        component={View}
        options={({ route }) => ({ title: route.params?.title || 'reddit/r/pics', headerBackTitle: 'Back' })}
      />
    </Stack.Navigator>
  );
}

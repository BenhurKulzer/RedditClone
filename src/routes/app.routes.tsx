import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from '../screens/View';
import { MyTabs } from './tab.routes';

type ViewParams = {
  url: string;
  title: string;
};

type AppRoutesData = {
  Home: undefined;
  View: ViewParams;
}

export type StackNavigatorRoutesData =
  NativeStackNavigationProp<AppRoutesData>;

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
        options={
          ({ route }: { route: StackNavigationProp<AppRoutesData, 'View'> }) => (
            {
              title: route.params ? route.params.title : 'reddit/r/pics',
              headerBackTitle: 'Back'
            }
          )
        }
      />
    </Stack.Navigator>
  );
}

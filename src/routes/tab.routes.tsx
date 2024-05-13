import React from 'react';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Top } from '../screens/Top';
import { Hot } from '../screens/Hot';
import { New } from '../screens/New';
import { Controversial } from '../screens/Controversial';
import theme from '../theme';

type TabRoutesData = {
  New: undefined;
  Top: undefined;
  Hot: undefined;
  Controversial: undefined;
};

export type AppNavigatorRoutesData =
  MaterialTopTabNavigationProp<TabRoutesData>;

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="New"
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: theme.COLORS.PRIMARY }
      }}
    >
      <Tab.Screen name="New" component={New} />

      <Tab.Screen name="Top" component={Top} />

      <Tab.Screen name="Hot" component={Hot} />

      <Tab.Screen name="Controversial" component={Controversial} />
    </Tab.Navigator>
  );
}

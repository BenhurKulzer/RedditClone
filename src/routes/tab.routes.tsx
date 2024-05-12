import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Top} from '../screens/Top';
import {Hot} from '../screens/Hot';
import {New} from '../screens/New';
import {Popular} from '../screens/Popular';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="New">
      <Tab.Screen name="New" component={New} />

      <Tab.Screen name="Top" component={Top} />

      <Tab.Screen name="Hot" component={Hot} />

      <Tab.Screen name="Controversial" component={Popular} />
    </Tab.Navigator>
  );
}

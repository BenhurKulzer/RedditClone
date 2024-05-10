import React, {useEffect, useState} from 'react';
import {addEventListener} from '@react-native-community/netinfo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Top} from '../screens/Top';
import {Hot} from '../screens/Hot';
import {New} from '../screens/New';
import {Popular} from '../screens/Popular';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const listener = addEventListener(state => {
      return setIsOnline(state.isConnected ?? false);
    });

    console.log(listener);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="New"
      screenOptions={{
        tabBarStyle: {backgroundColor: isOnline ? 'green' : 'red'},
      }}>
      <Tab.Screen name="New" component={New} />

      <Tab.Screen name="Top" component={Top} />

      <Tab.Screen name="Hot" component={Hot} />

      <Tab.Screen name="Controversial" component={Popular} />
    </Tab.Navigator>
  );
}

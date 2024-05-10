import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

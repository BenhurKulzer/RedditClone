import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { addEventListener } from '@react-native-community/netinfo';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Event listener who get the actual state of user internet connection
    addEventListener(state => {
      if (state.isConnected !== isOnline) {
        Toast.show({
          position: 'bottom',
          type: state.isConnected ? 'success' : 'error',
          text1: state.isConnected
            ? 'You are Online!'
            : 'You are offline :(',
          text2: state.isConnected
            ? 'Let`s use our app!'
            : 'Navigate on the app using data saved in the local database'
        });

        return setIsOnline(state.isConnected ?? false);
      }
    });
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

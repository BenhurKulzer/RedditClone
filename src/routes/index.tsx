import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {addEventListener} from '@react-native-community/netinfo';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';

export function Routes() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    addEventListener(state => {
      if (state.isConnected !== isOnline) {
        Toast.show({
          position: 'bottom',
          type: state.isConnected ? 'success' : 'error',
          text1: state.isConnected
            ? 'Você está conectado!'
            : 'Você está offline :(',
          text2: state.isConnected
            ? 'Aproveite para usar seu app!'
            : 'Navegue pelo app usando dados salvos no banco de dados local',
        });

        return setIsOnline(state.isConnected ?? false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

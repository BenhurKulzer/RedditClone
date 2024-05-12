import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import {ThemeProvider} from 'styled-components';

import {Routes} from './src/routes';
import theme from './src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Routes />

        <Toast />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

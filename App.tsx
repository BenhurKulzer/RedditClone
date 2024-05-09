import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import {Routes} from './src/routes';
import theme from './src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

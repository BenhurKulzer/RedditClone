import React, { useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import ScreenGuardModule from 'react-native-screenguard';

import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';
import theme from './src/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AnimatedSplashScreen from './src/components/Splash';

function App() {
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  ScreenGuardModule.register(
    {
      backgroundColor: theme.COLORS.SECONDARY,
      timeAfterResume: 2000
    }
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        staleTime: 5 * 60 * 1000
      }
    }
  });

  if (!splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Routes />

          <Toast />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

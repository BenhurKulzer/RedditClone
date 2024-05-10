import React from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export function View() {
  const {params} = useRoute();

  return (
    <WebView
      source={{uri: `https://reddit.com${params.url}`}}
      mixedContentMode="compatibility"
      cacheEnabled
    />
  );
}

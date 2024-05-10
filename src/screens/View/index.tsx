import React from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export function View() {
  const {params} = useRoute();

  return (
    <WebView
      source={{uri: 'https://i.redd.it/b7pzgys7gdzc1.jpeg'}}
      mixedContentMode="compatibility"
      cacheEnabled
    />
  );
}

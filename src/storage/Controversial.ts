import AsyncStorage from '@react-native-async-storage/async-storage';

import {red_controversial} from './Config';

export async function savePosts(posts) {
  await AsyncStorage.setItem(red_controversial, JSON.stringify(posts));
}

export async function getPosts() {
  const storage = await AsyncStorage.getItem(red_controversial);

  const userData = storage ? JSON.parse(storage) : {};

  return userData;
}

export async function removePost() {
  await AsyncStorage.removeItem(red_controversial);
}

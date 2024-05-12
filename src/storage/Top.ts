import AsyncStorage from '@react-native-async-storage/async-storage';

import {red_top} from './Config';

export async function savePosts(posts) {
  await AsyncStorage.setItem(red_top, JSON.stringify(posts));
}

export async function getPosts() {
  const storage = await AsyncStorage.getItem(red_top);

  const userData = storage ? JSON.parse(storage) : {};

  return userData;
}

export async function removePost() {
  await AsyncStorage.removeItem(red_top);
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MMKV} from 'react-native-mmkv';

import {red_hot} from './Config';

const storage = new MMKV();

export function savePosts(posts) {
  storage.set(red_hot, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(red_hot);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

export async function removePost() {
  await AsyncStorage.removeItem(red_hot);
}

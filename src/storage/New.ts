import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';

import { rednew } from './Config';

const storage = new MMKV();

export function savePosts(posts) {
  storage.set(rednew, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(rednew);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

export async function removePost() {
  await AsyncStorage.removeItem(rednew);
}

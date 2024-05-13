import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';

import { redtop } from './Config';

const storage = new MMKV();

export function savePosts(posts) {
  storage.set(redtop, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(redtop);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

export async function removePost() {
  await AsyncStorage.removeItem(redtop);
}

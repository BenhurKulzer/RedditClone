import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';

import { redcontroversial } from './Config';

const storage = new MMKV();

export function savePosts(posts) {
  storage.set(redcontroversial, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(redcontroversial);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

export async function removePost() {
  await AsyncStorage.removeItem(redcontroversial);
}

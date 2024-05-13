import { MMKV } from 'react-native-mmkv';

import { rednew } from './Config';

import { PostDTO } from '../dtos/PostDTO';

const storage = new MMKV();

export function savePosts(posts: PostDTO) {
  storage.set(rednew, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(rednew);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

import { MMKV } from 'react-native-mmkv';

import { redhot } from './Config';

import { PostDTO } from '../dtos/PostDTO';

const storage = new MMKV();

export function savePosts(posts: PostDTO) {
  storage.set(redhot, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(redhot);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

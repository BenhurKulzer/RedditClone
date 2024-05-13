import { MMKV } from 'react-native-mmkv';

import { redtop } from './Config';

import { PostDTO } from '../dtos/PostDTO';

const storage = new MMKV();

export function savePosts(posts: PostDTO) {
  storage.set(redtop, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(redtop);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

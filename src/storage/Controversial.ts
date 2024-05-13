import { MMKV } from 'react-native-mmkv';

import { redcontroversial } from './Config';

import { PostDTO } from '../dtos/PostDTO';

const storage = new MMKV();

export function savePosts(posts: PostDTO) {
  storage.set(redcontroversial, JSON.stringify(posts));
}

export function getPosts() {
  const data = storage.getString(redcontroversial);

  const postData = data ? JSON.parse(data) : {};

  return postData;
}

import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {formatDistanceToNow} from 'date-fns';

import {
  CardImage,
  CardInfoAuthor,
  CardInfoComments,
  CardInfoScore,
  CardInfoWrapper,
  CardTitle,
  CardWhen,
  CardWrapper,
  Container,
} from './styles';

export default function Card({data}) {
  const {navigate} = useNavigation();

  const fallbackImg =
    'https://i.pinimg.com/736x/3a/0c/b1/3a0cb129f81e99e573807014327c1c4b.jpg';

  const relativeTime = formatDistanceToNow(new Date(data.data.created * 1000), {
    addSuffix: true,
  });

  return (
    <Container
      onPress={() =>
        navigate('View', {url: data.data.permalink, title: data.data.title})
      }>
      <CardImage
        source={{
          uri:
            data.data.thumbnail !== 'nsfw' ? data.data.thumbnail : fallbackImg,
        }}
      />

      <CardWrapper>
        <CardWhen>{relativeTime}</CardWhen>

        <CardTitle>{data.data.title}</CardTitle>

        <CardInfoWrapper>
          <CardInfoAuthor>{data.data.author}</CardInfoAuthor>
          <CardInfoScore>Score: {data.data.score}</CardInfoScore>
          <CardInfoComments>{data.data.num_comments} comments</CardInfoComments>
        </CardInfoWrapper>
      </CardWrapper>
    </Container>
  );
}

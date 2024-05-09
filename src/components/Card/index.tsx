import React from 'react';
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
  const relativeTime = formatDistanceToNow(new Date(data.data.created * 1000), {
    addSuffix: true,
  });

  return (
    <Container>
      <CardImage source={{uri: data.data.thumbnail}} />

      <CardWrapper>
        <CardWhen>{relativeTime}</CardWhen>

        <CardTitle>{data.data.title}</CardTitle>

        <CardInfoWrapper>
          <CardInfoAuthor>{data.data.author}</CardInfoAuthor>
          <CardInfoScore>{data.data.score}</CardInfoScore>
          <CardInfoComments>{data.data.num_comments}</CardInfoComments>
        </CardInfoWrapper>
      </CardWrapper>
    </Container>
  );
}

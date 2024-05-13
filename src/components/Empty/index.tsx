import React from 'react';

import EmptySvg from '../../assets/emptySvg';
import { Container, EmptyDescription } from './styles';

export default function Empty() {
  return (
    <Container>
      <EmptySvg />

      <EmptyDescription>No data</EmptyDescription>
    </Container>
  );
}

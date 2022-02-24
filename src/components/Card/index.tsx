import React from 'react';

import unitedImg from '../../assets/united.png'

import { Container, Image, Title, Foundation } from './styles';

export function Card() {
  return (
    <Container
      animation="rubberBand"
      duration={2000}
    >
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        duration={500}
        direction="alternate"
        iterationCount="infinite"
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}
import React from 'react';

import { Container } from './styles';

type ImageProps = {
  img_url: string;
};

export function Image({ img_url }: ImageProps) {
  return <Container source={{ uri: img_url || 'http://placeimg.com/640/480' }} />;
}

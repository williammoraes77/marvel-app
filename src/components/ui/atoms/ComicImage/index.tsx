import React from 'react';

import { Container } from './styles';

interface ImageProps {
  img_url: string;
}

export function ComicImage({ img_url }: ImageProps) {
  return <Container source={{ uri: img_url }} />;
}


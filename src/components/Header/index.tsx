import Logo from '@assets/marvel-logo.png';
import React from 'react';

import { Container, Image } from './styles';

export function Header() {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
}

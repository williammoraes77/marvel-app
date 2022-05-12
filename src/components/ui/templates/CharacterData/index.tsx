import React from 'react';

import {
  Container,
  CharacterTitleContent,
  LineDivisionContent,
  CharacterSubTitleContent,
} from './styles';

import { CharacterTitle } from '@src/components/ui/atoms/CharacterTitle';
import { LineDivision } from '@src/components/ui/atoms/LineDivision';
import { CharacterSubTitle } from '@src/components/ui/atoms/CharacterSubTitle';
import { Comics } from '@src/components/ui/organisms/Comics';
import { HeroProps } from '@src/hooks/hero';

export function CharacterData({ name, comics }: HeroProps) {
  return (
    <Container>
      <CharacterTitleContent>
        <CharacterTitle title={name} />
      </CharacterTitleContent>
      <LineDivisionContent>
        <LineDivision />
      </LineDivisionContent>
      <CharacterSubTitleContent>
        <CharacterSubTitle subTitle="Quadrinhos que participa" />
      </CharacterSubTitleContent>
      <Comics data={comics} />
    </Container>
  );
}


import React, { useState } from 'react';

import {
  Container,
  ImageContent,
  ImageData,
  FooterContent,
  CharacterTitleContent,
  LineDivisionContent,
  CharacterSubTitleContent,
  NavOptions,
  WrapperNavOptions,
  OptionNav,
} from './styles';

import { CharacterTitle } from '@src/components/ui/atoms/CharacterTitle';
import { LineDivision } from '@src/components/ui/atoms/LineDivision';
import { CharacterSubTitle } from '@src/components/ui/atoms/CharacterSubTitle';
import { HeroProps, useHero } from '@src/hooks/hero';
import { Series } from '../../organisms/Series';
import { Events } from '../../organisms/Events';

export function CharacterData({ name, comics, series, events }: HeroProps) {
  const [select, setSelect] = useState('series');
  const { hero, clearHero } = useHero();

  return (
    <Container>
      <ImageContent>
        <ImageData
          source={{ uri: `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}` }}
        />
      </ImageContent>
      <FooterContent>
        <CharacterTitleContent>
          <CharacterTitle title={name} />
        </CharacterTitleContent>
        <LineDivisionContent>
          <LineDivision />
        </LineDivisionContent>
        <CharacterSubTitleContent>
          <NavOptions>
            <WrapperNavOptions selected={select === 'series'} onPress={() => setSelect('series')}>
              <OptionNav selected={select === 'series'}>
                <CharacterSubTitle subTitle="Series" />
              </OptionNav>
            </WrapperNavOptions>
            <WrapperNavOptions selected={select === 'events'} onPress={() => setSelect('events')}>
              <OptionNav selected={select === 'events'}>
                <CharacterSubTitle subTitle="Events" />
              </OptionNav>
            </WrapperNavOptions>
          </NavOptions>
        </CharacterSubTitleContent>
        {select === 'series' && <Series data={series} />}
        {select === 'events' && <Events data={events} />}
      </FooterContent>
    </Container>
  );
}

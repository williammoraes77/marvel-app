import { Header } from '@src/components/Header';
import { Input } from '@src/components/Input';
import { Card } from '@src/components/ui/molecules/Card';
import { List } from '@src/components/ui/organisms/List';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useHero } from '@src/hooks/hero';

import { Container, Content, WrapperInput } from './styles';

export function Home() {
  const theme = useTheme();
  const { loadHeroes } = useHero();

  const handleTextChange = _.debounce((text) => {
    loadHeroes(text);
  }, 500);

  function handleGetCharacters() {}

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <WrapperInput>
          <Input
             placeholder="Busque pelo nome do personagem"
             placeholderTextColor={theme.colors.card}
             icon="search"
             handlePress={handleGetCharacters}
             onChangeText={handleTextChange}
             autoCapitalize="none"
             autoCorrect={false}
          />
        </WrapperInput>
        <List />
      </Content>

    </Container>
  );
}

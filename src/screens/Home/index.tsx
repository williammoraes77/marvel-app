import { Header } from '@src/components/Header';
import { Input } from '@src/components/Input';
import { Card } from '@src/components/ui/molecules/Card';
import { List } from '@src/components/ui/organisms/List';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useHero } from '@src/hooks/hero';

import {
  Container,
  Content, WrapperInput,
  Paginate,
  PageButton,
  PageButtonSelected,
  NumericButtonContent,
  NumericButtonText,
  Icon,
} from './styles';

export function Home() {
  const theme = useTheme();
  const { loadHeroes, handlePaginate, paginate } = useHero();
  const [InputValue, setInputValue] = useState('');

  const handleTextChange = _.debounce((text) => {
    handlePaginate(0);
    loadHeroes(text);
    setInputValue(text);
  }, 300);

  function handleGetCharacters() {}

  function handleChangePaginate(num: number){
    if(num< 0){
      num = 0;
    }
    handlePaginate(num);
  }


  useEffect(() => {
    loadHeroes();
  }, [paginate]);

  return (
    <Container>
      <Header />
      <Content>
        <WrapperInput>
          <Input
             placeholder="Search by character name"
             placeholderTextColor={theme.colors.card}
             icon="search"
             handlePress={handleGetCharacters}
             onChangeText={handleTextChange}
             autoCapitalize="none"
             autoCorrect={false}
          />
        </WrapperInput>
        <List />
        {
          InputValue == '' && (
            <Paginate>
              <PageButton onPress={() => handleChangePaginate(paginate-10)}>
                <Icon name="chevron-left"/>
              </PageButton>
              <NumericButtonContent>
                {
                  paginate > 10 && (
                    <PageButton onPress={() => handleChangePaginate(paginate-20)} style={{marginRight: 15}}  >
                      <NumericButtonText>{(paginate/10) - 1}</NumericButtonText>
                    </PageButton>
                  )
                }
                {
                  paginate > 1 && (
                    <PageButton onPress={() => handleChangePaginate(paginate-10)} style={{marginRight: 15}}  >
                      <NumericButtonText>{(paginate/10)}</NumericButtonText>
                    </PageButton>
                  )
                }

                <PageButtonSelected onPress={() => handleChangePaginate(paginate+10)} style={{marginRight: 15}} >
                  <NumericButtonText>{(paginate/10 + 1)}</NumericButtonText>
                </PageButtonSelected>
                <PageButton onPress={() => handleChangePaginate(paginate+10)} style={{marginRight: 15}}>
                  <NumericButtonText>{(paginate/10) + 2}</NumericButtonText>
                </PageButton>
                <PageButton onPress={() => handleChangePaginate(paginate+20)}>
                  <NumericButtonText>{(paginate/10) + 3}</NumericButtonText>
                </PageButton>
              </NumericButtonContent>
              <PageButton onPress={() => handleChangePaginate(paginate+10)}>
                <Icon name="chevron-right"/>
              </PageButton>
            </Paginate>
          )
        }


      </Content>

    </Container>
  );
}

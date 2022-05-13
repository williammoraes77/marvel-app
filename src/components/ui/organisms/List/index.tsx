import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Container, Separator, ModalContent, Paginate, FirstButton, FirstButtonText, ContainerSmall } from './styles';

import { Card } from '@components/ui/molecules/Card';

import {useNavigation} from '@react-navigation/native';
import theme from '@src/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Detail } from '../../molecules/Detail';

import { useHero, HeroProps } from '@src/hooks/hero';
import { CharacterData } from '../../templates/CharacterData';
import { Series } from '../Series';
import { SmallCard } from '../../molecules/SmallCard';

export interface ItemProps {
  id: string;
  title: string;
  img_url: string;
}

export function List() {

  const {navigate} = useNavigation();

  const windowHeight = Dimensions.get('window').height;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const { hero, heroes, loadHero, loadHeroes, handlePaginate, paginate } = useHero();

  function handleDetaile(character_id: string){
    navigate('Detail', {character_id});
  }

  function handleCharacter(character_id: number) {
    loadHero(character_id);
  }

  useEffect(() => {
    if (hero && hero?.id && hero?.id !== null) {
      bottomSheetRef.current?.expand();
      handlePaginate(null);
    }
  }, [hero]);

  return (
    <>
    {
      windowHeight > 600 ? (
        <Container
          data={heroes}
          keyExtractor={(item: HeroProps) => item.id}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }: { item: HeroProps }) => ( <Card title={item.name} img_url={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`} series={item.series} events={item.events} handlePress={() => handleCharacter(item.id)}/>)}
        />
      ) : (
        <ContainerSmall
          data={heroes}
          numColumns={2}
          keyExtractor={(item: HeroProps) => item.id}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }: { item: HeroProps }) => (
            <SmallCard
              title={item.name}
              img_url={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
              handlePress={() => handleCharacter(item.id)}
            />
          )}
        />
      )
    }


    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[1, 880]}
      backgroundStyle={styles.modal}
      handleIndicatorStyle={styles.indicator}
    >
      {
        hero.series && <CharacterData name={hero.name} comics={hero.comics} series={hero.series} events={hero.events}/>
      }
    </BottomSheet>

    </>
  );
}


const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.bottomSheet,
    paddingBottom: getBottomSpace(),
  },
  indicator: {
    backgroundColor: theme.colors.card,
    width: 60,
  }
});

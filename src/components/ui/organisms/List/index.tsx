import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Container, Separator, ModalContent } from './styles';

import { Card } from '@components/ui/molecules/Card';

import {useNavigation} from '@react-navigation/native';

import Modal from "react-native-modal";
import theme from '@src/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Detail } from '../../molecules/Detail';

import { useHero, HeroProps } from '@src/hooks/hero';
import { CharacterData } from '../../templates/CharacterData';

export interface ItemProps {
  id: string;
  title: string;
  img_url: string;
}

export function List() {

  const {navigate} = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  // const [hero, setHero] = useState(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const { hero, heroes, loadHero } = useHero();

  function handleDetaile(character_id: string){
    navigate('Detail', {character_id});
  }

  function handleCharacter(character_id: number) {
    loadHero(character_id);
  }

  useEffect(() => {
    if (hero && hero?.id && hero?.id !== null) {
      bottomSheetRef.current?.expand();
      console.log('_______________________');
      console.log(hero);
    }
  }, [hero]);

  return (
    <>
    <Container
      data={heroes}
      keyExtractor={(item: HeroProps) => item.id}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: { item: HeroProps }) => ( <Card title={item.name} img_url={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`} comicText={item.name} handlePress={() => handleCharacter(item.id)}/>)}
    />

    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[1, 780]}
      backgroundStyle={styles.modal}
      handleIndicatorStyle={styles.indicator}
    >
      <CharacterData name={hero.name} comics={hero.comics} />
    </BottomSheet>


      {/* <Modal isVisible={isModalVisible} swipeDirection='down' style={{ justifyContent: 'flex-end' }}>
        <ModalContent>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={handleToggleModal} />
        </ModalContent>
      </Modal> */}

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

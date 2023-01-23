import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

import {
  Container,
  ImageContainer,
  ThumbContainer,
  ThumbImage,
  Title,
  SubTitle,
  ModalContent,
  RowContent,
} from './styles';

import { DetailImage } from '@src/components/ui/atoms/DetailImage';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import { Image } from '../../atoms/Image';

interface Props {
  img: string;
  title: string;
  startYear?: string;
  endYear?: string;
  modified?: string;
  description?: string;
  type: 'Serie' | 'Event';
}

export function DetailCard({ img, title, startYear, endYear, modified, type, description }: Props) {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  function handleToggleModal() {
    setModalVisible(!isModalVisible);
  }

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [visible]);

  return (
    <>
      <Container onPress={handleToggleModal}>
        <ImageContainer>
          <DetailImage img_url={img} />
        </ImageContainer>
        <Title numberOfLines={1}>{title}</Title>
      </Container>

      <Modal isVisible={isModalVisible}>
        <ModalContent>
          <ThumbContainer>
            <ThumbImage source={{ uri: img }} />
          </ThumbContainer>
          <RowContent
            style={{ alignItems: 'center', justifyContent: 'center', marginBottom: RFValue(10) }}
          >
            <SubTitle style={{ fontSize: RFValue(15) }}>{title}</SubTitle>
          </RowContent>
          {type === 'Serie' && (
            <>
              <RowContent>
                <Title>Type:</Title>
                <SubTitle>{type}</SubTitle>
              </RowContent>
              <RowContent>
                <Title>Start Year:</Title>
                <SubTitle>{startYear}</SubTitle>
              </RowContent>
              <RowContent>
                <Title>End Year:</Title>
                <SubTitle>{endYear}</SubTitle>
              </RowContent>
              <RowContent>
                <Title>Modified:</Title>
                <SubTitle>{modified}</SubTitle>
              </RowContent>
            </>
          )}

          {type === 'Event' && (
            <>
              <RowContent>
                <SubTitle style={{ textAlign: 'justify', lineHeight: 18 }}>{description}</SubTitle>
              </RowContent>
            </>
          )}

          <Button title="Close" onPress={handleToggleModal} />
        </ModalContent>
      </Modal>
    </>
  );
}

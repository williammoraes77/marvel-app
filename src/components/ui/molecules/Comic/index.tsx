import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

import { Container } from './styles';

import { ComicImage } from '@src/components/ui/atoms/ComicImage';

interface Props {
  img: string;
  title: string;
}

export function Comic({ img, title }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [visible]);

  return (
    <>
      <Tooltip
        isVisible={visible}
        content={<Text>{title}</Text>}
        placement="top"
        onClose={() => setVisible(false)}
        backgroundColor="#0000"
      >
        <Container onPress={() => setVisible(true)}>
          <ComicImage img_url={img} />
        </Container>
      </Tooltip>
    </>
  );
}


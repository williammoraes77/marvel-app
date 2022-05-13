import React from 'react';
import { View } from 'react-native';

import { Container, Separator } from './styles';

import { DetailCard } from '@src/components/ui/molecules/DetailCard';
import { ComicProps } from '@src/hooks/hero';

export function Details({ data }: ComicProps) {
  return (
    <View style={{ flex: 1 }}>
      <Container
        data={data}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }: { item: ComicProps }) => (
          <DetailCard
            img={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
            title={item.title}
          />
        )}
        horizontal
      />
    </View>
  );
}


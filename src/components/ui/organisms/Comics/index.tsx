import React from 'react';
import { View } from 'react-native';

import { Container, Separator } from './styles';

import { Comic } from '@src/components/ui/molecules/Comic';
import { ComicProps } from '@src/hooks/hero';

export function Comics({ data }: ComicProps) {
  return (
    <View style={{ flex: 1 }}>
      <Container
        data={data}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }: { item: ComicProps }) => (
          <Comic
            img={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
            title={item.title}
          />
        )}
        horizontal
      />
    </View>
  );
}


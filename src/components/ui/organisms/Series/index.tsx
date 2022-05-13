import React from 'react';
import { View, Text } from 'react-native';

import { Container, Separator, SerieContent, Icon } from './styles';

import { Comic } from '@src/components/ui/molecules/Comic';
import { SeriesProps } from '@src/hooks/hero';

export function Series({ data }: any | null) {
  console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <Container
        data={data}
        horizontal
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }: { item: SeriesProps }) => (
          // <SerieContent>
          //   <Text style={{ color: '#fff' }}>{item.title}</Text>
          //   <Icon name="chevron-right"/>
          // </SerieContent>
          <Comic
            img={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
            title={item.title}
          />
        )}

      />
    </View>
  );
}


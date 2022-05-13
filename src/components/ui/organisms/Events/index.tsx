import React from 'react';
import { View, Text } from 'react-native';

import { Container, Separator } from './styles';

import { Comic } from '@src/components/ui/molecules/Comic';
import { SeriesProps } from '@src/hooks/hero';

export function Events({ data }: any) {

  return (
    <View style={{ flex: 1 }}>
      <Container
        data={data.items}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }: { item: SeriesProps }) => (
          <Text style={{ color: '#fff' }}>{item.name}</Text>
        )}

      />
    </View>
  );
}


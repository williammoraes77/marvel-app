import React from 'react';
import { View, Text } from 'react-native';
import { format } from "date-fns";

import { Container, Separator } from './styles';

import { DetailCard } from '@src/components/ui/molecules/DetailCard';
import { SeriesProps } from '@src/hooks/hero';

export function Events({ data }: any) {

  // console.log('*********************');
  // console.log(data);
  return (
    <View style={{ flex: 1 }}>
    <Container
      data={data}
      horizontal
      keyExtractor={(item, index) => `${item.title}-${index}`}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: { item: SeriesProps }) => (
        <DetailCard
          img={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
          title={item.title}
          description={item.description}
          type="Event"
        />
      )}

    />
  </View>
  );
}


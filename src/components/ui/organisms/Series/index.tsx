import React from 'react';
import { View, Text } from 'react-native';
import { format } from "date-fns";

import { Container, Separator, SerieContent, Icon } from './styles';

import { DetailCard } from '@src/components/ui/molecules/DetailCard';
import { SeriesProps } from '@src/hooks/hero';

export function Series({ data }: any | null) {

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
            startYear={item.startYear}
            endYear={item.endYear}
            modified={format(new Date(item.modified), "MMMM do, yyyy H:mma")}
            type="Serie"
          />
        )}

      />
    </View>
  );
}


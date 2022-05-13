import React from 'react';
import {ScrollView} from 'react-native';

import { SeriesProps } from '@src/hooks/hero';

import {
  Title,Container
} from './styles';

interface Props{
  data: any;
}

export function DetailsText({data}:any | null){

  return (
    <ScrollView>
      {
        data.items.map((item, index) => (
            index < 3 && (<Title key={index} style={{ color: '#000' }}>{item.name}</Title>)
        ))
      }
    </ScrollView>

  );
}

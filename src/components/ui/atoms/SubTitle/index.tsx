import React from 'react';

import { Text } from './styles';


interface TextProps {
  data: string;
}

export function SubTitle({ data }: TextProps) {
  return <Text>{data}</Text>;
}

import React from 'react';

import {
  Title
} from './styles';

interface Props{
  data: string;
}

export function DetailsText({data}:Props){
  return (
    <Title>
      {data}
    </Title>
  );
}
